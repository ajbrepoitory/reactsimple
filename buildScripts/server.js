import express from 'express';
import path from 'path';
import open from 'open';
import config from '../webpack.config';
import webpack from 'webpack';
import multer from 'multer';



const fileUpload = require('express-fileupload');
const port = 8080;
const app = express();
const compiler = webpack(config);

let upload  = multer({ storage: multer.memoryStorage() });

// default options
app.use(fileUpload());

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    console.log("Webapp root Navigated at "+new Date().toString());
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.post('/upload', function(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    // The name of the input field (i.e. "photo") is used to retrieve the uploaded file
    let sampleFile = req.files.photo;
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('Chan.png', function(err) {
      if (err)
        return res.status(500).send(err);
        res.send('File uploaded!');
    });
  });

  app.post('/uploadreact', upload.single('files'), (req, res) => {  
    console.log(req.body);
    console.log(req.file);
    res.send("Photo Uploaded");
  });

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    } else {
        console.log("Application started successfully"); 
        //open(`http://localhost:${port}`)
    }
});
