import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react';
import s1 from './s1.svg';
import './index.css';
import useWebAnimations from '@wellyshen/use-web-animations';
import { useNavigate } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        display:"flex",
        flexWrap:"wrap",
        width:"100%", 
Paper: {
        padding: theme.spacing(0),
        textAlign:'left',
        float:"left"
        ,margin:"0px 0px",
        textShadow:"2px 2px 2px grey",
        background: 'transparent',
}}
  }));

export const Home = ({mode}) => {
  const Bounce = useWebAnimations({keyframes:[{transform:'translateY(0px)'},{transform:'translateY(20px)'},{transform:'translateY(-20px)'}],timing:{duration:3000,iterations:Infinity,direction:"alternate"}});
    const classes = useStyles();
    const navi = useNavigate();
    return (
        <div>
           <Grid container spacing={3}>
            <Paper className={classes.paper} elevation={0} style={mode ? {color:"rgb(200,200,200)",background:"linear-gradient(315deg, rgba(34,185,252,1) 10%, rgba(4,117,4,1) 83%)",marginBottom:"10%"}:{color:'rgb(14,80,14)',backgroundColor:"white",marginBottom:"10%"}}>
             {/* Grid 1 */}
              <Grid item xs={12} md={5}>
               <Paper elevation={0} style={mode?{paddingTop:"50px",textAlign:"left",color:"rgb(230,230,230)",backgroundColor:"transparent"}:{paddingTop:"50px",textAlign:"left",color:"rgb(14,80,14)",backgroundColor:"transparent"}} className={classes.Paper}>
                <Typography variant="h2">
                 WELCOME TO JAMIYA MISSRIYA QADRIA GUZAR-E-HABIB 
                </Typography><br/>
                <Typography variant="body1">
                 THE FORT OF ISLAM WITH SCIENCES
                </Typography><br/>
                <Button variant="outlined" onClick={()=>{navi('/contact')}} style={mode ? {marginLeft:"50px",color:'rgb(230,230,230)'}:{marginLeft:"50px",color:'rgb(14,80,14)'}}>
                 CONTACT US
                </Button>
               </Paper>
              </Grid>
           {/* Grid#2 */}
              <Grid item xs={12} md={7}>
              <div style={{display:"flex",justifyContent:"center"}}>
                  <img
                  ref={Bounce.ref}
      className="homeimg"
      style={{marginTop:"30px"}}
      src={s1}
      alt="First slide"
    /> </div>
              </Grid>
            </Paper>
           </Grid>
        </div>
    )
}
