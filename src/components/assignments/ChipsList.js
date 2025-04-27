const ChipsList = ({ chip, onRemove }) => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        border: "1px solid black",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {chip}
      <img
        src="https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000"
        alt="close"
        style={{ width: "16px", height: "16px", cursor: "pointer" }}
        onClick={(e) => {
          console.log(chip);
          return onRemove(chip);
        }}
      />
    </div>
  );
};
export default ChipsList;
