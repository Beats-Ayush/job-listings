import React from "react";
import Form from "./components/Form";
import "./css/main.css";

const App = (props) => {
  return (
    <>
      <header className="header"></header>
      <main className="container">
        <Form />
      </main>
    </>
  );
};

export default App;
