import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import avatar from '../Card/images/avatar.jpg';
import boy from '../Card/images/boy.jpg';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import AvRepeat from 'material-ui/svg-icons/av/repeat';
import Comment from 'material-ui/svg-icons/communication/chat-bubble-outline';
import Mail from 'material-ui/svg-icons/communication/mail-outline';

const CardExampleWithAvatar = () => (
  <Card>
   <CardMedia
     
    >
    
     <CardHeader
      title="Sushma Swara"
      subtitle="@SushmaSwaraj"
      avatar={avatar}
    />
     <CardText>
    We have a boy in the Observation Home, Faridkot.
    We are unable to confirm his identity as he cannot speak or hear.
    Pls see if he is Hammad Hassan or someone you know.
    </CardText>
      <img src={boy} alt="" />
    </CardMedia>
    <CardActions>
    <FlatButton label={<Comment/>} />
    <FlatButton label={<AvRepeat/>} />
    <FlatButton label={<ActionFavoriteBorder/>}/>
    <FlatButton label={<Mail/>}/>
   </CardActions>
  </Card>
  
);

export default CardExampleWithAvatar;