# UPDATE
I rewrote the original library to be compatible with the modern Napi interface of NodeJS
# Native Node.js volume controls for Windows

A native Windows API binding to control the default audio device. Supports set/get the volume and get the muted state and set the muted state.

[![npm](https://img.shields.io/npm/dm/node-audio-windows.svg)](https://www.npmjs.com/package/node-audio-windows)
[![npm](https://img.shields.io/npm/v/node-audio-windows.svg)](https://www.npmjs.com/package/node-audio-windows)

## How to Use
```javascript
const Controls  = require('node-audio-windows')
console.log(Controls)

JSVolumeControl = new Controls.JSVolumeControl()

JSVolumeControl.setMuted(false);
JSVolumeControl.setVolume(0.7)
console.log("\nvolume : " + JSVolumeControl.getVolume());
```
#### Note
Windows displays the audio at the scale from 0-100, but the library uses instead the scale 0.0 - 1.0 to match the scale Windows API actually uses.

## Development

#### node-gyp install for node version <= [17.9.1]
To build the project you need in Windows to install [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools) in an elevated PowerShell prompt `npm install --global --production windows-build-tools` and then `npm install` or if you have `node-gyp` installed globally

#### node-gyp install for node version >= [17.9.1]
`npm install -g node-gyp`

#### Build

```bash
$ node-gyp configure
$ node-gyp build

```
#### Run
The repository contains a demo of the usage
```bash
$ node demo.js
```


## Next steps
 - Expose the microphone API
 - Support controlling multiple audio devices

## Licence & Copyright
Copyright (c) 2018 Jarno Lonardi
The package `node-audio-windows` is licensed under MIT license.

