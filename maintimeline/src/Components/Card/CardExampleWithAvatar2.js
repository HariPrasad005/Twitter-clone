import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import viru from '../Card/images/viru.jpg';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import AvRepeat from 'material-ui/svg-icons/av/repeat';
import Comment from 'material-ui/svg-icons/communication/chat-bubble-outline';
import Mail from 'material-ui/svg-icons/communication/mail-outline';

const CardExampleWithAvatar2 = () => (
  <Card>
   <CardMedia
     
    >
    
     <CardHeader
      title="ViratKohli"
      subtitle="@imVkohli"
      avatar={viru}
    />
     <CardText>
     Its a Century
    </CardText>
      
    </CardMedia>
    <CardActions>
    <FlatButton label={<Comment/>} />
    <FlatButton label={<AvRepeat/>} />
    <FlatButton label={<ActionFavoriteBorder/>}/>
    <FlatButton label={<Mail/>}/>
   </CardActions>
  </Card>
  
);

export default CardExampleWithAvatar2;