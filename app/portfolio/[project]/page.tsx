const projects = [
        {
            slug: "nextjs-dashboard",
            title: "Next.js Dashboard",
            description: "A sleek analytics dashboard built with Next.js and Tailwind CSS."
        },
        {
            slug: "data-visualizer",
            title: "Data Visualizer",
            description: "A data visualization app using D3.js and React"
        }
    ];
    
    type Props = {
    params: {
        project: string;
    };
};

export default function ProjectPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.project);

    if (!project) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold">404 - Project Not Found</h1>
            </div>
        );
    }

    return (
    <div className="p=6">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-600">{project.description}</p>
    </div>
    );
}