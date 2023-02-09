
const Controls  = require('.\\build\\Release\\node-audio-windows')
console.log(Controls)

JSVolumeControl = new Controls.JSVolumeControl()

JSVolumeControl.setMuted(false);
JSVolumeControl.setVolume(0.7)
console.log("\nvolume : " + JSVolumeControl.getVolume());



