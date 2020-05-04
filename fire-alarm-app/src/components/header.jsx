import React from "react";

const Header = () => {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <h1 style={headerStyle} className="display-4">
      Fire Alarm App
    </h1>
  );
};

export default Header;
