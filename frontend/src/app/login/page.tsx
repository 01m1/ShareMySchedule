"use client"

import React, { useEffect } from "react";
import { signInWithGoogle } from "../utils/firebaseAuth"; // Adjust path as necessary
import LoginNavbar from "../components//LoginPage/LoginNavbar";
import LoginHeroSection from "../components/LoginPage/LoginHeroSection";
import LoginCards from "../components/LoginPage/LoginCards";

function LoginPage() {
 

  return (
    <div className="">
      <LoginNavbar google={signInWithGoogle} />
      <LoginHeroSection />
      <LoginCards />

    </div>
  );
}

export default LoginPage;
