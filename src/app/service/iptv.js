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
        console.log("Url request ->" + url);
        request(options, function (error, response, body) {
            
        if (!error && response.statusCode == 200) {   
            console.log("Resultado request ->" + body );
            resolve(body);
        }
        else
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function getVod(url){

    var options = {
        url: url+"&action=get_vod_categories",
        method: 'GET',
        headers: {
            'Content-Type' : 'application/octet-stream',
            'User-Agent': 'FelipeTartarotti'
          }
    }

    return new Promise((resolve, reject) => {
        console.log("Url request ->" + url);
        request(options, function (error, response, body) {
            
        if (!error && response.statusCode == 200) {   
            console.log("Resultado request ->" + body );
            resolve(body);
        }
        else
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

module.exports = {getIptv,getVod};