document.addEventListener("DOMContentLoaded", function () {
    const recordButton = document.getElementById("recordButton");
    const recordingStatus = document.getElementById("recordingStatus");

let isRecording = false;
    let mediaRecorder;
    let audioChunks = [];

