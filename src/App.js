import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/home";
import { React, useState, useContext } from "react";
import { UserContext } from "./components/context";
import { Complete } from "./components/complete";

function App() {
  const [loginPass, setLoginPass] = useState(false);
  const [type, setType] = useState("");

  return (
    <>
      <UserContext.Provider value={{ loginPass, setLoginPass, type, setType }}>
        {!loginPass && <Home />}
        {loginPass && <Complete />}
      </UserContext.Provider>
    </>
  );
}

export default App;
