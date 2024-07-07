"use client"

import React, { useEffect } from "react";
import { signInWithGoogle } from "../utils/firebaseAuth"; // Adjust path as necessary
import LoginNavbar from "../components/LoginNavbar";

function LoginPage() {
 

  return (
    <div className="h-24">
      <LoginNavbar google={signInWithGoogle} />

    </div>
  );
}

export default LoginPage;
