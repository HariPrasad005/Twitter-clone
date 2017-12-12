import React from 'react';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import Ava from '../Avatar/ava.jpg';



const style = {margin: 5};

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
const AvatarExampleSimple = () => (
  
        
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          src={Ava}
          size={30}
          style={style}
        />
      }
    >
   
   
    </ListItem>
  
  
 
);

export default AvatarExampleSimple;