import React from 'react';
import Paper from 'material-ui/Paper';
import '../../App.css';
import Twibar from '../Bar/twibar';
import './Paper.css';

const PaperExampleRounded = () => (
  <div className='paper'>
    <Paper  zDepth={2} rounded={false} style={{margin:'0',overflow: 'hidden'}}>
    <div className='bar'>
    <Twibar/>
    </div>
    <main className='Tab'>
    </main>
    </Paper>
  
  </div>
);

export default PaperExampleRounded;