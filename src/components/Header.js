import React from "react";

function Header({ setInput }) {
  return (
    <div
      style={{
        height: "150px",
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
        marginBottom: "1rem",
      }}
    >
      <h1 style={{ color: "#fff" }}>Crypto App</h1>
      <div
        style={{
          width: "400px",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Bitcoin..."
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            border: "none",
            height: "30px",
            fontSize: "1.5rem",
            paddingLeft: "5px",
          }}
        />
      </div>
    </div>
  );
}

export default Header;
