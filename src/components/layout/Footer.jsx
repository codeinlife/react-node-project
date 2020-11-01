import React from "react";

export default function Footer({ byWho }) {
  return (
    <footer style={footerStyle}>
      <div>@codeinlife</div>
      <div>{byWho}</div>
    </footer>
  );
}

const footerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#424242",
  height: "60px",
  color: "#ffffff",
  fontSize: "1em",
  padding: "20px",
};
