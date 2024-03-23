import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    // basic validation
    if (newText.includes("<script>")) {
      setWarning("Please do not enter any script tag");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarning("Text cannot conain '@' symbol");
      newText = newText.replace("@", "");
    } else {
      setWarning("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        placeholder="Enter your text here..."
        onChange={handleChange}
        spellCheck="false"
        value={text}
      />
      {warning.length > 0 && <Warning warning={warning} />}
    </div>
  );
}
