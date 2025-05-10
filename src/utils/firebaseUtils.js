import { db } from "../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Save sequences tied to user
export const saveSequence = async (user, sequence) => {
  await addDoc(collection(db, "sequences"), {
    userId: user.uid,
    sequence,
    created: new Date()
  });
};

// Load sequences tied to user
export const loadSequences = async (user) => {
  const q = query(collection(db, "sequences"), where("userId", "==", user.uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
};
