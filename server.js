const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

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
        .then(() => console.log('MongoDb Connected . . .'))
        .catch(err => console.log(err));


//use routes
app.use('/api/items', items);

//step 3
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client-react/build'));

  app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'client-react', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server Started at port ${port}`));