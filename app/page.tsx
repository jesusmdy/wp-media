import Provider from "@/components/provider";
import SiteList from "@/components/sites/list";


export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-auto ">
      <SiteList />
    </div>
  )
}