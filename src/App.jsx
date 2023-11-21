import { Sidebar } from "./components/SidebarComponent"

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7">
            <h1 className="text-2xl font-semibold">Homepage</h1>
      </div>
    </div>
  );
}
