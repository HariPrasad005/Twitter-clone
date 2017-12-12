import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';

/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */
const IconMenuExampleSimple = () => (
  <div>
  <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText={<span style={{ color: 'black',fontFamily:'Segoe UI',borderColor:'#ffad1f',textTransform:'capitalize'}}>Search Settings</span>} />
      <Divider />
      <MenuItem primaryText={<span style={{ color: 'black',fontFamily:'Segoe UI',borderColor:'#ffad1f',textTransform:'capitalize'}}>Save this Search</span>} />
      <MenuItem primaryText={<span style={{ color: 'black',fontFamily:'Segoe UI',borderColor:'#ffad1f',textTransform:'capitalize'}}>Embed this Search</span>} />
    </IconMenu>
  </div>
);

export default IconMenuExampleSimple;