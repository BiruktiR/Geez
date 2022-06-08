import React,{useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Content from './Content';

//import blog3 from '../../assets/images/img3.jpg';

import data from '../Pages/Data/course-mock.json';

export default function CourseCard() {

  useEffect(()=>{
    fetchItems();
      },[]);
      const [items,setItems]=useState([]);

      const fetchItems=async()=>{
          const data = await fetch('/continue');
          const items = await data.json();
          setItems(items);
      };

  return (
    <>
    {items.map((value) => {

      return (
        <Grid item xs={6}  md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="courseIamge"
            height="140"
           image={value.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {value.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
            size="small"
            onClick={<Content content={value.content} title={value.title}/>}

            >Continue</Button>
          </CardActions>
        </Card>
      </Grid>
      );
    })

    }
    </>
  );
}
