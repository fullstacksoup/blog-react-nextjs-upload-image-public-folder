import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Upload images to Public Folder Demo
        </Typography>
        <Link href="/uploadform" color="secondary">
          Go to the Upload Form Page
        </Link>
      </Box>
    </Container>
  );
}
