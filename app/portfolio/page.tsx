export const metadata = {
    title: 'Projects | Next.js Course',
    description: "The projects you can build using Next.js" 
}

import Link from "next/link";

const projects = [
    { slug: "nextjs-dasboard", title: "Next.js Dashboard"},
    { slug: "data-visualizer", title: "Data Visualizer"}
];

export default function ProjectList() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">My Projects</h1>
            <ul className="space-y-3">
                {projects.map((project) => (
                    <li key={project.slug}>
                        <Link href={`/portfolio/${project.slug}`}
                        className="text-gray-400">
                            {project.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}