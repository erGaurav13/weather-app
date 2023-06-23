import React, { useState } from 'react'
import { Box,Input,Button, Heading } from '@chakra-ui/react'
import { FcSearch } from "react-icons/fc";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Card from './Card';
function Weather() {
    const [location,setLocation]=useState("meerut");
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])  
    const handelChange=(e)=>{
        setLocation(e.target.value)
    }
    const handelClick=  (location)=>{
        setLoading(true)
        let url=`https://weather-a9yf.onrender.com/weather/${location}`
            fetch(url,).then((res)=>res.json())
            .then((data)=>{
                setData(data )
                setLoading(false)
            }).catch((e)=>{
                console.log(e)
                setLoading(false)
            })
    }

    
   
console.log(data)
  return (
    < >
    <Box w="100%" h="100vh"  
    backgroundColor={"#037bff"}
  display={"grid"} 
  justifyItems={"center"}
  alignContent={"center"}
  boxShadow='dark-lg'
  >       
    {/*Weather app Heading  */}
   <Box >
    <Heading textAlign={"center"} color={"white"}>Weather App</Heading>
    </Box>
   
          <Box w={{ sm:"100%",lg:"50%" }} display={"flex"}>
           
            <Box w="90%"  >
                
            {/* Collect city name */}
            <Input  onChange={handelChange} background={"white"}/>
            </Box>
            <Box> 
             {loading===true?<CircularProgress size="40px"  /> : <Button onClick={()=>handelClick(location)}><FcSearch/></Button>}
            </Box>     
          </Box>
          <Box w={{ sm:"100%",lg:"40%" }} p="2%" m="auto"  mt="2px" borderRadius= {"10px"}  overflow={"hidden"}>
             {data.length===0?false:<Card data={data}/>}  
          </Box>
          </Box>
{/* Weather card */}
        
    
    </>
  )
}

export default Weather