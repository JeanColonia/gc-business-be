const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gcbusiness-school', {
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(db => console.log('db is conected'))
.catch(err => console.error(err));