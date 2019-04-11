const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/noderest', { 
    useNewUrlParser: true, 
     useCreateIndex: true,
     dbName:"heroku_f6g01j4x"
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
useNewUrlParser: true