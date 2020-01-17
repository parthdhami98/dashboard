import React, { useState } from "react";
import LoginPage from "./LoginPage";
import List from "./List";

export default function MainScreen() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  const handleChange = inputType => event => {
    switch (inputType) {
      case "username":
        setusername(event.target.value);
        break;
      case "password":
        setpassword(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (username === "bob" && password === "bob") {
      setShowDashboard(true);
    }
  };
  return (
    <div>
      {showDashboard
        ? <List />
        : <LoginPage
            onSubmit={handleSubmit}
            onChange={handleChange}
            username={username}
            password={password}
          />}
    </div>
  );
}
