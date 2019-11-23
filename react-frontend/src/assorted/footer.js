import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Footer = () => (
  <footer>
    <Box marginY="1rem">
      <Box marginY="1rem">
        <Divider variant="inset" />
      </Box>
      <Typography variant="body2" style={{textAlign: 'center'}}>
        Built by <Link href="https://github.com/kyle-n" target="_blank">Kyle Nazario</Link>
      </Typography>
    </Box>
  </footer>
);

export default Footer;
