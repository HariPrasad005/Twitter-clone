import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperExampleRounded from '../src/Components/Paper/Paper';
import List from '../src/Components/List/List';
import List1 from '../src/Components/List/List1';
import List2 from '../src/Components/List/List2';
import ListExampleMessages from '../src/Components/List/ListExampleMessages';
import CardExampleWithAvatar from '../src/Components/Card/CardExampleWithAvatar';
import CardExampleWithAvatar2 from '../src/Components/Card/CardExampleWithAvatar2';
import Progress from '../src/Components/Progress/Progress';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
      <PaperExampleRounded/>
      </div>
      <div className='time'>
       <h3>Top News</h3>
       <div className='card1'>
       <CardExampleWithAvatar/>
       </div>
       <div className='card2'>
       <CardExampleWithAvatar2/>
       </div>
       <div className='progress'>
       <Progress/>
       </div>
       </div>
       <div className="list">
       <List1/>
       <List/>
       <ListExampleMessages/>
       <List2/>
       <h5 style={{cursor:'pointer',color:'grey',width:'200px',paddingLeft:'60px'}}>© 2017 Twitter About Help Center Terms Privacy policy Cookies Ads info</h5>
       </div>
       </MuiThemeProvider>
    );
  }
}

export default App;
