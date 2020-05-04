import React from "react";

const Sensor = (props) => {
  const sensorDetails = props.sensorDetails;
  let sensorState;
  if (
    !sensorDetails.is_active ||
    sensorDetails.co2_level >= 5 ||
    sensorDetails.smoke_level >= 5
  ) {
    sensorState = "danger";
  } else {
    sensorState = "success";
  }

  const boarderClassColor = `card border-${sensorState} mb-3`;
  const badgeStateColor = ` badge badge-${sensorState}`;

  return (
    <div className={boarderClassColor} style={{ maxWidth: "15rem" }}>
      <div className="card-header container">
        <div className="row">
          <div className="col">Sensor {sensorDetails.id}</div>
          <div className="col">
            <span className={badgeStateColor}>
              {sensorDetails.is_active ? "active" : "Inactive"}
            </span>
          </div>
        </div>
      </div>
      <div className="card-body text-primary">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="card-title">Location </h5>
            </div>
            <div className="col">
              <span className={badgeStateColor}>
                floor: {sensorDetails.floor_no}{" "}
              </span>
              <span style={{ margin: "5px" }} className={badgeStateColor}>
                room: {sensorDetails.room_no}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="card-title">CO2 Level </h5>
            </div>
            <div className="col">
              <span style={{ padding: "10px" }} className={badgeStateColor}>
                {sensorDetails.co2_level}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="card-title">Smoke Level </h5>
            </div>
            <div className="col">
              <span style={{ padding: "10px" }} className={badgeStateColor}>
                {sensorDetails.smoke_level}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sensor;
