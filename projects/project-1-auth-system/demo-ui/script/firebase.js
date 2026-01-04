import firebaseConfig, {
  REGISTER_ENDPOINT,
  PROTECTED_DATA_ENDPOINT,
} from "./secrets.js";

// Firebase SDK CDN imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  signInWithCustomToken,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const register = async (email, password, confirmPassword) => {
  try {
    const res = await fetch(REGISTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
      }),
    });

    console.log(res.ok);

    const data = await res.json();

    if (!data.isSuccess) {
      alert(data.error);
      return;
    }
    const { token } = data;

    await signInWithCustomToken(auth, token);
    alert("Registration successfull");
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (email, password) => {
  try {
    alert("Please wait....");
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful");
  } catch (error) {
    alert("Login Failed");
    console.log(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    alert("Logout Successful");
  } catch (error) {
    alert("Logout Failed");
    console.log(error.message);
  }
};

export const getProtectedPosts = async () => {
  try {
    const idToken = (await auth.currentUser.getIdToken()) || false;
    console.log(idToken);
    const response = await fetch(PROTECTED_DATA_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    const data = await response.json();

    if (!data.isSuccess) {
      throw new Error(data.error);
    }

    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};
