import Image from "next/image";
import LoginNavbar from "./components/LoginPage/LoginNavbar";


export default function Home() {
  return <main className="h-screen flex justify-center items-center">

    <div className=" h-[400px] w-[400px]">
      <h1 className="flex justify-center items-center h-full w-full text-6xl font-extrabold">Home Page</h1>
      <h2 className="flex justify-center text-4xl ">Welcome...{ /* Here is where the UserName will go */ }  </h2> 
    </div>
  </main>;
}
