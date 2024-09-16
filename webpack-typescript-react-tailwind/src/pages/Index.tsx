import * as React from "react";
import ExampleComponent from "../components/ExampleComponent";
import { createRoot } from "react-dom/client";
import * as pic from "../assets/t.png";
import "../styles/styles.css";

const Index = () => {
  return (
    <>
      <div className="container text-left ttt">
        This is the index page.
        <ExampleComponent />
        <img src={pic}></img>
      </div>
    </>
  );
};

export default Index;
const root = document.getElementById("root");
createRoot(root).render(<Index />);
