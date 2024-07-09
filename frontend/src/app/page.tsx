import Image from "next/image";
import LoginNavbar from "./components/LoginPage/LoginNavbar";


export default function Home() {
  return <main className="h-screen flex justify-center items-center">
    <LoginNavbar/>
    <div className=" h-[400px] w-[400px]">
      <h1 className="flex justify-center items-center h-full w-full text-6xl font-extrabold">Home Page</h1>
    </div>
  </main>;
}
