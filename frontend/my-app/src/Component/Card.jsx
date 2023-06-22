import React from 'react'
import { Box ,Text,Heading } from '@chakra-ui/react'
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
function Card({data}) {
     const {name,main,weather}=data.data;
     const {temp,temp_max,temp_min,humidity }=main
  return (  
    
      <Box w="100%"  h="48vh"  backgroundImage="url('https://i.gifer.com/embedded/download/MwcO.gif')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow={"hidden"}
      borderRadius={"10px"}
      boxShadow='dark-lg'
    >
           <Box  >
           <Heading textAlign={"center"} color="white">Location: {name}  </Heading>
           <Box color="white">
           <Heading mt="10%" color="white" display={"flex"}> Temp: {temp} <FaTemperatureHigh/></Heading>
           <Heading display={"flex"} >Humidity: {humidity} <WiHumidity/></Heading>
           <Heading display={"flex"} >Condition: {weather?.map((e)=>e.main)} <WiHumidity/></Heading>
           </Box>
         
           </Box>
            
      </Box>
     
      
  )
}

export default Card