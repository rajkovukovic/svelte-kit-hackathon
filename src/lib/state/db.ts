// Initialize Cloud Firestore through Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

initializeApp({
	apiKey: import.meta.env.VITE_apiKey as string,
	authDomain: import.meta.env.VITE_authDomain as string,
	projectId: import.meta.env.VITE_projectId as string
});

export const db = getFirestore();
