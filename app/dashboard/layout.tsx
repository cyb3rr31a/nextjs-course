import '@/app/globals.css'

export default function DashboardLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex">
            <aside className="w-1/4 p-4 bg-amber-600">Sidebar</aside>
            <main className="flex-1 p-6">{ children }</main>
        </div>
    );
}