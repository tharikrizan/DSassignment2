import React from "react";
//this is a static message in the top of the application
const DangerAndNormal = () => {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <h3 style={headerStyle}>
      If Sensor Normal <span className="badge badge-success"> GREEN</span>
      <br />
      If Sensor Danger <span className="badge badge-danger"> RED </span>
    </h3>
  );
};

export default DangerAndNormal;
