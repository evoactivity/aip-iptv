const request = require('request');

function getIptv(url,user,password){
 //var url = "http://psrv.io:80/player_api.php?username=Felipe&password=vvoYEf9UFn";
    var options = {
        url: url+"player_api.php?username="+user+"&password="+password,
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

function get_vod_info(url,user,password,vod_id){

    var options = {
        url: url+"player_api.php?username="+user+"&password="+password+"&action=get_vod_info&vod_id="+vod_id,
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

function get_series_info(url,user,password,vod_id){

    var options = {
        url: url+"player_api.php?username="+user+"&password="+password+"&action=get_series_info&series_id="+vod_id,
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

function get_live_categories(url,user,password){

    var options = {
        url: url+"player_api.php?username="+user+"&password="+password+"&action=get_live_categories",
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

function get_live_streams(url,user,password){

    var options = {
        url: url+"player_api.php?username="+user+"&password="+password+"&action=get_live_streams",
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


function get_vod_categories(url,user,password){

    var options = {
        url: url+"player_api.php?username="+user+"&password="+password+"&action=get_vod_categories",
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

function get_vod_streams(url,user,password){

    var options = {
        url: url+"player_api.php?username="+user+"&password="+password+"&action=get_vod_streams",
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

function get_series_categories(url,user,password){

    var options = {
        url: url+"player_api.php?username="+user+"&password="+password+"&action=get_series_categories",
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

function get_series(url,user,password){

    var options = {
        url: url+"player_api.php?username="+user+"&password="+password+"&action=get_series",
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

function get_epg(url,user,password){

    var options = {
        url: url+"player_api.php?username="+user+"&password="+password,
        method: 'GET',
        headers: {
            'Content-Type': 'text/xml',
            
        }
     
    }

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
        var buffer = "";
        if (!error && response.statusCode == 200) {   
            resolve(buffer = buffer + body);
        }
        else
        console.log("Reject ->" + error );
            reject(error);
        });
    });
}

function get_short_epg(url,user,password,stream_id){

    var options = {
        url: url+"player_api.php?username="+user+"&password="+password+"&action=get_short_epg&stream_id="+stream_id,
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

function getPanelApi(url,user,password){
   // url = 'http://uhd.twistertv.online:8880/panel_api.php?username=turbox_leandro&password=249015123';
    var options = {
        url: url+"panel_api.php?username="+user+"&password="+password,
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
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









module.exports = {getIptv,get_vod_info,get_series_info,get_live_categories,get_live_streams,get_vod_categories,get_vod_streams,get_series_categories,get_series,get_epg,get_short_epg,getPanelApi};