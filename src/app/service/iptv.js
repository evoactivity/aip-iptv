const request = require('request');

function getIptv(url){

    var options = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type' : 'application/octet-stream',
            'User-Agent': 'FelipeTartarotti'
          }
    }

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            
        if (!error && response.statusCode == 200) {   
           resolve(body);
        }
        else
            reject(error);
        });
    });
}

module.exports = {getIptv};