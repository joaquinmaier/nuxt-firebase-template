import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin( ( nuxt_app ) => {
    // To use environment variables use useRuntimeConfig() and define runtimeConfig in nuxt.config.ts
    const firebase_config = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: "",
    };

    const app   = initializeApp( firebase_config );
    const auth  = getAuth( app );
    const db    = getFirestore( app );

    nuxt_app.vueApp.provide( 'auth', auth );
    nuxt_app.provide( 'auth', auth );

    nuxt_app.vueApp.provide( 'app', app );
    nuxt_app.provide( 'app', app );

    nuxt_app.vueApp.provide( 'db', db );
    nuxt_app.provide( 'db', db );
} );
