import { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./stats";
import { MAX_FACEBOOK, MAX_INSTAGRAM } from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacters: text.length,
    numberofWords: text.split(" ").filter((word) => word !== "").length,
    instaCharLeft: MAX_INSTAGRAM - text.length,
    faceCharLeft: MAX_FACEBOOK - text.length,
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
