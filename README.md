# xbox-ssdp-proxy

This is meant to be a proxy server for TubeCast on the Xbox One. At least on my Xbox One, the script didn't work due to what I suspect is a security constraint on listening to SSDP packets on the Xbox One.

This proxy server needs to be run on another machine in the same subnet, it will respond to SSDP requests from the YouTube app and forward them to the requested Xbox.

## How to
* Clone the repo
* Replace `xboxone.int` with the IP or hostname of your Xbox One IP address running Kodi with TubeCast.
* npm install && npm start

## Troubleshooting
The out-of-box tubecast didn't work for me. If you're having issues, you might want to try my [fork](https://github.com/stackrainbow/script.tubecast).
