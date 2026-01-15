import Container from "@/components/Container";
import Card from "@/components/Card";

export default function ServicesPage() {
  return (
    <main>
      <Container className="pt-10">
        <Card className="hero-panel p-8 md:p-14">
          <div className="kicker">Services</div>
          <h1 className="h1 mt-4">What I build</h1>
          <p className="p mt-6 max-w-2xl">
            Modern geospatial tools — interactive maps, dashboards, and automation —
            built to help people make better decisions.
          </p>
        </Card>
      </Container>
    </main>
  );
}
