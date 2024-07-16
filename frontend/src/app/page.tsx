"use client"

import Image from "next/image";
import LoginNavbar from "./components/LoginPage/LoginNavbar";
import { useEffect,useState } from "react";


interface User {
  email: string;
  uid: string;
  username: string;

}


export default function Home() {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUserData() {
        try {
            const response = await fetch("/api/user", {
                method: 'GET',

            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                console.error("Failed to get user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    fetchUserData();
}, []);

  
  return <main className="h-screen flex justify-center items-center">

    <div className=" h-[400px] w-[400px]">
      <h1 className="flex justify-center items-center h-full w-full text-6xl font-extrabold">Home Page</h1>
      <h2 className="flex justify-center text-4xl ">Welcome...{ user?.username }  </h2> 
    </div>
  </main>;
}
