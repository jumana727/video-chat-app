import React,{useContext} from 'react'
import {Grid, Typography,Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Webcam from "react-webcam";
import { SocketContext} from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: '10px',
      border: '2px solid black',
      margin: '10px',
    },
  }));

export const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
        <Grid container className={classes.gridContainer}>

            {stream && (
                <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                    {/* <video playsInline muted ref={myVideo} autoPlay className={classes.video} mirrored="true"/> */}
                    <Webcam
                    className={classes.video}
                    audio={false}            
                    ref={myVideo}    
                    mirrored={true}
                    />
                </Grid>
                </Paper>
            )}

            
            {callAccepted && !callEnded &&(
                    <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
                        {/* <video playsInline muted ref={userVideo} autoPlay className={classes.video}/> */}
                        <Webcam
                    className={classes.video}
                    audio={false}            
                    ref={userVideo}    
                    mirrored={true}
                    />
                    </Grid>
                    </Paper>
            )}
            
        </Grid>
    );
}

export default VideoPlayer;