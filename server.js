const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000 ;

app.use(bodyParser.json());
app.use(cors());

//mongoose
mongoose.connect("mongodb+srv://hms:hms@cluster-hms.g11lv.mongodb.net/hmsDB?retryWrites=true&w=majority")

//data schema and model
const hmsSchema = {
    department: {type: String, default: undefined},
    name: {type: String , default: undefined },
    gender: {type: String , default: undefined },
    phone: {type: Number , default: undefined },
    email: {type: String , default: undefined },
    date: {type: String , default: undefined }
}


const hms = mongoose.model("hms", hmsSchema);

//API routes
app.get('/datas', function(req, res) {
    hms.find().then(datas => res.json(datas));
})

app.post('/appointment',function (req, res) {
    const department= req.body.department;
    const name = req.body.name;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const email = req.body.email;
    const date = req.body.date;
    const newNote = new hms ({
        department,
        name,
        gender,
        phone,
        email,
        date
    });

   
    newNote.save()
    
})




app.delete('/delete/:id', function(req, res) {
    const id = req.params.id;
    hms.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("Data deleted");
        } else {
            console.log(err);
        }
    })
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
    
}
else{
    app.get("/", (req, res) => {
        
        res.send('API is still running');
        });
}

app.listen(PORT, () => {
    console.log(`Connection has successfully started on port ${PORT}`);
});
