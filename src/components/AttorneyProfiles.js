import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button, Fab, AddIcon, Grid, Itemm, Box, Text, Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel';
import styles from 'styled-components';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function CarouselItems(props) {


  return (
    <CardWrapper>
      <div className='cardHolder'>
        <div className='card'>
          <div class='imageHolder'>
            <img class='imageInner' src='/pen.jpg'/>
          </div>
          <div className='employeeDetails'>
            <div className='employeeName'>{props.item.name}</div>
            <div className='employeeContact'><CallIcon style={{marginRight: '10px'}} /><EmailIcon/></div>
            <div className='employeeInterest'>
              <h3>Interests</h3>
              {props.item.intrest}
              </div>
              <div className='employeeQualification'>
              <h3>Education & Honours</h3>
              {props.item.Education1} <br></br>
              {props.item.Education2} <br></br>
              {props.item.Education3} 
              </div>
          </div>
        </div>
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
      image: "/pen.jpg",
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

  return (
    <Wrapper>
      <Header />

      <div className='dataHolder'>
        <div className='backimage'>
          <img src='/attorney.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }}></img>
        </div>
            <div className='transparentBackground'></div>
            <div className='textHolder'>
            <div className='header'>
            PENNSYLVANIA CIVIL RIGHTS ATTORNEYS
            </div>
            <div className='innerData'>Our team of lawyers provides experience, determination and a commitment to pursuing the best possible outcome in civil rights matters. If you have experienced police brutality, assault in prison, false arrest or other violations of your constitutional rights, you have options. Our Pennsylvania law firm can file suit against the at-fault agency, police department or prison and seek compensation for the damages you suffered.</div>
            
            </div>
            <div className='carousel'>
              <Carousel>
              {
                items.map((item, i) => <CarouselItems key={i} item={item} />)
              }
            </Carousel>
            </div>



      </div>
      <Footer />
    </Wrapper>
  )
}


export default AttorneyProfiles
const CardWrapper = styles.section`
height: 350px;
width: 100%;

.imageHolder{
  height: 100%;
  width: 50%;
  display: grid;
  place-content: center;
}


.imageInner{
  height: 90%;
  width: 90%;
  object-cover: fit;
  border-radius: 10px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
    0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1),
    0px 24px 32px rgba(9, 55, 53, 0.14);
   background-color: white;
}

.cardHolder{
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: center;
}


.card{
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  place-content: center;
  border-radius: 10px;
}

.employeeDetails{
  height: 100%;
  width: 50%;
}


.employeeName{
  width: 100%;
  height: 10%;
  text-align: left;
  color: black;
  font-size: 20px;
}
.employeeContact{
  width: 100%;
  height: 10%;
  text-align: left;
  color: black;
  font-size: 20px;
}

.employeeInterest{
  width: 100%;
  height: 30%;
  text-align: left;
  color: black;
  font-size: 15px;
}

.employeeQualification{
  width: 100%;
  height: 30%;
  text-align: left;
  color: black;
  font-size: 15px;
}
@media only screen and (max-width: 600px) {
  height: 850px;
  width: 100%;

  .card{
    width: 100%;
    height: 100%;
    background-color: white;
    display: grid;
    place-content: center;
    border-radius: 10px;
  }

  .imageHolder{
    height: 100%;
    width: 100%;
  }

  .imageInner{
    width: 100%;
    height: 90%;
  }

  .employeeDetails{
    height: 100%;
    width: 100%;
  }
  
  .employeeDetails{
  }
  .employeeName{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }
  .employeeContact{
    width: 100%;
    height: 10%;
    text-align: center;
    color: black;
    font-size: 20px;
  }
  
  .employeeInterest{
    width: 100%;
    height: 30%;
    text-align: center;
    color: black;
    font-size: 15px;
  }
  .employeeQualification{
    width: 100%;
    height: 30%;
    text-align: center;
    color: black;
    font-size: 15px;
    margin-top: 45px;
  }
}
`


const Wrapper = styled.section`
height: 100vh;
width: 100%;

.dataHolder{
  height: 50vh;
  width: 100%;
  }
.backimage{
  position: absolute;
  z-index : -1;
  height: 50vh;
  width: 100%;
}

/* New */

.transparentBackground{
  width: 100%;
  height: 50vh;
  background-color: black;
  opacity: 0.5;
  position: absolute;
}

.dataHolder{
  height: 100vh;
  width: 100%;
  position: relative;
  display: grid;
  place-content: center; 
}

.textHolder{
  width: 100%;
  height: 50vh;
}

 .header{
  height: 20%;
  width: 100%;
  position: relative;
  display: grid;
  place-content: center;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
 }

 .innerData{
  height: 80%;
  width: 80%;
  position: relative;
  display: grid;
  place-content: center;
  text-align:center;
  font-size: 20px;
  letter-spacing: 1px;
  color: white;
  background-color: aqua;
 }


 .carousel{
  height: 90%;
  width: 100%;
  position: relative;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
 }


 @media only screen and (max-width: 600px) {
  height: 100vh;
  width: 100%;

  .dataHolder{
    height: 150vh;
    width: 100%;
  }

  .transparentBackground{
  width: 100%;
  height: 150vh;
  background-color: black;
  opacity: 0.8;
  position: absolute;
}

.carousel{
  height: 100%;
  width: 100%;
  position: relative;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
 }

 }
`