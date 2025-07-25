export default function Card({ title, description } : { title: string; description: string }) {
    return (
        <div className="rounded-xl shadow-lg p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}