const express=require("express")
const formRouter=express()
const formController=require('../controllers/formController')

formRouter.post('/addform',formController.postform)
formRouter.get('/getforms',formController.getform)
formRouter.get('/singleform',formController.singleform)
formRouter.post('/addresponse',formController.addresponse)
formRouter.get('/formresponses',formController.getresponse)

module.exports=formRouter