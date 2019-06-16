const express = require('express');
const router = express.Router();
const iptv = require('../service/iptv');
const Device = require('../models/device');


//http://purpleserver.net:80/player_api.php?username=Felipe&password=vvoYEf9UFn&type=m3u_plus&output=m3u8
// heroku logs --tail --app turbox
//"/player_api.php?username=swe&password=sww&action=get_short_epg&stream_id=18319"
router.post('/',async (req,res,next)=>{  

    try{
        var body = req.body;
        console.log("APP CONTROLLER");
        console.log(body);
        //player_api.php?username=X&password=X
        //http://psrv.io:80/live/Felipe/vvoYEf9UFn/22886.m3u8
        //http://psrv.io:80/player_api.php?username=Felipe&password=vvoYEf9UFn&action=get_short_epg&stream_id=18301
        //var url = "http://psrv.io:80/player_api.php?username=Felipe&password=vvoYEf9UFn";
        var url;
        var mac_address = false;
        var third_server_login = false;
 
 
        
        await Device.findOne({"mac_address": body.username}, function(err, results){
            if(results){
                console.log('Encontrou mac_address');  
                url = results.url;
                mac_address = true;
            }
            else
            {
                mac_address = false;
            }        
        });

        await Device.findOne({"third_server_login": body.username}, function(err, results){
            if(results){                        
                console.log('Encontrou third_server_login');
                url = results.url;
                third_server_login = true;
            }
            else
            {
                third_server_login = false;
            }
        });    


        if(third_server_login || mac_address){
         
            switch(body.action) {
                case "not_found":
                        console.log("USUÁRIO NÃO ENCONTRADO")
                    break;
                case "get_series_info":
                    iptv.get_series_info(url,body.series_id.trim()).then((result) => {
                        console.log("Resultado appcontrolle get_series_info ->" );
                        return res.send(result);  
                    })
                    .catch((error) => {
                        console.log("Catch appcontrolle ->" + error );
                        next(error);
                    }); 
                        break;
                case "get_vod_info":
                    iptv.get_vod_info(url,body.vod_id.trim()).then((result) => {
                        console.log("Resultado appcontrolle get_vod_info ->");
                        return res.send(result);  
                    })
                    .catch((error) => {
                        console.log("Catch appcontrolle ->" + error );
                        next(error);
                    }); 
                    break;
                    
                case "get_live_categories":
                    iptv.get_live_categories(url).then((result) => {
                        console.log("Resultado appcontrolle get_live_categories ->" );
                        return res.send(result);  
                    })
                    .catch((error) => {
                        console.log("Catch appcontrolle ->" + error );
                        next(error);
                    }); 
                    break;
                case "get_live_streams":
                    iptv.get_live_streams(url).then((result) => {
                        console.log("Resultado appcontrolle get_live_streams ->" );
                        return res.send(result);  
                    })
                    .catch((error) => {
                        console.log("Catch appcontrolle ->" + error );
                        next(error);
                    }); 
                    break;
                case "get_vod_categories":
                    iptv.get_vod_categories(url).then((result) => {
                        console.log("Resultado appcontrolle get_vod_categories ->");
                        return res.send(result);  
                    })
                    .catch((error) => {
                        console.log("Catch appcontrolle ->" + error );
                        next(error);
                    }); 
                    break;
                case "get_vod_streams":
                    iptv.get_vod_streams(url).then((result) => {
                        console.log("Resultado appcontrolle get_vod_streams ->" );
                        return res.send(result);  
                    })
                    .catch((error) => {
                        console.log("Catch appcontrolle ->" + error );
                        next(error);
                    }); 
                    break;
                case "get_series_categories":
                    iptv.get_series_categories(url).then((result) => {
                        console.log("Resultado appcontrolle get_series_categories ->" );
                        return res.send(result);  
                    })
                    .catch((error) => {
                        console.log("Catch appcontrolle ->" + error );
                        next(error);
                    }); 
                    break;
                case "get_series":
                    iptv.get_series(url).then((result) => {
                        console.log("Resultado appcontrolle get_series ->" );
                        return res.send(result);  
                    })
                    .catch((error) => {
                        console.log("Catch appcontrolle ->" + error );
                        return next(error);
                    }); 
                    break;
                case "get_short_epg":
                    iptv.get_short_epg(url,body.stream_id).then((result) => {
                        console.log("Resultado appcontrolle get_short_epg ->" );
                        return res.send(result);  
                    })
                    .catch((error) => {
                        console.log("Catch appcontrolle ->" + error );
                        return next(error);
                    }); 
                    break;
                default:
                    console.log("entrou");
                    iptv.getIptv(url).then((result) => {
                        console.log("Resultado appcontrolle ->" );
                        return res.send(result);  
                    })
                    .catch((error) => {
                        console.log("Catch appcontrolle ->" + error );
                        return  next(error);
                    });  
                    break;     
            }
        }
        else
        {
            next('Dispositivo ' + body.username +' não cadastrado');
        }
              
    }catch(err){
        console.log("Try catch GERAL appcontrolle ->" + err );
        return res.status(400).send({error: err});
    }
});


