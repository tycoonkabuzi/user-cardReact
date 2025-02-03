import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const userData = [
    {
      name: "Ntwali",
      surname: "Kabuzi",
      description:
        " Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum perferendis modi, quibusdam expedita sequi sint natus, eiuseveniet blanditiis dolor ad quia a corporis cupiditate vitae, teneturquisquam pariatur ut.",

      isHighlight: true,
    },
    {
      name: "Reed",
      surname: "Johns",
      description:
        " Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum perferendis modi, quibusdam expedita sequi sint natus, eiuseveniet blanditiis dolor ad quia a corporis cupiditate vitae, teneturquisquam pariatur ut.",

      isHighlight: false,
    },
    {
      name: "James",
      surname: "Smith",
      description:
        " Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum perferendis modi, quibusdam expedita sequi sint natus, eiuseveniet blanditiis dolor ad quia a corporis cupiditate vitae, teneturquisquam pariatur ut.",

      isHighlight: true,
    },
  ];
  return (
    <>
      <Card userData={userData} />
    </>
  );
}

export default App;
