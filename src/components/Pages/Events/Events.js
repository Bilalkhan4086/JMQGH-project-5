import React from 'react';
import "./index.css";
import img1 from './s (1).jpg';
import img2 from './s (2).jpg';
import img3 from './s (3).jpg';
import img4 from './s (4).jpg';
import img5 from './s (5).jpg';
import img6 from './s (6).jpg';
import img7 from './s (7).jpg';
import img8 from './s (8).jpg';
import img9 from './s (9).jpg';
import img10 from './s (10).jpg';
import img11 from './s (11).jpg';
import { Card, CardActionArea, CardMedia, Grid, Typography,CardContent } from '@material-ui/core';
import { useNavigate } from 'react-router';





}))
  

export const Events = ({getData}) => {
    const navi = useNavigate();
    const tileData = [{
        img:img6,
        title:"12 Rabi-ul-awl",
        featured:false,
        author:"Sahib Zada Tahir Hussain Rafkti Sahab",
        description:"We will make your child Hafiz-e-Quran"
    },{
        img:img7,
        title:"Ralli",
        featured:false,
        author:"Mr. Muhammad Bilal",
        description:"We will teach Quran to your child with Tajweed"
    },{
        featured:true,
        img:img5,
        title:"12 Rabi-ul-awl",
        author:"Sahib Zada Tahir Hussain Rafkti Sahab and Mr. Muhammad Bilal",
        description:"We will teach naat recitation to your child"
    },{
        img:img1,
        featured:false,
        title:"Mehfil at Qari Sahab House",
        author:"Mr. Muhammad Bilal with two other",
        description:"We will do the charater-buliding of your child as in the light of Islam"
    },{
      img:img2,
      title:"12 Rabi-ul-awl",
      featured:false,
      author:"Mr. Muhammad Awais",
      description:"We will teach Arabic to your child as a language after that he will be able to speak, write and understand Arabic"
  },{
      img:img4,
      title:"Rabi-u-awl",
      featured:true,
      author:"Mr. Muhammad Bilal",
      description:"We will teach Urdu to your child as a language after that he will be able to speak, write and understand Urdu"
  },{
      img:img3,
      featured:true,
      title:"12 Rabi-ul-awl",
      author:"Mr. Ali Shahriya",
      description:"We will teach English to your child as a language after that he will be able to speak, write and understand English"
  },{
    img:img8,
    title:"12 Rabi-u-awl",
    featured:false,
    author:"Touseef Abbas shah G with 4 others",
    description:"We will teach Arabic to your child as a language after that he will be able to speak, write and understand Arabic"
},{
  img:img9,
  featured:true,
  title:"12 Rabi-u-awl",
  author:"Jammiya student with Touseef Abbas shah G",
  description:"We will teach English to your child as a language after that he will be able to speak, write and understand English"
},{
  img:img10,
  title:"12 Rabi-u-awl",
  featured:true,
  author:"Mr. Muhammad Bilal with 5 others",
  description:"We will teach Urdu to your child as a language after that he will be able to speak, write and understand Urdu"
},{
  img:img11,
  featured:true,
  title:"Mehfil at Qari Sahab House",
  author:"Sahib Zada Tahir Hussain Rafkti Sahab with two others",
  description:"We will teach English to your child as a language after that he will be able to speak, write and understand English"
},] 
    return (
        <div className="Eventmain">
        <span className="MHeading">Some Events</span><br/>
        <Grid container spacing={1}>
       
        {tileData.map((item,i)=>(
            <Grid key={i} item xs={12} md={4}>
        <Card key={i} style={{height:"400px",backgroundColor:'rgba(0,0,0,0.5)',color:"white"}} className="card">
      <CardActionArea onClick={()=>{getData(item);navi('/details')}}>
        <CardMedia
          component="img"
          alt={item.alt}
          height="300"
          image={item.img}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item.title}
          </Typography>
          <Typography variant="body2"  component="p">
          {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        ))}
        </Grid>
        </div>
    
        
    )
}
