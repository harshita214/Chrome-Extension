const bodyparser = require('body-parser')
const  express = require('express')
const mongoose = require('mongoose')
  const cors = require('cors')

const app = express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
const corsOption={
  origin:'chrome-extension://lmggakkjlhhcefmmkomggmaglaneiljf'
};

const url = `mongodb+srv://Ankita:Rahulshaw@as-books.xmzjs.mongodb.net/Revision_Helper?retryWrites=true&w=majority`;
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


const dataSchema = mongoose.Schema({
  url: String,
  topic: String,
  date: String
});
const data= mongoose.model('data', dataSchema,'data');


app.listen(5000, function(){
    console.log("server is running on port 5000");
  })


  app.post("/", cors(corsOption),  function (req, res) {
    const tempdata = new data({
      'url':req.body.url,
      'topic':req.body.topic,
      'date':req.body.date
    })
    console.log(tempdata)
    tempdata.save(function (err, val) {
      if (err) return console.error(err);
      console.log(val+ " save to data collection.");
    });

    
  });
  
  
  

  
    
  
  
