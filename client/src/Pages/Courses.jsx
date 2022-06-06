import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {coursesItems, CoursesItems} from './Data/coursesSelect.js';
import Course from './Course';

export default function Courses() {
  const [courses, setCourses] = React.useState('');

  const handleChange = (event) => {
    setCourses(event.target.value);
  };

  return (
    <>
      <Container>
        <Box sx={{ maxWidth: 320, m: 3 }}>
          <FormControl fullWidth>
              <InputLabel id="course">Course</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={courses} 
              label="Course"
              name="course"
              onChange={handleChange}
              >
                  {coursesItems.map((option) => (
                  <MenuItem value={option.value}>{option.label}</MenuItem>
                  ))}
              </Select>
          </FormControl>
        </Box>
        <Grid container spacing={2} >
              <Course/>
        </Grid>
      </Container>
    </>

  );
}
