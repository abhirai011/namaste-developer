import React, { useState } from "react";
import ChipsList from "./ChipsList";
function ChipsInput() {
  const [text, setText] = useState("");
  const [listOfChips, setListOfChips] = useState([]);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setListOfChips([...listOfChips, text]);
      setText("");
    }
  };

  const handleRemoveChip = (chipToRemove) => {
    const updatedChips = listOfChips.filter((chip) => chip !== chipToRemove);
    setListOfChips(updatedChips);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={text}
      />

      <div>
        {listOfChips.map((chip, index) => {
          return (
            <ChipsList chip={chip} key={index} onRemove={handleRemoveChip} />
          );
        })}
      </div>
    </div>
  );
}

export default ChipsInput;
