import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMm1FR7gu6I1p8g2LkJ4ggoBtWbIwiKoU",
  authDomain: "flipkart-login-with-otp.firebaseapp.com",
  projectId: "flipkart-login-with-otp",
  storageBucket: "flipkart-login-with-otp.appspot.com",
  messagingSenderId: "987434992653",
  appId: "1:987434992653:web:43a90ec1d086ca0f6d0144",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
