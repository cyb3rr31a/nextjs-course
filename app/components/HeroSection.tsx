export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Build with Next.js and Tailwind
            </h1>
            <p className="text-lg md:text-xl max-q-xl mx-auto mb-6">
                A hands-on guide to learn modern web development step-by-step.
            </p>
            <a
                href="#features"
                className="btn-primary"
            >
                Explore features
            </a>
        </section>
    );
}