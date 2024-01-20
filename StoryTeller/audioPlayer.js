class AudioPlayer {
    constructor() { 
        this.audio;
        this.button;
    }

    attachButton(newButton) {
        this.button = newButton;
    }

    loadNewAudio(newAudio) {
        this.pause();
        this.audio = newAudio;
    }

    volume() {
        if (this.isEnabled()) {
            return Math.round(this.audio.volume * 100);
        } else {
            return 0;
        }
    }

    setVolume(percentage) {
        if (percentage >= 0) {
            this.audio.volume = percentage / 100;
        } else if (percentage < 0) {
            this.pause();
        }
    }

    isDefined() {
        return this.button !== undefined && this.audio !== undefined;
    }

    isPlaying() {
        return !this.audio.paused;
    }

    isEnabled() {
        return this.isDefined() ? this.audio.readyState >= 1 : false;
    }

    play() {
        if (this.isEnabled()) {
            this.setVolume(100);
            this.audio.play();
            this.audio.currentTime = 0;
            this.button.innerHTML = `&square;`;
        }
    }

    pause() {
        if (this.isEnabled() && this.isPlaying()) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.button.innerHTML = `&raquo;`;
        }
    }
};