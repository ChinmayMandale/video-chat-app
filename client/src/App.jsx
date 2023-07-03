import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const App = () => {
    return (
      <div>
      <AppBar position="static">
          <Typography variant="h2" align="center" sx={{ flexGrow: 1 }}>
            Video Chat App
          </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
      
      </div>

    );
}

export default App;