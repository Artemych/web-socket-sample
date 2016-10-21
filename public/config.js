var Config = {
  // Contents of this file will be send to the client
  "domain":     '127.0.0.1',
  "serverip":   '127.0.0.1',
  "serverport": '8080',
  "clientport": '8080',
  "protocol":   'ws://',

  "heartbeattmo": 500, // milliseconds 
  
  "wsclientopts": { reconnection: true, 
                    reconnectionDelay: 2000,
                    reconnectionAttempts: 100,
                    secure: false
                  }
};

module.exports = Config;