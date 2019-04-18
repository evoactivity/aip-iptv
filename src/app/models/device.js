const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const DeviceSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Project',
        require: true,
    },
    cloudId:{
        type: String,
        require: true,
    },
    devicePassword:{
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        default:Date.now,
    },
    name_automation1:{
        type: String,
        require: true,
    },
    name_automation2:{
        type: String,
        require: true,
    },
    time_automation1:{
        type: String,
        require: true,
    },
    time_automation2:{
        type: String,
        require: true,
    },
});

const Device = mongoose.model('Device', DeviceSchema);
module.exports = Device;