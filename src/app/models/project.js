const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const ProjectSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    devices:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device',

    }],
    createdAt:{
        type: Date,
        default:Date.now,
    },
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;