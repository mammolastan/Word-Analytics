import { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./stats";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const numberofWords = text.split(" ").filter((word) => word !== "").length;
  const instaCharLeft = 280 - numberOfCharacters;
  const faceCharLeft = 2200 - numberOfCharacters;

  return (
    <main className="container">
      <TextArea
        text={text}
        setText={setText}
      />
      <Stats
        numberOfCharacters={numberOfCharacters}
        instaCharLeft={instaCharLeft}
        faceCharLeft={faceCharLeft}
        numberofWords={numberofWords}
      />
    </main>
  );
}
