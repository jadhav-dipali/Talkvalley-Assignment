const mongoose = require('mongoose');

const BestPracticeSchema = mongoose.Schema({
    artical:{
        type:Object,
        title:{
         type:String
        },
        practices:[String],
        url:{
          type:String
        },
        discussion:{
            type:String
        }
    },
    citation:[Object]
})

const UnicqCitation = mongoose.Schema({
    citation:{
        type:[Object],
       
    }
})

const BestPractice = new mongoose.model("BestPractice" ,BestPracticeSchema);
const UniqPractices = new mongoose.model("UniqPractices" ,UnicqCitation);
module.exports = {BestPractice , UniqPractices}