const form = require("../model/form")
const formmodel = require("../model/form")
const response = require("../model/response")
const formresponse = require("../model/response")


const getform = async (req, res) => {
    try {
        let data = await form.find()
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "somthing went wrong" })
    }
   
}
const singleform = async (req, res) => {
    try {
        let id = req.query.id
        let data = await form.findOne({ _id: id })
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "somthing went wrong" })
    }
}
const addresponse=async(req,res)=>{
    try {
       let data=req.body
       let exsisted=await formresponse.findOne({formid:data.formid})
       console.log(exsisted)
       if(exsisted===null){

              let response = new formresponse(data)
              await response.save()
       }else{
        await formresponse.updateOne({formid:data.formid},{$push:{data:data.data}})
       }
       res.json({message:"success"})
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "somthing went wrong" })
    }
    
}
const postform = async (req, res) => {
    try {
        let data = req.body
        console.log(data)
        let form = new formmodel(data)
        let datas=await form.save()
        
        res.json({ message: "sucess" })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "somthing went wrong" })
    }
}
const getresponse=async(req,res)=>{
    try {
        const id=req.query.id
        const data=await formresponse.findOne({formid:id})
        console.log(data)
        res.json(data)
        
        
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"somthing went wrong"})
    }
}


module.exports = {
    postform,
    getform,
    singleform,
    addresponse,
    getresponse
}