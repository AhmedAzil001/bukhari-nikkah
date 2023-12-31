import React from 'react';
import { Card,CardBody,Image,Stack,Heading,Text } from "@chakra-ui/react"


const AboutCard = ({img,heading,description,key}) => {
  return (
    <Card width={['80%','30%']} variant={'outline'}>
            <Image
             alignSelf={'center'}
               boxSize={'150px'}
               src={img}
               alt="Green double couch with wooden legs"
               borderRadius="lg"
             />
           <CardBody borderBottomLeftRadius={'5px'} borderBottomRightRadius={'5px'} bgColor={"rgb(251 64 108/1)"} mt={'15px'}>
             <Stack mt="6" spacing="3" >
               <Heading size="md" color={'#fff'} textAlign={"center"}>{heading}</Heading>
               <Text color={'#fff'}>
               {description}
               </Text>
             </Stack>
           </CardBody>
         </Card>
  );
}

export default AboutCard;
