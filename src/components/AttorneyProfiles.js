import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useModalContext } from '../context/modal_context'
import Contact from './Contact'
import Article from './Article'
import Filler from './Filler'
import Section from './Section'
import Header from './Header'
import Footer from './Footer'
import { Button, Fab, AddIcon, Grid, Itemm, Box, Text, Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import styles from 'styled-components';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


function CarouselItems(props) {


  return (
    <CardWrapper>
      <div className='cardHolder'>
        <Card sx={{ minHeight: '10%', width: 1000, justifyContent: 'flex-top' }}>
          <CardCover>

          </CardCover>

          <CardContent sx={{ justifyContent: 'flex-end' }}>
            <img style={{ width: '50%', justifyContent: 'flex-top-right' }}

              src={props.item.image}
              srcSet={props.item.image}
              loading="lazy"
              alt=""
            />
            <h2>
              {props.item.name} <br></br>
            </h2>

            <div className='educationHolder'>
              {props.item.Education1}  <br></br>
              {props.item.Education2}  <br></br>
              {props.item.Education3}
            </div>

            <div className='buttonHolder'>
              <a style={{ color: 'black' }} href="tel:+2155991400">
                <div className='callButton'>
                  <CallIcon style={{ fontSize: 'large', marginRight: '5px' }} />
                </div>
              </a>
              <a style={{ color: 'black' }} href="mailto:info@lessinlaw.com">
                <div className='callButtonHolderInner'>
                  <EmailIcon style={{ fontSize: 'large', marginRight: '5px' }} />
                </div>
              </a>

            </div>



          </CardContent>
        </Card>
      </div>

    </CardWrapper>


  )
}

const AttorneyProfiles = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  var items = [
    {
      image: "/twitter.png",
      name: "THOMAS A. KARPINK",
      email: "sasjl@gmail.com",
      phone: "866.920.6403",
      fax: "215.599.0120",
      intrest: "Personal Injury,Slip and Fall Injuries,Injury from dangerous Products, Medical Malpratice, Bad Faith Insurence Litigation and Disputes,Civil Rights Violation, Boating Accident Injuries, Fire Injuries",
      BarAdmission: "Pennsylvania,1986",
      Education1: "Temple University School of Law, Philadelphia,Pennsylvania J.D - 1986",
      Education2: "Temple University, Philadelphia, Pennsylvania M.B.A",
      Education3: "Penn State University College Park, Pennsylvania B.S. - 1973"
    },
    {


      image: "/pen.jpg",
      name: "THOMAS A. KARPINK",
      email: "sasjl@gmail.com",
      phone: "866.920.6403",
      fax: "215.599.0120",
      intrest: "Personal Injury,Slip and Fall Injuries,Injury from dangerous Products, Medical Malpratice, Bad Faith Insurence Litigation and Disputes,Civil Rights Violation, Boating Accident Injuries, Fire Injuries",
      BarAdmission: "Pennsylvania,1985",
      Education1: "Villanova University School of Law, Villanova, PennsylvaniaJ.D. - 1985",
      Education2: "George Washington University, Washington, District of Columbia B.A. - 1982",
      Education3: "Honors and Awards Super Lawyer, 2007 - 2010"
    },
    {
      image: "/pen.jpg",
      name: "MARK T. RICHTER",
      email: "sasjl@gmail.com",
      phone: "866.920.6403",
      fax: "215.599.0120",
      intrest: "Personal Injury,Slip and Fall Injuries,Injury from dangerous Products, Medical Malpratice, Bad Faith Insurence Litigation and Disputes,Civil Rights Violation, Boating Accident Injuries, Fire Injuries",
      BarAdmission: "Pennsylvania, 1985",
      Education1: "Villanova University School of Law, Villanova, PennsylvaniaJ.D. - 1985",
      Education2: "Temple University, Philadelphia, Pennsylvania B.A. - 1982",
      Education3: "Super Lawyers, 2008 - 2010"
    },
  ]



  const { openModal } = useModalContext()

  const { isModalOpen, closeModal } = useModalContext()
  return (
    <Wrapper>
      <Header />
      
      <div className='dataHolder'>
      <div className='backimage'>
        <img src='/attorney.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }}></img>
      </div>
      <div className='carouselHolder'>
        <div className='carouselBackground'></div>
        <div className='carouselBackgroundTop'>
          <div className='carouselTitleHolder'>
            <h3 style={{ color: 'black' }}>Attorney</h3>
          </div>

          <Carousel>
            {
              items.map((item, i) => <CarouselItems key={i} item={item} />)
            }
          </Carousel>

        </div>
      </div>
      </div>

      <Footer />

    </Wrapper>
  )
}


