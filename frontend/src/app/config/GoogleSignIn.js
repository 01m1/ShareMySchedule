// components/GoogleSignIn.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

const GoogleSignIn = () => {
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          // Successfully signed in
          console.log(result.user); // You can route them to another page or so
          router.push("/dashboard"); // Redirect to another page after login
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [auth, router]);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
};

export default GoogleSignIn;
