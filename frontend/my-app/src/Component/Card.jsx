import React from 'react'
import { Box , Heading } from '@chakra-ui/react'
 
import { WiHumidity } from "react-icons/wi";
function Card({data}) {
     const {name,main,weather}=data.data;
     const {temp,humidity }=main
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
           <Heading mt="10%" color="white" display={"flex"}> Temp: {temp} °C {" "} </Heading>
           <Heading display={"flex"} >Humidity: {humidity} <WiHumidity/></Heading>
           <Heading display={"flex"} >Condition: {weather?.map((e)=>e.main)} <WiHumidity/></Heading>
           </Box>
         
           </Box>
            
      </Box>
     
      
  )
}

export default Card