import React, {useContext} from 'react';
import { Typography, Grid, Paper } from '@mui/material';

import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        
            <Grid container sx={{
                display: 'flex',
                justifyContent: 'center'
                }}>
                {/* Our video */}
                {
                    stream && (
                        <Paper sx={{
                            p: 10, 
                            border: 2,
                            borderColor: 'black.500',
                            m: 5
                        }}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                                <video playsInline muted ref={myVideo} autoPlay sx={{width: '35%'}}/>
                            </Grid>
                        </Paper>
                    )
                }
                {/* Other user video */}
                {
                    callAccepted && !callEnded && (
                        <Paper sx={{
                            p: 10, 
                            border: 2,
                            borderColor: 'black.500',
                            m: 10
                        }}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
                                <video playsInline ref={userVideo} autoPlay sx={{width: '35%'}} />
                            </Grid>
                        </Paper>
                    )
                }
            </Grid>
        
    );
};

export default VideoPlayer;