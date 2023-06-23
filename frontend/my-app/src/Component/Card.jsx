import React from 'react'
import { Box , Heading } from '@chakra-ui/react'
 
import { WiHumidity } from "react-icons/wi";
function Card({data}) {
  if(data.data.message=="city not found"){
    
        return <>City not found try another</>
    }
     const {name,main,weather}=data?.data;
     const {temp,humidity }=main
  return (  
    
      <Box w="100%"  h="48vh"  
      backgroundColor={"#000090"}
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