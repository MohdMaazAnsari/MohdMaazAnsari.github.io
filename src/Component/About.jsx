import React from 'react'

import { Element } from "react-scroll";

import { Box,Text,Heading } from '@chakra-ui/react'

import style from './Aboutme.module.css'

const About = () => {
  return (
    <Box border="2px solid rgb(224, 242, 241)" h = '100vh' id="about" className = "about section"  mb = '40px' >

        <Heading mt = '250px' color = '#1A202C' fontSize={35}><Text as = 'span' color = '#1A202C'>About</Text> Me</Heading>


        <Text mt = '50px' fontSize={'20'}color = '#1A202C' fontWeight={500}  >Hello 👋 Myself Maaz</Text>

        <Box className = {style.aboutme} border="2px solid rgb(128, 203, 196)"  color = 'black' p = {{base : '8','486px' : '10'}} borderRadius={'10px'} bg = 'rgb(224, 242, 241)' w = {{base : '100%','410px' : '300px','486px':'400px'}} m = 'auto' mt = '20px'>

        <Text mt = '15px' fontSize = '16px' fontWeight={500} id="user-detail-intro">A passionate Front End Web Developer skilled in HTML, CSS, Javascript and React, with a focus on designing and building high-performance and scalable enterprise applications</Text>


        </Box>

        


        
        
        
        
       
    </Box>
  )
}

export default About