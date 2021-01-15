import { Button, Paper ,Typography} from '@material-ui/core';
import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export const Contact = () => {
    const classes = useStyles();
    return (
        <div className="contactdiv">
           <span className="hi">Contact Us</span>
           <Paper className="paperdiv" elevation={3} style={{padding:"5% 4%",backgroundColor:"rgba(255,255,255,0.5)",maxWidth:"350px",margin:"auto auto",color:"rgb(14,80,14)"}} >
               <Typography variant="h5" style={{color:"rgb(14,80,14)",fontWeight:"bolder"}} >Fill the form to Contact Us</Typography><br/>
           <form className={classes.root} noValidate autoComplete="off">
      <TextField id="FName" style={{color:"white"}} label="First Name" /><br/>
      <TextField id="LName" label="last Name" /><br/>
      <TextField id="Gmail" label="Gmail"/><br/>
      <TextField id="phone" label="Phone Number"/><br/><br/>
      <Button type="submit" onClick={()=>{alert("Thanks")}} variant="outlined">Submit</Button>
    </form>
           </Paper>
        </div>
    )
}
