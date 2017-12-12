import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {lightBlack} from 'material-ui/styles/colors';
import ava1 from '../Card/images/1.jpg';
import ava2 from '../Card/images/2.jpg';
import ava3 from '../Card/images/3.jpeg';

const ListExampleMessages = () => (
  <div className='recent'>
    <div>
      <List>
        <h3>Who to follow</h3>
        <ListItem
          leftAvatar={<Avatar src={ava1}/>}
          primaryText={
          <p>Times Now&nbsp;<span style={{color: lightBlack}}>@timesnow</span></p>
        }
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src={ava2} />}
          primaryText={
            <p>CGTN&nbsp;&nbsp;<span style={{color: lightBlack}}>@cgtnoff</span></p>
          }
         
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src={ava3} />}
          primaryText={
            <p>Nandhan<span style={{color: lightBlack}}>@nanniki</span></p>
          }
         
        />
        <Divider inset={true} />
         <h5 style={{cursor:'pointer'}}><i class="fa fa-users" aria-hidden="true"></i> Find people who you know</h5>
       
        
      </List>
    </div>
  </div>
);

export default ListExampleMessages;