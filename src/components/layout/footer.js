import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', padding: 3 }}>
        <Box sx={{ my: 3, "& svg": { fontSize: "60px", cursor: "pointer", mr: 2, transition: "transform 0.4s", }, "& svg:hover": { color: 'goldenrod', transform: 'translateX(5px)' }, }}>
          {/* Icons */}
          <InstagramIcon />
          <XIcon />
          <FacebookIcon />
          <WhatsAppIcon />
        </Box>
        <Typography variant='h5' sx={{ '@media(max-width:600px)': { fontSize: '1rem' } }}>
          All rights reserved &copy; {new Date().getFullYear()}
        </Typography>
        <Typography variant='body1' sx={{ mt: 2 }}>
          Contact: +123456789 | Email: example@example.com
        </Typography>
      </Box>
    </>
  )
}

export default Footer;
