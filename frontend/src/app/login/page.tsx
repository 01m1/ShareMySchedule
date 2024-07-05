"use client"

import React, { useEffect } from "react";
import { signInWithGoogle } from "../utils/firebaseAuth"; // Adjust path as necessary

function LoginPage() {
 

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default LoginPage;
