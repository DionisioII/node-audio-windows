
const proctorControls  = require('.\\build\\Release\\node-audio-windows')
console.log(proctorControls)

JSVolumeControl = new proctorControls.JSVolumeControl()

JSVolumeControl.setMuted(false);
JSVolumeControl.setVolume(0.7)
console.log("\nvolume : " + JSVolumeControl.getVolume());



