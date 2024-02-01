import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../config/firebaseConfig";
import { AuthDetails } from "../model/types";

export const logoutUser = () => {
  auth.signOut();
};

export const signUpUser = async ({ name, email, password }: AuthDetails) => {
  try {
    var checkUser = await createUserWithEmailAndPassword(auth, email, password);
    auth.updateCurrentUser(checkUser.user);

    return {};
  } catch (error : any) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "E-mail already in use."
        };
      case "auth/invalid-email":
        return {
          error: "Invalid e-mail address format."
        };
      case "auth/weak-password":
        return {
          error: "Password is too weak."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};

export const loginUser = async ({ email, password }: AuthDetails) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return {};
  } catch (error : any) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Invalid email address or password."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};

export const sendEmailWithPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return {};
  } catch (error : any) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format."
        };
      case "auth/user-not-found":
        return {
          error: "User with this email does not exist."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};