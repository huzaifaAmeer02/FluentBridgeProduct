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

// Attach click event to the record button
    recordButton.addEventListener("click", toggleRecording);

// Function to start recording audio
    function startRecording() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function (stream) {
                mediaRecorder = new MediaRecorder(stream);
                audioChunks = [];

                mediaRecorder.ondataavailable = function (event) {
                    if (event.data.size > 0) {
                        audioChunks.push(event.data);
                    }
                };

                mediaRecorder.onstop = function () {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
