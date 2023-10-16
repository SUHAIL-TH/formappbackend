const mongoose=require('mongoose')
const responseSchema=new mongoose.Schema({
    formid:{
        type:String,
        require:true,
        
    },
    data:[{
         type: mongoose.Schema.Types.Mixed,
        require:true
    }]
})

module.exports=mongoose.model("response",responseSchema)