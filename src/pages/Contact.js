import React from 'react';
import Layout from '../components/layout/layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10 }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Contact My Restaurant
        </Typography>
        <Typography>
          To reach us, simply dial 986912476 during business hours or send us a message at aaradhanaojha123@gmail.com.
          Our friendly team is here to assist you with any questions or requests.
        </Typography>
      </Box>
      <Box sx={{m:3, width: '600px', ml:10, "@media (max-width:600px)":{width:'300px',} }}>
        <TableContainer component ={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white',}} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon  sx={{color:'red',pt:1}}/> 100(tollfree)
                </TableCell>
              </TableRow>

              <TableRow> 
                <TableCell>
                  <MarkEmailUnreadIcon  sx={{color:'skyblue',pt:1}}/> example@example.com
                </TableCell>
              </TableRow>

              <TableRow> 
                <TableCell>
                  <CallIcon sx={{color:'green',pt:1}}/> +123456789
                </TableCell>
              </TableRow>
                
              </TableBody>   

          </Table>
        </TableContainer>
      </Box>

    </Layout>
  );
}

export default Contact;
