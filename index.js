const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const database = ['temperature','pm','humidity']
const cfenv = require('cfenv'); //
const SocketServer = require('ws').Server
//const socketIO =  require('socket.io'); 
const appEnv = cfenv.getAppEnv();   

var ObjectId = require('mongodb').ObjectId
const url =''
//const url2 = 'localhost:27017'


const path = require('path');

// const app = express()

// app.use(express.static(__dirname+'/'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
// app.get('/',(req,res)=>{
    
//     res.sendFile(path.join(__dirname,'index.html'))
// });



// app.get('/getitems/:documents',(req,res)=>{
//    const documents = req.params.documents;
//    var is_database=false;
//    for(var i=0;i<database.length;i++)
//    {
//      if (documents === database[i])
//      {
//       mongoose.connect(url,function(err,db){
//         if(err)
//          res.send(err);
   
//          const collection = db.collection(documents);
   
//          collection.find({}).toArray((err,documents)=>{
//             if(err)
//               res.send(err);
//              else {
             
//               res.send(documents);
//              }
//          });
//       });
//       is_database=true
//       break
      
//      }
//    }
//    if(!is_database) res.send("not find this collection");
  
// });



// //insert data
// app.post('/items/:documents', (req, res) => { // 5
//   const documents = req.params.documents;
//   var is_database=false;
//   for(var i=0;i<database.length;i++)
//   {
//     if (documents === database[i])
//     {
     
//       mongoose.connect(url, function(err, db) { // 6
//         if (err)
//            res.send(err);
//           //return res.status(500).send(err);
    
//         const collection = db.collection(documents); // 7
//         collection.insertOne(req.body, (err, result) => {
//           if (err)
//             return res.status(500).send(err);
//           res.send(result); // 9
//           db.close(); // 10
//         });
//       });
//       is_database=true
//       break
//     }
    
//   }
//   if(!is_database) res.send("not find this collection");
// });


// app.get('/items/last/:documents',(req,res)=>{
//   const documents = req.params.documents;
  
//   var is_database=false;
//   for(var i=0;i<database.length;i++)
//   {
//     if(documents === database[i])
//     {
//       mongoose.connect(url,function(err,db){
//         if(err) res.send(err);
    
//         const collection = db.collection(documents);
        
     
//           collection.find({}).sort({_id:-1}).limit(5).toArray((err,data)=>{
//               if(err) res.send(err);
//               else{
//                   res.send(data);
//               }
//           });
//       });
//     }
//   }
  

// });


// app.delete('/items/:documents&:id',(req,res)=>{
//   const ID = req.params.id;
//   const documents = req.params.documents;


//   var is_database=false;
//   for(var i=0;i<database.length;i++)
//   {
//     if (documents === database[i])
//     {
      
//         mongoose.connect(url,function(err,db){
//         if(err)
//           res.send(err);
    
//           const collection = db.collection(documents);

//           collection.findOneAndDelete({_id:ObjectId(ID)},(err,result)=>{
//             if(err)
//               res.send(err);
//             else{
//               res.send(result);
//             }
//           });

//         });
//         is_database=true
//         break
//     }
    
//   }
//   if(!is_database) res.send("not find this collection");

  
  
// });


// //更新
// // app.put('items/:id',(req,res)=>{
// //   const todoID = req.params.id;
  
// //   const userInput = req.body;
  
// //   mongoose.connect(url,function(err,db){
// //     if(err)
// //       res.send(err);
    
// //       const collection = db.collection('documents');
// //       collection.findOneAndUpdate({_id:todoID},{$set:{ggg:userInput.gg,gg:userInput.gg,todo:userInput.gg}},{returnOriginal:false},(err,result)=>{
// //           if(err)
// //             res.send(err);
// //           else{
// //             res.send(result);
// //           }
// //       });
// //   });
// // });
// //,{$set:{gg:userInput.gg}},{$set:{todo:userInput.gg}}

// // app.listen(process.env.PORT || 3000, function () {
// //     console.log('Example app listening on port ${appEnv.url}');
// //  });

// app.listen(appEnv.port,appEnv.bind || 3000 , ()=>{
//     console.log("0=================0")
//     console.log(`Example app listening on port ${appEnv.url}`);
// });



const server = express()

  .use(express.static(__dirname+'/'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .get('/',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'index.html'))
  })
  
  .get('/getitems/:documents',(req,res)=>{
   const documents = req.params.documents;
   var is_database=false;
   for(var i=0;i<database.length;i++)
   {
     if (documents === database[i])
     {
      mongoose.connect(url,function(err,db){
        if(err)
         res.send(err);
   
         const collection = db.collection(documents);
   
         collection.find({}).toArray((err,documents)=>{
            if(err)
              res.send(err);
             else {
             
              res.send(documents);
             }
         });
      });
      is_database=true
      break
      
     }
   }
   if(!is_database) res.send("not find this collection");
  
  })
  //insert data
  .post('/items/:documents', (req, res) => { // 5
  const documents = req.params.documents;
  var is_database=false;
  for(var i=0;i<database.length;i++)
  {
    if (documents === database[i])
    {
     
      mongoose.connect(url, function(err, db) { // 6
        if (err)
           res.send(err);
          //return res.status(500).send(err);
    
        const collection = db.collection(documents); // 7
        collection.insertOne(req.body, (err, result) => {
          if (err)
            return res.status(500).send(err);
          res.send(result); // 9
          db.close(); // 10
        });
      });
      is_database=true
      break
    }
    
  }
  if(!is_database) res.send("not find this collection");
  })
  

  .get('/items/last/:documents',(req,res)=>{
  const documents = req.params.documents;
  
  var is_database=false;
  for(var i=0;i<database.length;i++)
  {
    if(documents === database[i])
    {
      mongoose.connect(url,function(err,db){
        if(err) res.send(err);
    
        const collection = db.collection(documents);
        
     
          collection.find({}).sort({_id:-1}).limit(5).toArray((err,data)=>{
              if(err) res.send(err);
              else{
                  res.send(data);
              }
          });
      });
    }
  }
  

  })

  
  .listen(appEnv.port,appEnv.bind || 3000 , ()=>{
    console.log("0=================0")
    console.log(`Example app listening on port ${appEnv.url}`);
  })
  


  function getdata()
  {
  
      mongoose.connect(url,function(err,db){
       if (err) return err;
        
        const collection = db.collection("pm");
        
          collection.find({}).sort({_id:-1}).limit(1).toArray((err,data)=>{
              if(err)  return err;
              else{
                   return data;
                  //dreturn data;
                  //res.send(data);
              }
          });
      });
  }




const wss = new SocketServer({server})

wss.on('connection',ws=>{
  console.log('Client conneced');
  
  ws.on('message',(event)=>{
    console.log('get message',event)
    if(event==='溫度')
    { 
      ws.send("30度");
      
      //ws.send(getdata())
      
    
       
    }
  })

  ws.on('close',()=>{
    console.log('Close connected');
  });
})

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);


