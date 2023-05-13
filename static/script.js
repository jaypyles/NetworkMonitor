function updateNetworkData() {
  $.ajax({
    url: "/routes/download_speed",
    type: "GET",
    dataType: "json",
    success: function (response) {
      // Update the content of the container element with the new upload speed
      $("#download-speed").text(
        "Download speed: " + response.download + " mb/s"
      );
    },
  });
  $.ajax({
    url: "/routes/upload_speed",
    type: "GET",
    dataType: "json",
    success: function (response) {
      // Update the content of the container element with the new upload speed
      $("#upload-speed").text("Upload speed: " + response.upload + " mb/s");
    },
  });
  $.ajax({
    url: "/routes/ping",
    type: "GET",
    dataType: "json",
    success: function (response) {
      // Update the content of the container element with the new upload speed
      $("#ping").text("Ping: " + response.ping + " ms");
    },
  });
}
