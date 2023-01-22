import React from "react";

function Card({ elem }) {
  return (
    <div
      style={{
        backgroundColor: "#333",
        width: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
        color: "#fff",
        gap: "1.5rem",
        margin: "0 auto",
        borderRadius: "6px",
        marginBottom: "1rem",
      }}
    >
      <h2>Name: {elem.name}</h2>
      <div>
        <img
          src={
            elem.icon ||
            "https://usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png"
          }
          alt="icon"
        />
      </div>
      <h4>Price: {elem.price}</h4>
      <h4>Symbol: {elem.symbol}</h4>
    </div>
  );
}

export default Card;
