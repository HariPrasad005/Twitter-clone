import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconMenuExampleSimple from '../Icon/Icon';
import './Tab.css';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tab:{
      backgroundColor:'white',
  },
  tab1:{
    backgroundColor:'white',
   
}
};

export default class TabsExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        inkBarStyle={{background: '#1DA1F2'}}
        tabItemContainerStyle={{background:'white',width: '600px'}}
        
      >
        <Tab
         label={<span style={{ color: 'black',fontFamily:'Segoe UI',borderColor:'#ffad1f',textTransform:'capitalize'}}>Top</span>}
          value="a"
          buttonStyle={styles.tab}>
          <div>
           
          
          </div>
        </Tab>
        <Tab label={<span style={{ color: 'black',fontFamily:'Segoe UI',borderColor:'#ffad1f',textTransform:'capitalize'}}>Latest</span>} buttonStyle={styles.tab} value="b">
          <div>
           
         </div>
        </Tab>
        <Tab label={<span style={{ color: 'black',fontFamily:'Segoe UI',borderColor:'#ffad1f',textTransform:'capitalize'}}>People</span>} buttonStyle={styles.tab} value="c">
          <div>
            
           </div>
        </Tab>
        <Tab label={<span style={{ color: 'black',fontFamily:'Segoe UI',borderColor:'#ffad1f',textTransform:'capitalize'}}>Photos</span>} buttonStyle={styles.tab} value="d">
          <div>
            
        </div>
        </Tab>
        <Tab label={<span style={{ color: 'black',fontFamily:'Segoe UI',borderColor:'#ffad1f',textTransform:'capitalize'}}>Videos</span>} buttonStyle={styles.tab} value="e">
          <div>
            
         </div>
        </Tab>
        <Tab label={<span style={{ color: 'black',fontFamily:'Segoe UI',borderColor:'#ffad1f',textTransform:'capitalize'}}>News</span>} buttonStyle={styles.tab} value="f">
          <div>
           
        </div>
        </Tab>
        <Tab label= {<span style={{ color: 'black',fontFamily:'Segoe UI',borderColor:'#ffad1f',textTransform:'capitalize'}}>Broadcasts</span>} buttonStyle={styles.tab} value="m">
        </Tab>
        <div className='icon'>
        <IconMenuExampleSimple/>
        </div>
      </Tabs>
    );
  }
}
