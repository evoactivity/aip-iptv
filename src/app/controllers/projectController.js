const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const Device = require('../models/device');
var cors = require('cors'); app.use(cors());

router.use(authMiddleware);

router.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

router.get('/',async (req,res)=>{ //Busca todos dispositivos
    try{
        const devices = await Device.find();
        return res.send({devices})
    }catch(err){
        return res.status(400).send({error: '_Error loading devices'});
    }
});

router.get('/:mac_address', async (req,res) =>{  //Busca dispositivo específico pelo Mac
    try{

        await Device.findOne({"mac_address": req.params.mac_address}, function(err, results){
            if(results){
                return res.send(results);
            }   
            else
            {
                return res.status(400).send({error: '_Dispositivo não cadastrado_'});; 
            }
        });
    
    }catch(err){
        return res.status(400).send({error: '_Error loading this device_'});
    }
});

router.post('/create_device', async (req,res)=>{    //Adiciona dispositivo
    try{

        const {devices} = req.body;
        const mac = devices[0].mac_address;
      
      
        if(await Device.findOne({"mac_address": mac})){
            return res.status(400).send({error: 'Aparelho já cadastrado'});
        }    
        
        await Device.create(devices);
        return res.send(true);
            
    }catch(err){
        return res.status(400).send({error: 'Erro adicionando novo dispositivo'});
    }  
}); 

router.put('/:deviceId', async (req,res)=>{    //Atualizar dispositivo
    try{
        const {devices} = req.body;

        await Device.findById(req.params.deviceId, function (err, result) {      
           
            if(result!=null){
                result.title = devices[0].title ;
                result.mac_address = devices[0].mac_address;
                result.devicePassword = devices[0].devicePassword;
                result.url = devices[0].url;
                result.obs = devices[0].obs;
                result.third_server_password = devices[0].third_server_password;
                result.third_server_login = devices[0].third_server_login;
                result.save();
                return res.send();
            }
            else
            {
                return res.status(400).send({error: '_Dispositivo não cadastrado_'});; 
            }
        });

    }catch(err){
        console.log(err);
        return res.status(400).send({error: 'Error updating new project'});
    }
});

router.delete('/delete/:deviceId', async (req,res)=>{  //Deleta dispositivo
    try{
        const device = await Device.findByIdAndRemove(req.params.deviceId);
        return res.send();
    }catch(err){
        return res.status(400).send({error: '_Error deleting project_'});
    }
});


module.exports = app => app.use('/api',router);



