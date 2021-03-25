const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb+srv://appnode:"+ process.env.mongoDB_psw+"@cluster0.u5gvj.mongodb.net/cours_node?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected to DataBase !");
    // we're connected!
    });
}


module.exports = connectDB;