module.exports = app => app.use('/player_api.php',router);



/*
     

    Report post 

Posted December 6, 2016

Hello,

These are the new API Calls, that you have to use. It is highly recommended to use this API as it is much faster than the previous one, and also more accurate and with abilities to be extended much more easier and faster than before.


Note: The API Does not provide Full links to the requested stream. You have to build the url to the stream in order to play it.

    For Live Streams the main format is

           http(s)://domain:port/live/username/password/streamID.ext ( In  allowed_output_formats element you have the available ext )

    For VOD Streams the format is:

    http(s)://domain:port/movie/username/password/streamID.ext ( In  target_container element you have the available ext )
     
    For Series Streams the format is

    http(s)://domain:port/series/username/password/streamID.ext ( In  target_container element you have the available ext )


On the First Authentication Call, you will get a list of some useful elements. If the server_protocol element is https you have to force all the API & Player Requests to be through https. The same Call, also provides the http(s) ports in case you need them as well as the domain name you should use.
The current datetime & timestamps are offered to you and can help you for time corrections for EPG & TV Archive.

If you want to limit the displayed output data, you can use params[offset]=X & params[items_per_page]=X on your call.

It is higly recommended to fetch all data at once and cache them to your Application.

 

 

Authentication

player_api.php?username=X&password=X


GET Live Stream Categories

player_api.php?username=X&password=X&action=get_live_categories


GET VOD Stream Categories

player_api.php?username=X&password=X&action=get_vod_categories

 

GET SERIES Categories

player_api.php?username=X&password=X&action=get_series_categories

 

GET LIVE Streams

player_api.php?username=X&password=X&action=get_live_streams  (This will get All LIVE Streams)
player_api.php?username=X&password=X&action=get_live_streams&category_id=X  (This will get All LIVE Streams in the selected category ONLY)


GET VOD Streams 

player_api.php?username=X&password=X&action=get_vod_streams  (This will get All VOD Streams)
player_api.php?username=X&password=X&action=get_vod_streams&category_id=X  (This will get All VOD Streams in the selected category ONLY) 

 

GET SERIES Streams 

player_api.php?username=X&password=X&action=get_series  (This will get All Series)
player_api.php?username=X&password=X&action=get_series&category_id=X  (This will get All Series  in the selected category ONLY) 


GET SERIES Info

player_api.php?username=X&password=X&action=get_series_info&series_id=X

 

The seasons array, might be filled or might be completely empty. If it is not empty, it will contain the cover, overview and the air date of the selected season.
In your APP if you want to display the series, you have to take that from the episodes array.

 

The array keys of episodes array, are the seasons. IF the season key exists in seasons array, you can display a cover and information for that season. Here is an example of PHP Code.

<?php
$output = json_decode(file_get_contents("http://ip:port/player_api.php?username=api_test&password=api_test&action=get_series_info&series_id=X"),true);
foreach ( array_keys( $output['episodes'] ) as $season_number )
{
    echo "Season $season_number";

    if ( array_key_exists( $season_number, $output['seasons'] ) )
    {
        echo "Cover: " . $output['seasons'][$season_number]['cover'];
        echo "Overview: " . $output['seasons'][$season_number]['overview'];

    }
}


GET VOD Info

player_api.php?username=X&password=X&action=get_vod_info&vod_id=X  (This will get info such as video codecs, duration, description, directors for 1 VOD)


GET short_epg for LIVE Streams (same as stalker portal, prints the next X EPG that will play soon)

player_api.php?username=X&password=X&action=get_short_epg&stream_id=X 
player_api.php?username=X&password=X&action=get_short_epg&stream_id=X&limit=X  (You can specify a limit too, without limit the default is 4 epg listings)  


 GET ALL EPG for LIVE Streams (same as stalker portal, but it will print all epg listings regardless of the day)
 

player_api.php?username=X&password=X&action=get_simple_data_table&stream_id=X       

 

Full EPG List for all Streams

xmltv.php?username=X&password=X


*/