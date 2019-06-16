const express = require('express');
const router = express.Router();
const iptv = require('../service/iptv');
const Device = require('../models/device');

router.post('/',async (req,res,next)=>{  

    try{

        console.log("PANEL CONTROLLER");
        console.log(body);
        
        //http://psrv.io:80/panel_api.php?username=Felipe&password=vvoYEf9UFn
      
        const url = "http://psrv.io:80/panel_api.php?username=Felipe&password=vvoYEf9UFn";

        
        iptv.getPanelApi(url).then((result) => {
            console.log("Resultado getPanelApi appcontrolle ->" );
            return res.send(result);  
        })
        .catch((error) => {
            console.log("Catch appcontrolle ->" + error );
            return  next(error);
        });  
     
             
        
    }catch(err){
        console.log("Try catch GERAL appcontrolle ->" + err );
        return res.status(400).send({error: err});
    }
});


module.exports = app => app.use('/panel_api.php',router);