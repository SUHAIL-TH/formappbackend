const mongoose=require('mongoose')

const formSchema=new mongoose.Schema({
    discription:{
        type:String,
        required:true
    },
  data: [
    {
      fieldName: String,
      type: {
        type: String, 
        enum: ['text', 'radio', 'checkbox','dropdown'], // Define allowed types
      },
      option: [String], // Array of options for radio or checkbox
      requied:{
        type:Boolean,
        default:false
      },
    },
  ],
})

module.exports=mongoose.model("form",formSchema)