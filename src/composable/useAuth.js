import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";

import { firebaseApp, firebaseAuth } from "./useFirebase";

const isAuthenticated = ref(false);

const user = ref("");

const useAuth = () => {
  const login = async (username, password) => {
    const credentials = await signInWithEmailAndPassword(
      firebaseAuth,
      username,
      password
    );

    if (credentials.user) {
      isAuthenticated.value = true;
      user.value = credentials.user.email;
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
    user.value = "";
  };

  return { isAuthenticated, login, logout, user };
};

export default useAuth;
