import React, { useEffect, useState } from "react";

function System() {
  const [hostname, updateHostname] = useState();
  const [ip, updateIP] = useState();
  const [cpu, updateCPU] = useState();
  const [ram, updateRAM] = useState();

  useEffect(() => {
    const callSystem = () => {
      fetch("routes/system_info")
        .then((response) => response.json())
        .then((data) => {
          updateHostname(data.hostname);
          updateIP(data.ip);
          updateCPU(data.cpu);
          updateRAM(data.ram);
        });
    };
    callSystem();
    const intervalID = setInterval(callSystem, 10000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="content system" id="system">
      <h2> System Stats </h2>
      <p className="title">
        <strong>
          <u>Hostname:</u>
        </strong>{" "}
        {hostname}
      </p>
      <p className="title">
        <strong>
          <u>IP:</u>
        </strong>{" "}
        {ip}
      </p>
      <p className="title">
        <strong>
          <u>CPU:</u>
        </strong>{" "}
        {cpu}%
      </p>
      <p className="title">
        <strong>
          <u>RAM:</u>
        </strong>{" "}
        {ram}%
      </p>
    </div>
  );
}

export default System;
