const express = require('express');
const router = express.Router();
const iptv = require('../service/iptv');
const Device = require('../models/device');


//http://purpleserver.net:80/player_api.php?username=Felipe&password=vvoYEf9UFn&type=m3u_plus&output=m3u8
// heroku logs --tail --app turbox
router.post('/',async (req,res)=>{  

    const devicePassword = req.body.password;
    const mac_address = req.body.username;

    if(devicePassword == null || mac_address == null){
        return res.status(400).send({error: '_Preencha todos os campos_'});
    }

    try{

        console.log(req.body);
    
        const device = await Device.findOne({"mac_address": mac_address}, function(err, results){
            if(results){
            

            }   
            else
            {
                console.log("Dispositivo não cadastrado");
                return res.status(400).send({error: '_Dispositivo não cadastrado_'});
            }
        });

        if(req.body.action.trim() == "get_vod_info"){
            iptv.get_vod_info(device.url.trim(),req.body.vod_id.trim()).then((result) => {
                console.log("Resultado appcontrolle VODINFO ->" );
                return res.send(result);  
            })
            .catch((error) => {
                console.log("Catch appcontrolle ->" + error );
                return res.status(400).send({error: error});
            });  
        }
        else
        {
            iptv.getIptv(device.url.trim()).then((result) => {
                console.log("Resultado appcontrolle ->" );
                return res.send(result);  
            })
            .catch((error) => {
                console.log("Catch appcontrolle ->" + error );
                return res.status(400).send({error: error});
            });  
        }
  
    }catch(err){
        console.log("Try catch GERAL appcontrolle ->" + err );
        return res.status(400).send({error: err});
    }
});


module.exports = app => app.use('/player_api.php',router);
