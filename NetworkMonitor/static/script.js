function updateNetworkData() {
  // Make all AJAX requests in parallel
  $.when(
    $.ajax({ url: "/routes/download_speed", type: "GET", dataType: "json" }),
    $.ajax({ url: "/routes/upload_speed", type: "GET", dataType: "json" }),
    $.ajax({ url: "/routes/ping", type: "GET", dataType: "json" })
  ).done(function (downloadResponse, uploadResponse, pingResponse) {
    // Update the respective container elements with the received responses
    $("#download-speed").text(
      "Download speed: " + downloadResponse[0].download + " mb/s"
    );
    $("#upload-speed").text(
      "Upload speed: " + uploadResponse[0].upload + " mb/s"
    );
    $("#ping").text("Ping: " + pingResponse[0].ping + " ms");
  });
}

function callDocker() {
  $.ajax({
    url: "/routes/docker_ps",
    type: "GET",
    dataType: "json",
    success: function (response) {
      // Update the content of the container element with the new upload speed
      $("#code").text(response.running);
    },
  });
}
function callSystemInfo() {
  $.ajax({
    url: "/routes/system_info",
    type: "GET",
    dataType: "json",
    success: function (response) {
      // Update the content of the container element with the new upload speed
      $("#hostname").text(response.hostname);
      $("#ip").text(response.ip);
    },
  });
}
