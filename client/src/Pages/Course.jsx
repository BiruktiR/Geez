import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import blog3 from '../../assets/images/img3.jpg';

import data from './Data/course-mock.json';

export default function CourseCard() {
  return (
    <>
    {data.map((value) => {

      return (
        <Grid item xs={6}  md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="courseIamge"
            height="140"
            image={blog3}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {value.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {value.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Continue</Button>
          </CardActions>
        </Card>
      </Grid>
      );
    })

    }
    </>
  );
}
