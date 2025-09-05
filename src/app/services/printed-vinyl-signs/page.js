import Container from "@/components/Container";
export const metadata = { title: "Printed Vinyl & Signs" };
export default function PrintedVinylPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Printed Vinyl & Signs</h1>
      <ul className="mt-4 list-disc pl-6 text-gray-300">
        <li>Glass decals (exterior & interior)</li>
        <li>Street signage & C-CAN signage</li>
        <li>In-house graphic design</li>
        <li>Interior & exterior signs, banners</li>
        <li>Preferred windows</li>
        <li>Wall wraps</li>
      </ul>
    </Container>
  );
}
