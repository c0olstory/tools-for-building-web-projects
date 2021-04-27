export let audio = new Audio('../media/audio.mp3');

export function stopAudio() {
   audio.pause();
   audio.currentTime = 0;
}