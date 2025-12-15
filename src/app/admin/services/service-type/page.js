export const metadata = { title: "Service Type | Admin" };

import ServiceTypeClient from "./ServiceTypeClient";

export default function ServiceTypePage() {
  // Server Component wrapper (can export metadata)
  return <ServiceTypeClient />;
}
