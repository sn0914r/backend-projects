import {
  register,
  auth,
  logout,
  login,
  getProtectedPosts,
} from "./firebase.js";
import { createCard, initMessageForUnauthenticated, initUI } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  initUI();
  initAuthState();
  initRegisterForm();
  initLoginForm();
  initProtectedContent();
});

const initRegisterForm = async () => {
  const registerForm = document.querySelector("#register-form");
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    await register(email, password, confirmPassword);
  });
};

const initLoginForm = async () => {
  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const email = formData.get("email");
    const password = formData.get("password");
    await login(email, password);
    loginForm.reset();
  });
};

const initAuthState = () => {
  const logoutBtn = document.querySelector("#logoutBtn");

  logoutBtn.addEventListener("click", async () => {
    await logout();
  });

  auth.onAuthStateChanged((user) => {
    logoutBtn.disabled = !user;
    logoutBtn.textContent = `Logout${user ? `: ${user.email}` : ""}`;

    if (!user) {
      initMessageForUnauthenticated();
    }
  });
};

const initProtectedContent = async () => {
  const btn = document.getElementById("view-posts");
  btn.addEventListener("click", async function () {
    const data = await getProtectedPosts();
    if (!data) {
      return;
    }
    const cards = data.map((e) => createCard(e.title, e.description));
    const postsContainer = document.querySelector("#posts");
    postsContainer.innerHTML = cards.join(",");
  });
};
