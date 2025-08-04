import Card from "./Card";

export default function Features() {
    return(
        <section id="features" className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    What You&apos;ll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card 
                    title="Modern Routing"
                    description="Master file-based and dynamic routing with the App Router"
                    />
                    <Card 
                    title="Built-in APIs"
                    description="Create backend functionality directly in your Next.js app."
                    />
                    <Card 
                    title="Styling with Tailwind"
                    description="Style your UI with clean, responsive Tailwind utilities."
                    />
                </div>
            </div>
        </section>
    );
}