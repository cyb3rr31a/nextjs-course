import Card from "./components/Card";

export default function HomePage() {
  return (
    <div className="p-6 space-y-6">
      <Card title="About This Course" description="Learn Next.js step-by-step." />
      <Card title="Build Real Projects" description="Apply concepts with hands-on practice." />
    </div>
  );
}