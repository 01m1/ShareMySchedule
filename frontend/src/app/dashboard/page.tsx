"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Logout from "../components/logoutButton/Logout";
import GoogleCalendar from "../components/Dashboard/Calendar";

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
          method: "GET",
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

  return (
    <main className="h-screen flex justify-center items-center">
      <Logout />
      <GoogleCalendar/>
      <div className="flex flex-col gap-4">
        <h1 className="flex justify-center items-center h-full w-full text-6xl font-extrabold">
          Home Page
        </h1>
        <h2 className="flex justify-center text-4xl ">
          Welcome...{user?.username}{" "}
        </h2>
      </div>
    </main>
  );
}
