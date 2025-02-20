import CustomAppBar from './CustomAppBar';

export default function Home() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] min-h-screen ">
    {/* Sidebar */}
        <aside className="row-span-2 w-20 bg-white border-r border-r-background flex flex-col items-center py-4">
        <nav className="flex flex-col gap-6">

        </nav>
        </aside>

    {/* Header */}
        <header className="h-16 flex justify-between items-center px-4 border-b  bg-background">
        <CustomAppBar />
        </header>

    {/* Page content */}
        <main className="bg-background p-4">
        </main>
    </div>
  );
}
