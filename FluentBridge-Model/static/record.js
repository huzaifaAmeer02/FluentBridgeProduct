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

                    // Send the audio data to the Flask server
                    saveAudioFile(audioBlob);
                };

                mediaRecorder.start();
            })
            .catch(function (err) {
                console.error("Error accessing microphone:", err);
            });
    }

    // Function to stop recording audio
    function stopRecording() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
    }

    // Function to send audio data to the Flask server
    function saveAudioFile(audioBlob) {
        const formData = new FormData();
        formData.append('audioFile', audioBlob, 'recording.wav');
        fetch("/", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            // Handle response from server if needed
        })
        .catch(error => console.error("Error sending audio data:", error));
    }
});