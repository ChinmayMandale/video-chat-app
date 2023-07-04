import React, { useContext, useState } from 'react';

import { Typography, Button, TextField, Grid, Container, Paper } from '@mui/material';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';

const Options = ({children}) => {

    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);

    const [idToCall, setIdToCall] = useState('');

    return (
        <Container sx={{
            width: '50%',
            // margin: '35px 0',
            padding: 0,
            mb: 3,
        }}>
            <Paper elevation={10} sx={{
                padding: '10px 20px',
                border: '2px solid black',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
            }}>
                <form noValidate autoComplete='off'>
                    <Grid container spacing={2} sx={{
                        width: '100%'
                    }}>
                        <Grid item xs={12} md={6} sx={{p: 5}}>
                            <Typography gutterBottom variant='h6'>Account Info</Typography>
                            <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <CopyToClipboard text={me} sx={{
                                mt: '10px',
                            }} >
                                <Button variant='contained' color='primary' fullWidth >
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{p: 5}}>
                            <Typography gutterBottom variant='h6'>Make a call</Typography>
                            <TextField label='ID To Call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {
                                callAccepted && !callEnded ? (
                                    <Button variant='contained' color='secondary' fullWidth onClick={leaveCall} sx={{mt: '10px',}} >
                                        Hang Up
                                    </Button>
                                ) : (
                                    <Button variant='contained' color='primary' fullWidth onClick={() => callUser(idToCall)} sx={{mt: '10px',}} >
                                        Call
                                    </Button>
                                )
                            }
                        </Grid>
                    </Grid>

                </form>
                {children}
            </Paper>
            
        </Container>
    );
};

export default Options;