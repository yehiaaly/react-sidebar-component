import Sidebar from "./components/sidebar/sidebar";
import navItems from "./components/sidebar/data";
import { SidebarProvider } from "@/components/ui/sidebar";

const App = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        <Sidebar navItems={navItems} />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Main Content</h1>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default App;
