import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperExampleRounded from '../src/Components/Paper/Paper';
import List1 from '../src/Components/List/List1';
import List2 from '../src/Components/List/List2';
import ListExampleMessages from '../src/Components/List/ListExampleMessages';
import CardExampleWithAvatar from '../src/Components/Card/CardExampleWithAvatar';
import CardExampleWithAvatar2 from '../src/Components/Card/CardExampleWithAvatar2';
import CardExampleWithAvatar3 from '../src/Components/Card/CardExampleWithAvatar3';
import Progress from '../src/Components/Progress/Progress';
import AvatarExampleSimple1 from '../src/Components/Avatar/Avatar1';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
      <PaperExampleRounded/>
      </div>
      <div className="list">
      <div className="profile">
      <CardExampleWithAvatar3/>
      </div>
       <List1/>
       <List2/>
       </div>
      <div className='time'>
      <h3 class="tweet">
    <AvatarExampleSimple1/></h3>
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
       <div className ="list2">
       <ListExampleMessages/>
       <h5 style={{cursor:'pointer',color:'grey',width:'200px',paddingLeft:'60px'}}>Â© 2017 Twitter About Help Center Terms Privacy policy Cookies Ads info</h5>
       </div>
       </MuiThemeProvider>
    );
  }
}

export default App;

