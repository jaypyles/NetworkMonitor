import React, { useEffect, useState } from "react";

function NetworkStats() {
  const [download, setDownload] = useState("Download speed loading...");
  const [upload, setUpload] = useState("Upload speed loading...");
  const [ping, setPing] = useState("Ping loading...");
  useEffect(() => {
    const callSystemInfo = () => {
      Promise.all([
        fetch("/routes/download_speed"),
        fetch("/routes/upload_speed"),
        fetch("/routes/ping"),
      ])
        .then((responses) =>
          Promise.all(responses.map((response) => response.json()))
        )
        .then(([downloadResponse, uploadResponse, pingResponse]) => {
          setDownload("Download speed: " + downloadResponse.download + " mb/s");
          setUpload("Upload speed: " + uploadResponse.upload + " mb/s");
          setPing("Ping: " + pingResponse.ping + " ms");
        })
        .catch((error) => {
          console.error("Error fetching system info:", error);
        });
    };

    callSystemInfo();
  }, []);
  return (
    <div className="content speeds" id="speeds">
      <h2> Download, Upload, Ping </h2>
      <div id="download-speed">{download}</div>
      <div id="upload-speed">{upload}</div>
      <div id="ping">{ping}</div>
    </div>
  );
}

export default NetworkStats;
