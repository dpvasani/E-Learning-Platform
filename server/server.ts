import {app} from "./app"
require("dotenv").config();


// Create Server 
app.listen(process.env.PORT, ()=>{
    console.log(`Server Is Running On Port ${process.env.PORT}`)
}
)