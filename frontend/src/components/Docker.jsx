import React, { useEffect, useState } from "react";

function Docker() {
  const [dockerStatus, updateDocker] = useState("");
  useEffect(() => {
    const callDocker = () => {
      fetch("routes/docker_ps")
        .then((response) => response.json())
        .then((data) => {
          updateDocker(data.containers);
        })
        .catch((error) => {
          console.error("Error fetching docker:", error);
        });
    };
    callDocker();
    const intervalId = setInterval(callDocker, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="content docker" id="docker">
      <h2>Docker Status</h2>
      <pre id="docker-status">{dockerStatus}</pre>
    </div>
  );
}

export default Docker;
