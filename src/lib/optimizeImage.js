export async function optimizeImage(file, options = {}) {
  const { maxWidth = 1920, maxHeight = 1920, quality = 0.82 } = options;

  if (!file || !file.type?.startsWith("image/")) {
    return file;
  }

  // SVG/GIF should not go through canvas conversion
  if (file.type === "image/svg+xml" || file.type === "image/gif") {
    return file;
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      try {
        let width = img.naturalWidth;
        let height = img.naturalHeight;

        const ratio = Math.min(maxWidth / width, maxHeight / height, 1);

        width = Math.round(width * ratio);
        height = Math.round(height * ratio);

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
          URL.revokeObjectURL(objectUrl);
          resolve(file);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(objectUrl);

            if (!blob) {
              resolve(file);
              return;
            }

            // Don't replace original if optimization somehow made it larger
            if (blob.size >= file.size) {
              resolve(file);
              return;
            }

            const originalName = file.name.replace(/\.[^/.]+$/, "");

            const optimizedFile = new File([blob], `${originalName}.webp`, {
              type: "image/webp",
              lastModified: Date.now(),
            });

            resolve(optimizedFile);
          },
          "image/webp",
          quality,
        );
      } catch (error) {
        URL.revokeObjectURL(objectUrl);
        reject(error);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(file);
    };

    img.src = objectUrl;
  });
}
