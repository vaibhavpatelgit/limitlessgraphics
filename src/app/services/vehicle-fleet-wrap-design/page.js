import Container from "@/components/Container";
export const metadata = { title: "Vehicle & Fleet Wrap Design" };
export default function VehicleWrapsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Vehicle & Fleet Wrap Design</h1>
      <ul className="mt-4 list-disc pl-6 text-gray-300">
        <li>Vehicle wraps (custom prints)</li>
        <li>Vehicle wraps (color change)</li>
        <li>Paint protection film</li>
        <li>Headlights & taillights tint</li>
        <li>Small decals and big decals</li>
        <li>Automotive tinting</li>
        <li>Preferred windows</li>
        <li>Chrome delete</li>
      </ul>
    </Container>
  );
}
