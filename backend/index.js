const express = require("express"); 
require("./db/config");
const cors = require("cors");
const User = require("./db/User");

const app = express(); 

app.use(express.json());
app.use(cors());


app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result=result.toObject();
  delete result.password
  res.send(result);
});
app.post("/login",async(req,resp)=>{
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    }else{
      resp:send({result : "no user found"})
    }
  }else{
    resp:send({ressult : "no user found"})

  }

    
 

})



app.listen(400, () => {
    console.log("Server is running on port 7000");
});
