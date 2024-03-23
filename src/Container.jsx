import { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./stats";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacters: text.length,
    numberofWords: text.split(" ").filter((word) => word !== "").length,
    instaCharLeft: 280 - text.length,
    faceCharLeft: 2200 - text.length,
  };

  return (
    <main className="container">
      <TextArea
        text={text}
        setText={setText}
      />
      <Stats stats={stats} />
    </main>
  );
}
