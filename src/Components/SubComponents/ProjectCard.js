import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../../App.css';
import Container from '@mui/material/Container';
import { GitHub } from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard({ image, alt, projectName }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className=' text-light shadow-lg bg-dark '>
      {/* <CardHeader
        className='text-light'
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      /> */}
      <CardMedia
        component='img'
        height='400'
        width='auto'
        image={image}
        alt={alt}
        className='rounded mb-2 mx-auto img-fluid  '
      />
      <CardContent>
        <Typography variant='subtitle1' className='text-light mb-2'>
          {projectName}
        </Typography>
        <Container maxWidth='xs'>
          <img
            src='https://img.icons8.com/color/28/000000/html-5--v1.png'
            className='mx-2'
          />
          <img
            src='https://img.icons8.com/color/28/000000/css3.png'
            className='mx-2'
          />
          <img
            src='https://img.icons8.com/color/28/000000/react-native.png'
            alt='reactlogo'
            className='mx-2'
          />
          <img
            src='https://img.icons8.com/color/28/000000/javascript--v1.png'
            className='mx-2'
          />
        </Container>
      </CardContent>
      <CardActions disableSpacing className='text-light'>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon color='secondary' />
        </IconButton>
        <IconButton aria-label='share'>
          <GitHub sx={{ color: 'teal' }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'>
          <ExpandMoreIcon sx={{ color: 'white' }} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
