import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

// Configura la conexión con Firebase
const firebaseConfig = {
    // Tu configuración de Firebase aquí
    apiKey: "AIzaSyDNeoa0YJDZwvVBKTM_HjIWlFHf7OX5Jmc",
    authDomain: "ejemplo1-ef966.firebaseapp.com",
    projectId: "ejemplo1-ef966",
    storageBucket: "ejemplo1-ef966.appspot.com",
    messagingSenderId: "914038583484",
    appId: "1:914038583484:web:ae9fbe10bb43ed594260b9",
    measurementId: "G-FG1XH1271L",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginMenu = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Aquí puedes manejar el éxito del inicio de sesión
                const user = userCredential.user;
                alert("Inicio de sesión exitoso: " + user.email);
            })
            .catch((error) => {
                // Aquí puedes manejar el error del inicio de sesión
                alert("Error en el inicio de sesión: " + error.message);
            });
    };

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={handleEmailChange}
            />
            <br></br>
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
            />
               <br></br>
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};

export default LoginMenu;
