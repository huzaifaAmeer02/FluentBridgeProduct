document.addEventListener("DOMContentLoaded", function () {
    const recordButton = document.getElementById("recordButton");
    const recordingStatus = document.getElementById("recordingStatus");

let isRecording = false;
    let mediaRecorder;
    let audioChunks = [];

// Function to start or stop recording
    function toggleRecording() {
        isRecording = !isRecording;
        if (isRecording) {
            recordingStatus.innerText = "Recording...";
            startRecording();
        } else {
            recordingStatus.innerText = "Recording stopped.";
            stopRecording();
        }
    }
