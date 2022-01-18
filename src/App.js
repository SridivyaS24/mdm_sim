import SimMaster from './pages/SimMaster';
import './App.css';
import { Grid } from '@mui/material';
import SimAppBar from './Components/Appbar';


function App() {
  return (

    <div className="App">
      <Grid container rowSpacing={5} spacing={5}>
        <Grid item xs={12} md={12}>
          <SimAppBar />
        </Grid>
        <Grid item xs={12} md={12}>
          <SimMaster />
        </Grid>
      </Grid>
    </div>

  );
}

export default App;


