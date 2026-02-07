let progress = 0;
let musicPlaying = false;

function showSurprise() {
    document.getElementById("surprise").classList.remove("hidden");
    confetti();
}

function increaseLove() {
    if (progress < 100) {
        progress += 10;
        document.getElementById("progress").style.width = progress + "%";
    }
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (!musicPlaying) {
        music.play();
        musicPlaying = true;
    } else {
        music.pause();
        musicPlaying = false;
    }
}

function revealSecret() {
    document.getElementById("secretText").classList.toggle("hidden");
}

/* CONFETTI */
function confetti() {
    for (let i = 0; i < 30; i++) {
        let conf = document.createElement("div");
        conf.style.position = "fixed";
        conf.style.top = "-10px";
        conf.style.left = Math.random() * 100 + "vw";
        conf.style.width = "10px";
        conf.style.height = "10px";
        conf.style.background = "#ffd700";
        conf.style.animation = "fall 2s linear";
        document.body.appendChild(conf);

        setTimeout(() => conf.remove(), 2000);
    }
}