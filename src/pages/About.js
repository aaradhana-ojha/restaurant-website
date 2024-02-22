import React from 'react';
import Layout from '../components/layout/layout';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box sx={{my:15, textAlign:'center',
        p:2, '& h4':{fontWeight:'bold',my:2,fontSize:'2rem'}, '& p':{textAlign:'justify'}, "@media (max-width:600px)":{mt:0, "& h4":{fontSize:"2rem"}} }}>
          <Typography variant='h4'>
            Welcome to my resturant. 
          </Typography>
          <p>We are a family-owned business with over 20 years of dedicated service to our community. Our passion for food and hospitality drives us to provide an exceptional dining experience for every guest. Offering a diverse menu of mouthwatering dishes, we ensure there's something to delight every palate. Whether you're craving classic comfort food or adventurous flavors, we have you covered. Open seven days a week, we welcome you to dine in, order takeout, or enjoy convenient delivery options. At our restaurant, hospitality is not just a duty but a tradition, and we eagerly await the opportunity to serve you. Join us and experience the warmth and flavor that define our establishment.
          </p>
          <br/>
          
          <p> With a rich history spanning two decades, our family-owned establishment has become a cornerstone of the community.             We take pride in our commitment to quality ingredients, authentic recipes, and exceptional customer service. From             savory appetizers to delectable desserts, each dish is crafted with care and attention to detail. Our welcoming             atmosphere and friendly staff create a memorable dining experience for patrons of all ages. Whether you're            celebrating a special occasion or simply craving a delicious meal, we strive to exceed your expectations with every           visit. As we continue to grow and evolve, our dedication to excellence remains unwavering. Join us on a culinary journey that celebrates tradition, flavor, and the joy of sharing great food with loved ones.</p>
        </Box>
      
    </Layout>
  )
}

export default About
