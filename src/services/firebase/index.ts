import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics, logEvent, setCurrentScreen } from "@firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseAuth = initializeApp(firebaseConfig, "music-app"),
  //Inicializando Aplicações do Firebase
  Authentication = getAuth(firebaseAuth),
  FireStore = getFirestore(firebaseAuth),
  Analytics = getAnalytics(firebaseAuth);

export { Authentication, FireStore, Analytics, logEvent, setCurrentScreen };

// logEvent(Analytics, "add_payment_info")
// logEvent(Analytics, "add_shipping_info");
// logEvent(Analytics, "add_to_cart");
// logEvent(Analytics, "add_to_wishlist");
// logEvent(Analytics, "begin_checkout");
// logEvent(Analytics, "checkout_progress");
// logEvent(Analytics, "exception");
// logEvent(Analytics, "generate_lead");
// logEvent(Analytics, "login");
// logEvent(Analytics, "page_view");
// logEvent(Analytics, "purchase");
// logEvent(Analytics, "refund");
// logEvent(Analytics, "remove_from_cart");
// logEvent(Analytics, "screen_view");
// logEvent(Analytics, "search");
// logEvent(Analytics, "select_content");
// logEvent(Analytics, "set_checkout_option");
// logEvent(Analytics, "share");
// logEvent(Analytics, "sign_up");
// logEvent(Analytics, "timing_complete");
// logEvent(Analytics, "view_item");
// logEvent(Analytics, "view_item_list");
// logEvent(Analytics, "view_promotion");
// logEvent(Analytics, "view_search_results");
