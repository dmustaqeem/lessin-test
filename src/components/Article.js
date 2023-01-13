import React, { useState } from 'react'
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';

function Article() {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


  const card = (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="./dining.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Article
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1515 Market Street, Suite 1650 | Philadelphia, PA 19102 | Phone:
            (215) 599-1400 | Fax: 215-599-0120
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Directions </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  )

  return (

    <Wrapper>

      <section className='section-1'>
        <div className='image-holder' 
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <img src='./Books.jpg' style={{ position: 'relative', width: '100%', height: '100%', top: '0px', left: '0px', objectFit: 'cover', borderRadius: '20px' }}></img>
          <div className='info-holder'>

            <div className='article-holder'>
              <h2 className='heading-holder'> Article </h2>
              {/* <p className='paragraph-holder'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            </div>
          </div>
      </div>
      <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
              open={open}
              onClick={handleClose}>
              <Card variant="outlined">{card}</Card>
      </Backdrop>
    </section>
      
    </Wrapper >
  )
}

export default Article

const Wrapper = styled.footer`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
width: 100%;
height: 100%;
position: relative;
display: grid;
margin-bottom: 10px;

.section-1{
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%;
  height: 70vh;
  background-color: lightblue;
  justify-content: center;
  place-content: center;
  align-items: center;
  background-color: rgb(20, 39, 79);
  cursor: pointer;
}

.paragraph-holder{
  display: none;
}

.image-holder{
  width: 70%;
  height: 90%;
  margin: 3px;
  position: relative;
  border-radius: 20px;
  
  &:hover{
    background-color: black;
    opacity: 0.8;
  }
}

.image-holder:hover .heading-holder{
 display: none;
}

.image-holder:hover .paragraph-holder{
  display: block;
 }

.info-holder{
  position: absolute;
  justify-content: center;
  place-content: center;
  align-items: center;
  border-radius: 20px;
  top: 50%;
  left: 2%;

  &:hover{
    opacity: 1;
  }
}

.article-holder{
    height: 100%;
    width: 100%;
    color: white;
    
    opacity: 1;
}

.image-holder:hover {
  
}
`;
