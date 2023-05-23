import Navbar from "./navbar/navbar";
import Sidebar from "./navbar/sidebar";
import Posts from "./posts/page";

export default function Home() {
  
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="h-screen overflow-hidden w-full text-white bg-slate-900 bg-blue-gray-900">
        <Posts className=""></Posts>
      </div>
    </div>
  );
}

