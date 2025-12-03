class AudioService {
    constructor() {
        this.synth = window.speechSynthesis;
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    }

    speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'it-IT';
        utterance.rate = 0.9;
        this.synth.speak(utterance);
    }

    startListening(callback) {
        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            callback(transcript);
        };
        this.recognition.start();
    }
}

export default AudioService;