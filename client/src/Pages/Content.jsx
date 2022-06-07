import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Content({ content, title}) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
            <Typography variant="p" gutterBottom>
                {content}
            </Typography>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default Content