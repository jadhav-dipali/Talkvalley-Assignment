// For this problem we use the Nodejs and one DataBase MongoDB
// Firstily we setup the Files.
// npm init
// for this we add have to import the libraries like express foe creating server, mongoose for connection with mongoDB,
// Then We Carete A file APP.Js,
// Inside App.js we import express 
// Let App = express();
// Then we create the server 
//             App.listen((4000)=>{
//                   Print “listening port 4000”
//             })
// Now We connect with Database , 
// Import Mongoose
// We connect with database mongodb , by using mongoose.connect(“URL”) , it return the promise.
// Now we connected with database.
// Create The model Schema for the BestPractices.
// We create a one file BestPracticeSchema.js.
// by using the  const InitializedSchema = mongoose.Schema ({}) we structured our code .
// like eg.   BestPractice = mongoose.schema({
//                                          artical:type:
//                                          Object,title:{ type:String},
//                                          practices:[String],
//                                          url:{type:String}, 
//                                          discussion:{type:String}},
//                                          citation:[Object]
//                              })
// we create the collection by using
                   // Collectioname = mongoose.model(collection name , InitializedSchema);
// we export this  by using
                    // module.exports= Collectioname,
// in Routerpage we import the collection 
                    //  const collectionName = require( BestPracticeSchema.js(filename)). ,
// now We post the data in that particuler collection , by using the Post metod .
// we create a one 
                // async Function (req , res) 
//                       try 
//                         Data =  new collectionName(req.body);
//                         CreatedData = await Data.save();
//                         res.send(CreateData)
//                    catch
//                         res.status(400).send(err.message)

// now we add the some condition in this ,
//                       try 
//                           first we find the data in that database ;
//                           AllData = await collectionName.find({});
//                        If(AllData.length > 0)
//                                Data =  new collectionName();
//                               CreatedData = await Data.save();
//                                res.send(CreateData)
//                        else
//                              Data =  new collectionName({req.body, citation:[{title:titlename , url:url}]});
//                              CreatedData = await Data.save();
//                              res.send(CreateData)       
//                    catch
//                        res.status(400).send(err.message)


// we find the unique citation ;
//                       try 
//                           first we find the data in that database ;
//                           UniqData = await collectionName.find({});
//                        If(AllData.length > 0)
//                                 Unique = await UniqPractices.find({});
//                                Id = unique[0]._id;
//                              UpdateData = await collectionName.findByIdAndUpdate(Id , {$push:{citation:{title:title ,url:url}}} , {new:true})
//                          else
//                              Data =  new collectionName(“”);
//                              CreatedData = await Data.save();
//                              res.send(CreateData)       
//                    catch
//                        res.status(400).send(err.message)

// Now We Get the Data From DataBase;
// We take a one 
    // Async Funcion ()
//        Try
//              const uniq = await PracticeCollection.find({});
//              const data = await UniqCollection.find({});
//              res.status(200).json({message:"success" , data:data , uniq:uniq})
//       Catch
//            res.status(400).send(err.message)

            









  


  
