const express = require('express');
const router = express.Router();
const iptv = require('../service/iptv');
const Device = require('../models/device');


router.post('/',async (req,res,next)=>{  

    try{

        console.log("PANEL CONTROLLER");
        var body = req.body;
        console.log(body);
        var url;
        var third_server_login = false;

        await Device.findOne({"third_server_login": body.username}, function(err, results){
            if(results){                        
                console.log('Encontrou third_server_login');
                url = results.url;
                third_server_login = true;
            }
            else
            {
                console.log('NÃO Encontrou third_server_login');
                third_server_login = false;
            }
        });    
        
        //http://psrv.io:80/panel_api.php?username=Felipe&password=vvoYEf9UFn
      
        // url = "http://psrv.io:80/panel_api.php?username=Felipe&password=vvoYEf9UFn";

        if(third_server_login){

            iptv.getPanelApi(url).then((result) => {
                console.log("Resultado getPanelApi appcontrolle ->");
                return res.send(result);  
            })
            .catch((error) => {
                console.log("Catch appcontrolle ->" + error );
                return  next(error);
            });  
        }
     
             
        
    }catch(err){
        console.log("Try catch GERAL appcontrolle ->" + err );
        return res.status(400).send({error: err});
    }
});


module.exports = app => app.use('/panel_api.php',router);