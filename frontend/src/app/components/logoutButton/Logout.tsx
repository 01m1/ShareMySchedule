import React from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../config/config";
import { signOut } from "firebase/auth";
import nookies from "nookies";

function Logout() {
    const router = useRouter();

    // Function makes a request to the server to logout the user
    // Since cookie was set server-side, must delete on server-side
    const handleLogout = async () => {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (response.redirected) {
        router.push(response.url);
      } else {
        console.error("Logout failed");
      }
    };

  return (
    <div className="absolute top-0 right-0 px-3 bg-red-500 hover:bg-red-400 duration-300 ease-in-out mr-5 mt-3 rounded-lg">
      <button onClick={handleLogout} className="px-4 py-3 text-white">Logout</button>
    </div>
  );
}

export default Logout;
