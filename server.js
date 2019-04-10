var SSDP = require('node-ssdp').Server
  , server = new SSDP({
    location: 'http://xboxone.int:8008/ssdp/device-desc.xml'
  });
server.addUSN('urn:dial-multiscreen-org:service:dial:1');
server.start()
  .catch(e => {
    console.log('Failed to start server:', e)
  })
  .then(() => {
    console.log('Server started.')
  })

