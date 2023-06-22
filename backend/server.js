const express = require("express");
const fetch = require('cross-fetch');
const cors=require('cors')
const app = express();



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const PORT = 8080;
// api key=7d7c08caf5b92f7c4c2f2ce223ad47b9
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

 

const getData = async (id) => {
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=7d7c08caf5b92f7c4c2f2ce223ad47b9&units=metric`
    );
    let res = await data.json();
    console.log(res)
    return res;
  } catch (e) {
    console.log(e);
  }
};

app.get("/weather/:id", async (req, res) => {
  const {id} =req.params;
  if(!id){
    return res.status(400).send({message:"Location not found"});
  }
  try{
let data=await getData(id);;

return res.send({data:data})
  }catch(e){
console.log(e)
  }

})
 
     
  

 app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
 });
