const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload')

const items = require('./routes/api/items');
// const profile = require('./routes/api/profile');

const app = express();
app.use(cors());

//fileUpload
app.use(fileUpload());
//upload endpoint
app.post('/api/uploads', (req, res) => {
   if(req.files===null){
      return res.status(400).json({msg: 'No File uploaded!'})
   }
   const file = req.files.file;
   console.log('value file: ', file)
   file.mv(`${__dirname}/client-react/public/uploads/${file.name}`, err => {
     if(err){
        console.log(err);
        return res.status(500).send(err); 
     }
     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
   });
});

//step 1
const port = process.env.PORT || 5000;

//body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//step 2.
//connect to mongo mern_Crud_User
mongoose.connect(process.env.MONGODB_URI || db, { 
    auth: {
       user: "mern_Crud_User",
       password: "@Cy12345678"
  }, useNewUrlParser: true })
        .then(() => console.log('MongoDb Connected'))
        .catch(err => console.log(err));


//use routes
app.use('/api/items', items);
// app.use('/api/items', profile);

//step 3
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client-react/build'));

  app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'client-react', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server Started at port ${port}`));