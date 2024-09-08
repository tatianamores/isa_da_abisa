const frm = document.querySelector("form");
document.getElementById('avatar-container').appendChild(renderer.domElement);

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = frm.inTexto.value;
})

// Configuração do Áudio com Howler.js
const sound = new Howl({
    src: ['path/to/your/audio/file.mp3'], // Substitua pelo caminho para o seu arquivo de áudio
    autoplay: false,
    loop: false,
    volume: 1.0,
});

// Função para reproduzir áudio quando o botão é clicado
document.getElementById('speak-button').addEventListener('click', () => {
    sound.play();
});
function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

// Adiciona um evento ao botão para falar um texto específico
document.getElementById('speak-button').addEventListener('click', () => {
    speak('Olá, prazer! Eu sou a Isa, a inteligencia artificial da Abisa! Bem-vindo a Abisa Nordeste 2024');
});
