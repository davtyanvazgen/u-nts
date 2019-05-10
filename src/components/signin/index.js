import React, { useState } from "react";
import firebase from "firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const adminLogIn = function(e) {
    e.preventDefault();
    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(u => {
          console.log("u---", u);
          // window.location = "/";
        })
        .catch(err => {
          alert(err.message);
        });
    } else {
      alert("please enter correct email or password");
    }
  };

  return (
    <>
      <input type="text" value={email} onChange={handleEmail} />
      <br />
      <input type="password" value={password} onChange={handlePassword} />
      <button onClick={adminLogIn}>login</button>
    </>
  );
};

export default SignIn;
