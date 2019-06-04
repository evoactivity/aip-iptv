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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function get_vod_info(url,vod_id){

    var options = {
        url: url+"&action=get_vod_info&vod_id="+vod_id,
        method: 'GET',
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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function get_series_info(url,vod_id){

    var options = {
        url: url+"&action=get_series_info&series_id="+vod_id,
        method: 'GET',
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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function get_live_categories(url){

    var options = {
        url: url+"&action=get_live_categories",
        method: 'GET',
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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function get_live_streams(url){

    var options = {
        url: url+"&action=get_live_streams",
        method: 'GET',
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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}


function get_vod_categories(url){

    var options = {
        url: url+"&action=get_vod_categories",
        method: 'GET',
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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function get_vod_streams(url){

    var options = {
        url: url+"&action=get_vod_streams",
        method: 'GET',
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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function get_series_categories(url){

    var options = {
        url: url+"&action=get_series_categories",
        method: 'GET',
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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function get_series(url){

    var options = {
        url: url+"&action=get_series",
        method: 'GET',
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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function get_epg(url){

    var options = {
        url: url,
        method: 'GET',
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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function get_short_epg(url,stream_id){

    var options = {
        url: url+"&action=get_short_epg&stream_id="+stream_id,
        method: 'GET',
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
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function getPanelApi(url){

    var options = {
        url: url,
        method: 'GET',
        headers: {
            'Content-Type' : 'application/octet-stream',
            'User-Agent': 'FelipeTartarotti'
        }
    }

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            
        if (!error && response.statusCode == 200) {   
            resolve(response);
        }
        else
        console.log("Reject ->" + error );
            reject(error);
        });
    });

}









module.exports = {getIptv,get_vod_info,get_series_info,get_live_categories,get_live_streams,get_vod_categories,get_vod_streams,get_series_categories,get_series,get_epg,get_short_epg,getPanelApi};