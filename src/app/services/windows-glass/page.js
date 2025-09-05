import Container from "@/components/Container";
export const metadata = { title: "Windows & Glass" };
export default function WindowsGlassPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Windows & Glass</h1>
      <ul className="mt-4 list-disc pl-6 text-gray-300">
        <li>Office tint</li>
        <li>One-way mirror tint</li>
        <li>Frosted windows</li>
      </ul>
    </Container>
  );
}