export default AttorneyProfiles
const CardWrapper = styles.div`
height: 100%;
width: 100%;


.imageHolder{
  height: 50%;
  width: 100%;
}

.cardHolder{
    height: 100%;
    width: 100%;
    display: grid;
    place-content: center;
}
`


const Wrapper = styled.section`
height: 100vh;
width: 100%;


.dataHolder{
  height: 100vh;
  width: 100%;
}

 
 .info-holder{
   top: 0;
   display: grid;
   position: absolute;
   height: 50%;
   width: 100%;
   justify-content: center;
   place-content: center;
   align-items: center;
   border-radius: 25px;
   z-index: 1;
 }
 .backimage{
      position: absolute;
      z-index : -1;
      height: 100vh;
      width: 100%;
    }
 
 // image
 carouselHolder{
  height: 100%;
  width: 100%;
  display: grid;
  background-color: rgb(20, 39, 79);
  position : absolute;
}

.carouselTitleHolder{
  height: 100%;
  width: 100%;
  text-align: center;
}
.carouselBackground{
  position: absolute;
  background-color: black;
  height: 100%;
  width: 99%;
  opacity: 0.5;
  border-radius: 20px;
  margin-left: 0.5%;
}

.carouselBackgroundTop{
  z-index: 1;
}//
 
 .article-holder{
     height: 100%;
     width: 100%;
     color: white;
     borderBottom: 2px solid #dadada;
     borderColor: 'white';
     opacity: 1;
     margin-top : -280%;
     
 }

 .form-holder{
   display: grid;
   justify-content: center;
   align-items: center; 
   width: 100%;
   height: 120vh;
   position: relative;
 }


 .form {
   background-color: #15172b;
   border-radius: 20px;
   box-sizing: border-box;
   height: auto;
   padding: 20px;
   width: 320px;
 }
 
 .title {
   color: #eee;
   font-family: sans-serif;
   font-size: 36px;
   font-weight: 600;
   margin-top: 30px;
 }
 
 .subtitle {
   color: #eee;
   font-family: sans-serif;
   font-size: 16px;
   font-weight: 600;
   margin-top: 10px;
 }
 
 .input-container {
   height: 50px;
   position: relative;
   width: 100%;
 }

 .input-container2 {
   height: 100px;
   position: relative;
   width: 100%;
   margin-top: 30px;
 }
 
 .ic1 {
   margin-top: 40px;
 }
 
 .ic2 {
   margin-top: 30px;
 }
 
 .input {
   background-color: #303245;
   border-radius: 12px;
   border: 0;
   box-sizing: border-box;
   color: #eee;
   font-size: 18px;
   height: 100%;
   outline: 0;
   padding: 4px 20px 0;
   width: 100%;
 }
 
 .cut {
   background-color: #15172b;
   border-radius: 10px;
   height: 20px;
   left: 20px;
   position: absolute;
   top: -20px;
   transform: translateY(0);
   transition: transform 200ms;
   width: 76px;
 }
 
 .cut-short {
   width: 70px;
 }
 
 .input:focus ~ .cut,
 .input:not(:placeholder-shown) ~ .cut {
   transform: translateY(8px);
 }
 
 .placeholder {
   color: #65657b;
   font-family: sans-serif;
   left: 20px;
   line-height: 14px;
   pointer-events: none;
   position: absolute;
   transform-origin: 0 50%;
   transition: transform 200ms, color 200ms;
   top: 20px;
 }
 
 .input:focus ~ .placeholder,
 .input:not(:placeholder-shown) ~ .placeholder {
   transform: translateY(-30px) translateX(10px) scale(0.75);
 }
 
 .input:not(:placeholder-shown) ~ .placeholder {
   color: #808097;
 }
 
 .input:focus ~ .placeholder {
   color: #dc2f55;
 }
 
 .submit {
   background-color: #08d;
   border-radius: 12px;
   border: 0;
   box-sizing: border-box;
   color: #eee;
   cursor: pointer;
   font-size: 18px;
   height: 50px;
   margin-top: 38px;
   // outline: 0;
   text-align: center;
   width: 100%;
 }
 
 .submit:active {
   background-color: #06b;
 }

 @media only screen and (max-width: 600px) {
 
 }
`