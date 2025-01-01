// Footer.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material'; // Import social media icons

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        padding: '16px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 'auto', // Ensure it's always at the bottom of the page
      }}
    >
      {/* Social Media Links */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '12px' }}>
        <Link href="https://www.facebook.com/people/Auggies-Remodeling/61559702580670/" target="_blank" sx={{ color: 'white' }}>
          <Facebook fontSize="large" />
        </Link>
        <Link href="https://www.instagram.com/auggiesremodeling/#" target="_blank" sx={{ color: 'white' }}>
          <Instagram fontSize="large" />
        </Link>
      </Box>

      {/* Business License Number and Phone Number */}
      <Typography variant="body2" sx={{ marginBottom: '8px' }}>
        Business License #: TCG079682
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: '8px' }}>
        Phone: (847)-302-7344
      </Typography>

      {/* Copyright */}
      <Typography variant="body2" sx={{ color: '#ccc', marginTop: '16px' }}>
        &copy; {new Date().getFullYear()} Auggie's Home Remodeling. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;


// import React from 'react';
// import { Box, Typography, Link } from '@mui/material';
// import { Facebook, Instagram } from '@mui/icons-material'; // Import social media icons

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         width: '100%',
//         backgroundColor: '#333',
//         color: 'white',
//         padding: '12px 0', // Reduced padding to make it more compact
//         display: 'flex',
//         flexDirection: 'row', // Change to row for horizontal layout
//         justifyContent: 'space-between', // Space between elements
//         alignItems: 'center', // Align items vertically centered
//       }}
//     >
//       {/* Social Media Links */}
//       <Box sx={{ display: 'flex', gap: '16px' }}>
//         <Link href="https://www.facebook.com/people/Auggies-Remodeling/61559702580670/" target="_blank" sx={{ color: 'white' }}>
//           <Facebook fontSize="large" />
//         </Link>
//         <Link href="https://www.instagram.com/auggiesremodeling/#" target="_blank" sx={{ color: 'white' }}>
//           <Instagram fontSize="large" />
//         </Link>
//       </Box>

//       {/* Business Info and Phone */}
//       <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
//         <Typography variant="body2" sx={{ marginBottom: 0 }}>
//           Business License #: TCG079682
//         </Typography>
//         <Typography variant="body2" sx={{ marginBottom: 0 }}>
//           Phone: (847)-302-7344
//         </Typography>
//       </Box>

//       {/* Copyright */}
//       <Typography variant="body2" sx={{ color: '#ccc', fontSize: '12px' }}>
//         &copy; {new Date().getFullYear()} Auggie's Home Remodeling. All Rights Reserved.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;
