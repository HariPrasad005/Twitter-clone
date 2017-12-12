import React from 'react';
import Paper from 'material-ui/Paper';
import TabsExampleControlled from '../Tab/Tab'; 
import '../../App.css';
import Twibar from '../Bar/twibar';

const PaperExampleRounded = () => (
  <div>
    <Paper  zDepth={2} rounded={false} style={{margin:'0',overflow: 'hidden'}}>
    <Twibar/>
    <header className="App-header">
    <h1 className="App-title">#Aadhaar</h1>
    </header>
    <main className='Tab'>
    <TabsExampleControlled />
    </main>
    </Paper>
  
  </div>
);

export default PaperExampleRounded;