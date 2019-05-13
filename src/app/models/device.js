const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const DeviceSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    mac_address:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    devicePassword:{
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        default:Date.now,
    },
    url:{
        type: String,
        require: true,
        lowercase: true,
    },
    obs:{
        type: String,
        require: true,
    },
});

const Device = mongoose.model('Device', DeviceSchema);
module.exports = Device;