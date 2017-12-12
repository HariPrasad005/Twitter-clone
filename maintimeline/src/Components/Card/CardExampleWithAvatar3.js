import React from 'react';
import {Card, CardActions, CardHeader,CardTitle, CardMedia} from 'material-ui/Card';
import cover from '../Card/images/cover.png';
import Ava from '../Avatar/ava.jpg';

const CardExampleWithAvatar3 = () => (
  <Card>
   <CardMedia
     
    >

      <img src={cover} alt="" />
    </CardMedia>
    <CardHeader
      title="Hari Prasad"
      subtitle="@HariPrasad1998"
      avatar={Ava}
    />
    <CardActions>
    <CardTitle title="Tweets 1 Following 5 Followers 95"  titleColor='#1DA1F2' />
   </CardActions>
  </Card>
  
);

export default CardExampleWithAvatar3;