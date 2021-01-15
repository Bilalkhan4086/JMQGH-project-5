import { Grid, Typography,Paper,makeStyles } from '@material-ui/core';
import React from 'react';
import './index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        // mixBlendMode:"multiply",
      flexGrow: 1,
      position:"relative",
      zIndex:1,
    },
    paper: {
        // mixBlendMode:"multiply",
        padding: theme.spacing(4),
        textAlign: 'center',
        display:"flex",
        flexWrap:"wrap",
        width:"100%", 
        background: "transparent",
  },
  Paper: {
    // mixBlendMode:"multiply",
    padding: theme.spacing(0),
    textAlign:"center"
    ,margin:"0px 0px",
    background: "transparent",
    
}}
  ));

export const Details = ({data,mode}) => {
    const classes = useStyles();
    return (
        <div className="Detailsmain" >
        <span className="MianHeading" style={mode?{color:"rgb(230,230,230)"}:{color:"rgb(14,80,14)"}}>Details for {data.title}</span><br/>
        <Grid container spacing={3}>
            <Paper elevation={0} className={classes.paper}>
             {/* Grid 1 */}
              <Grid item xs={12} md={5}>
               <Paper elevation={0} className={classes.Paper} style={{padding:"100px 0px",backgroundColor:"transparent"}}>
                <Typography variant="h2" style={mode?{color:"rgb(230,230,230)"}:{color:"rgb(14,80,14)"}}>
                {data.author} 
                </Typography><br/>
                <Typography variant="body1" style={mode?{color:"rgb(230,230,230)"}:{color:"rgb(14,80,14)"}}>
                {data.description} 
                </Typography>
               </Paper>
              </Grid>
           {/* Grid#2 */}
              <Grid item xs={12} md={7}>
              <div style={{display:"flex",justifyContent:"center",position:"relative",zIndex:1}}>
                 <Paper style={{padding:"10px"}} >
                 <img
      className="homeimg"
      style={{marginTop:"30px"}}
      src={data.img}
      alt="First slide"
    />
                 </Paper>
                  </div>
              </Grid>
            </Paper>
           </Grid>
                     
        </div>
    )
}
