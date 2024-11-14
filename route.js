const express = require("express")
const  app  = require("./index")

const route = express()
route.use("/api/v1/health",app)

route.listen("3000",()=>{
    console.log("App is listening on port 3000")
})
