import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import './../../css/UserStyle.css'
import {FaShareAlt ,FaRegHeart} from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // padding: theme.spacing(2), // Add padding to the card
  },
  leftImage: {
    width: '20%', // Set left image width to 30%
    height: 'auto',
    objectFit: 'cover',
  },
  content: {
    height:'100%',
    width: 'fit-screen', // Set right content width to 70%
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // padding: theme.spacing(2),
  },
  topImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    marginBottom: theme.spacing(2),
  },
}));

const DeatilsCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img
        className={classes.leftImage}
        src= 'data:image/jpeg;base64,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'
        alt="Left_Image"
      />
      <CardContent className={classes.content} id="detailleftdiv">
        <div className='detailcardheadingdiv'>
          <Typography variant="h5" gutterBottom  className='detailcardheading'>
            3 BHK Spacious Builder Floor For Sale In Sector 43 Gurgaon
          </Typography>
          <div className='detailicondiv'> 
        <FaShareAlt  size={"23px"}/>
      <FaRegHeart size={"23px"} />
          </div>


        </div>
        <div >
            <div className='contentdiv'>
              <div>
              <img className='detailimages'
                src="https://builder-floor-flax.vercel.app/assets/imgs/icons/location.png"
                alt=""
              />
              <Typography fontWeight="lg">Sector 43</Typography>
            </div>
            <div>
              <img className='detailimages'
                src="https://builder-floor-flax.vercel.app/assets/imgs/icons/area.png"
                alt=""
              />
              <Typography fontWeight="lg">Sector 43</Typography>
            </div>
            <div>
              <img className='detailimages'
                src="https://builder-floor-flax.vercel.app/assets/imgs/icons/home.png"
                alt=""
              />
              <Typography fontWeight="lg">Sector 43</Typography>
            </div>
            <div>
              <img className='detailimages'
                src="https://builder-floor-flax.vercel.app/assets/imgs/icons/check.png"
                alt=""
              />
              <Typography fontWeight="lg">Sector 43</Typography>
            </div>
            <div>
              <img  className='detailimages'
                src="https://builder-floor-flax.vercel.app/assets/imgs/icons/stairs.png"
                alt=""
              />
              <Typography fontWeight="lg">Sector 43</Typography>
            </div>
            <div>
              <img  className='detailimages'
                src="https://builder-floor-flax.vercel.app/assets/imgs/icons/compass.png"
                alt=""
              />
              <Typography fontWeight="lg">Sector 43</Typography>
            </div>
            <Button  className='detailpagebutton' variant="contained">2.5Cr</Button>
            <Typography fontWeight="lg">View Details>>>></Typography>
              </div>
            
          {/* Add more details as needed */}
        </div>
      </CardContent>
    </Card>
  );
};

export default DeatilsCard;
