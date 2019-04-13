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
    status:{
        type: Boolean,
        require: true,
        default: false,
    },
    createdAt:{
        type: Date,
        default:Date.now,
    },
});

const Device = mongoose.model('Device', DeviceSchema);
module.exports = Device;