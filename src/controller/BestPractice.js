const express = require("express");
const{ BestPractice , UniqPractices} = require("../Model/BestPractice")

const PostBestPractice = async(req, res)=>{
try {
    const allData = await BestPractice.find({});
    const uniqdata = await UniqPractices.find({})
  if(uniqdata.length===0){
    const data = new UniqPractices({});
    const createdData = await data.save();

  }
    if(allData.length>0){
        const numbersOfPractice = allData[0].artical.practices;
        let arr = [];
        let practiceArr=req.body.artical.practices
        for(let i= 0 ; i< practiceArr.length ; i++){
              const find = numbersOfPractice.find(ele=>ele===practiceArr[i]);
              if(find){
                arr.push(find)
              }
        }
        console.log(arr)
        if(arr.length>0){
            const data = new BestPractice(req.body);
            const createdData = await data.save();
            res.status(201).json({status:"success" , data:createdData}) 
        }else{
            const unique = await UniqPractices.find({});
            const id = unique[0]._id;
            const updateData = await UniqPractices.findByIdAndUpdate(id , {$push:{citation:{title:req.body.artical.title , articalUrl:req.body.artical.url}}} , {new:true})
            const data = new BestPractice({...req.body,citation:[{title:req.body.artical.title , articalUrl:req.body.artical.url}]});
            const createdData = await data.save();
            res.status(201).json({status:"success" , data:{...createdData}})   
        }
     
    }else{
        const unique = await UniqPractices.find({});
        const id = unique[0]._id;
        const updateData = await UniqPractices.findByIdAndUpdate(id , {$push:{citation:[{title:req.body.artical.title , articalUrl:req.body.artical.url}]}} , {new:true})
        const data = new BestPractice({...req.body,citation:[{title:req.body.artical.title , articalUrl:req.body.artical.url}]});
        const createdData = await data.save();
        
        res.status(201).json({status:"success" , data:{...createdData}})
    }
} catch (error) {
    res.status(400).json({status:"Fail" , message:error.message})
}
}


const getData = async(req, res)=>{
try {
     const uniq = await UniqPractices.find({});
     const data = await BestPractice.find({});
    res.status(200).json({message:"success" , data:data , uniq:uniq})
} catch (error) {
    res.status(400).json({status:"Fail" , message:error.message})
}
}

module.exports ={PostBestPractice, getData}