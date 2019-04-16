const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/project');
const Device = require('../models/device');

router.use(authMiddleware);

router.get('/',async (req,res)=>{
    try{

        const projects = await Project.find().populate(['devices','user']);
        return res.send({projects})

    }catch(err){
        return res.status(400).send({error: '_Error loading projects_'});
    }
});

router.get('/:userId', async (req,res) =>{
    try{

        /*if(req.userId.toString() != req.params.userId.toString()){
            return res.status(400).send({error: 'Invalid User ID '});
        }*/
    
        const project = await Project.findOne({user:req.params.userId}).populate(['devices','user']);
        return res.send({project})

    }catch(err){
        return res.status(400).send({error: '_Error loading project_'});
    }
});

router.post('/', async (req,res)=>{
    try{

        const {devices,userId} = req.body;

        if(req.userId.toString() != userId.toString()){
            return res.status(400).send({error: 'Invalid User ID '});
        }

        const project = await Project.create({ user: req.userId});
       
        await Promise.all(devices.map(async device =>{
            const projectDevice = new Device({...device,project:project._id});
         
            await projectDevice.save();

            project.devices.push(projectDevice);
        }));

        await project.save();
        
        return res.send({project});

    }catch(err){
        return res.status(400).send({error: 'Error creating new project'});
    }
});

router.put('/:projectId', async (req,res)=>{
    try{
        const {devices, userId} = req.body;

        console.log("MIDDLE ID ->",req.userId.toString());
        console.log(userId.toString());
        
        if(req.userId.toString() != userId.toString()){
            return res.status(400).send({error: 'Invalid User Id'});
        }

        const project = await Project.findByIdAndUpdate(req.params.projectId, {},{new:true});

        project.devices = [];

        await Device.remove({project: project._id});
       
        await Promise.all(devices.map(async device =>{
            const projectDevice = new Device({...device,project:project._id});
         
            await projectDevice.save();

            project.devices.push(projectDevice);
        }));

        await project.save();
        
        return res.send({project});

    }catch(err){
        console.log(err);
        return res.status(400).send({error: 'Error updating new project'});
    }
});

router.delete('/:projectId', async (req,res)=>{
    const {userId} = req.body;
   
    try{

        if(req.userId.toString() != userId.toString()){
            return res.status(400).send({error: 'Invalid User Id'});
        }

        const project = await Project.findByIdAndRemove(req.params.projectId);
        return res.send();

    }catch(err){
        return res.status(400).send({error: '_Error deleting project_'});

    }
});

router.post('/teste', async (req,res)=>{
    return res.send("SERVER IS ONLINE");
});




module.exports = app => app.use('/projects',router);