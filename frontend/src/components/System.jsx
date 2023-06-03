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
          updateHostname("Hostname: " + data.hostname);
          updateIP("IP: " + data.ip);
          updateCPU("CPU: " + data.cpu + "%");
          updateRAM("RAM: " + data.ram + "%");
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
      <h1 id="hostname">{hostname}</h1>
      <h1 id="ip">{ip}</h1>
      <h1 id="cpu">{cpu}</h1>
      <h1 id="ram">{ram}</h1>
    </div>
  );
}
export default System;
