const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo mern_Crud_User
mongoose.connect(db, { 
    auth: {
       user: "mern_Crud_User",
       password: "@Cy12345678"
  }, useNewUrlParser: true })
        .then(() => console.log('MongoDb Connected . . .'))
        .catch(err => console.log(err));


//use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started at port ${port}`));