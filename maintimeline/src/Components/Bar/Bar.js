import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    style={{backgroundColor:'grey',color: 'black',fontFamily:'Segoe UI'}}
    title="Title"
    showMenuIconButton={false}
    
  />
);

export default AppBarExampleIcon;