const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://localhost:27017/secool-api",
   // { useNewUrlParse: true, useUnifiedTopology: true},
    (err) =>{
        if(!err) console.log("mongodb connecter")
        else console.log("mongodb error : " + err)
    }
)