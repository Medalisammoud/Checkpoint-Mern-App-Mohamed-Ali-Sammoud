//require mongoose
const mongoose = require('mongoose');

//connection to DataBase
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.URI , { useNewUrlParser: true ,useUnifiedTopology: true})
        console.log('DataBase is Connected ...')
    }
    catch(error){
        console.error(`connection database failed!!! ${error}`)
    }
}

module.exports = connectDB;