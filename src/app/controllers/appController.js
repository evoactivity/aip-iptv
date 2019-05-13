const express = require('express');
const router = express.Router();
const iptv = require('../service/iptv');
const Device = require('../models/device');


//http://purpleserver.net:80/player_api.php?username=Felipe&password=vvoYEf9UFn&type=m3u_plus&output=m3u8
// heroku logs --tail --app gentle-bastion-50455
router.post('/',async (req,res)=>{  

    const devicePassword = req.body.password;
    const mac_address = req.body.username;

    if(devicePassword == null || mac_address == null){
        return res.status(400).send({error: '_Preencha todos os campos_'});
    }

    try{

        const device = await Device.findOne({"mac_address": mac_address}, function(err, results){
            if(results){
                if(devicePassword != results.devicePassword){
                    return res.status(400).send({error: '_Senha ou Usuário Incorreto_'})
                }  
            }   
            else
            {
                return res.status(400).send({error: '_Dispositivo não cadastrado_'});
            }
        });

        iptv.getIptv(device.url).then((result) => {
            return res.send(result);  
        })
        .catch((error) => {
            return res.status(400).send({error: error});
        });  

    }catch(err){
        return res.status(400).send({error: err});
    }
});

module.exports = app => app.use('/player_api.php',router);
