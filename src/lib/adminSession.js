export const COOKIE_NAME = "lg_admin";

function arrayBufferToBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";

  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return globalThis
    .btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

async function sign(value, secret) {
  const encoder = new TextEncoder();

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    {
      name: "HMAC",
      hash: "SHA-256",
    },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(value),
  );

  return arrayBufferToBase64Url(signature);
}

export async function createAdminSessionToken() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is missing");
  }

  const expiresAt = Date.now() + 15 * 24 * 60 * 60 * 1000;

  const payload = String(expiresAt);
  const signature = await sign(payload, secret);

  return `${payload}.${signature}`;
}

export async function verifyAdminSessionToken(token) {
  try {
    const secret = process.env.ADMIN_SESSION_SECRET;

    if (!secret || !token) {
      return false;
    }

    const parts = token.split(".");

    if (parts.length !== 2) {
      return false;
    }

    const [payload, providedSignature] = parts;

    const expiresAt = Number(payload);

    if (!Number.isFinite(expiresAt)) {
      return false;
    }

    if (Date.now() >= expiresAt) {
      return false;
    }

    const expectedSignature = await sign(payload, secret);

    if (expectedSignature.length !== providedSignature.length) {
      return false;
    }

    let result = 0;

    for (let i = 0; i < expectedSignature.length; i++) {
      result |=
        expectedSignature.charCodeAt(i) ^ providedSignature.charCodeAt(i);
    }

    return result === 0;
  } catch (error) {
    console.error("Admin session verification error:", error);
    return false;
  }
}
