import { initializeApp } from "firebase/app";
// Import SDK functions for Google Authentication
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7eLwMRpLFdpQt0FDow9kUMAFsuz4kBhs",
  authDomain: "giphy-v2.firebaseapp.com",
  projectId: "giphy-v2",
  storageBucket: "giphy-v2.appspot.com",
  messagingSenderId: "854206513148",
  appId: "1:854206513148:web:e34a948da53f7f88efbc79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Handles Sign In / Out with Google Auth (Using imported functions)
const authProvider = new GoogleAuthProvider();
export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
