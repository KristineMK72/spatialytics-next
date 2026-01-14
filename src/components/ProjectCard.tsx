import Link from "next/link";
import Card from "./Card";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="p-6">
      <div className="font-semibold">{project.title}</div>
      <p className="p mt-2 text-sm">{project.description}</p>
      <div className="mt-4">
        <Link className="underline underline-offset-4" href={`/projects/${project.slug}`}>
          View
        </Link>
      </div>
    </Card>
  );
}
