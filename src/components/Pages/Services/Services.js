import { Grid } from '@material-ui/core';
import React from 'react';
import "./index.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img1 from './adab.jpg';
import img2 from './arabic.jpg';
import img3 from './english.jpg';
import img4 from './urdu.jpg';
import img5 from './naat.png';
import img6 from './Quran.jpg';
import img7 from './tajweed.jpg';
import { useNavigate } from 'react-router';



export const Services = ({getData,mode}) => {
const data = [{
    img:img6,
    title:"Hafiz-e-Quran",
    alt:"Quran",
    description:"We will make your child Hafiz-e-Quran"
},{
    img:img7,
    title:"Quran with Tajweed",
    alt:"Tajweed",
    description:"We will teach Quran to your child with Tajweed"
},{
    img:img5,
    title:"Naat",
    alt:"Naat",
    description:"We will teach naat recitation to your child"
},{
    img:img1,
    title:"Taswaaf",
    alt:"Taswaaf",
    description:"We will do the charater-buliding of your child as in the light of Islam"
},{
    img:img2,
    title:"Arabic Language",
    alt:"Arabic",
    description:"We will teach Arabic to your child as a language after that he will be able to speak, write and understand Arabic"
},{
    img:img4,
    title:"Urdu Language",
    alt:"Urdu",
    description:"We will teach Urdu to your child as a language after that he will be able to speak, write and understand Urdu"
},{
    img:img3,
    title:"Engish Language",
    alt:"English",
    description:"We will teach English to your child as a language after that he will be able to speak, write and understand English"
},] 
const navi = useNavigate();
  return (<div>
        <div className="Header">
            <h1 className="Heading">All the services we offer for your child</h1>
            <h5 className="subheading">Trust us your child in our responsibility</h5>
        </div>
        <Grid container spacing={4}>
       
        {data.map((item,i)=>(
            <Grid key={i}  item xs={12} md={4}>
        <Card key={i} className="card" elevation={4} onClick={()=>{getData(item);navi('/details')}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.alt}
          height="140"
          image={item.img}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
