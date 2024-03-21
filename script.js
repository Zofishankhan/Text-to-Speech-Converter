let speech = new SpeechSynthesisUtterance();
let voices =[];
const btn = document.querySelector(".row button");
const input = document.querySelector("form input");
const form = document.querySelector("form");
const voiceSelect = document.querySelector("select");
input.focus();
input.setSelectionRange(0,0);

window.speechSynthesis.onvoiceschanged =()=>{
    voices= window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => {
        (voiceSelect.options[i]) = new Option(voice.name,i);
    });
};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

btn.addEventListener("click",()=>{
    speech.text =input.value;
    window.speechSynthesis.speak(speech);
});

form.addEventListener("submit",()=>{
    speech.text =input.value;
    window.speechSynthesis.speak(speech);
});