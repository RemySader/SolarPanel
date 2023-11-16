// CardComponent.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './card.css'
import myimage from "../../images/heroSection.jpg"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #FFC857',
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

const CardComponent = ({ cardData }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345, margin: '5%' }}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia component="img" height="140" image={myimage} alt={cardData.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardData.title}
          </Typography>
          <Typography variant="body2">{cardData.location}</Typography>
          <Typography variant="body2">{cardData.price}</Typography>
        </CardContent>
      </CardActionArea>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={myimage} alt={cardData.title} style={{ width: '100%', borderRadius: '8px' }} />
          <Typography gutterBottom variant="h5" component="div">
            {cardData.title}
          </Typography>
          <div className="grid-container">
            <div className="grid-item">
              <Typography variant="body2">{cardData.location}</Typography>
              <Typography variant="body2">{cardData.price}</Typography>
              <Typography variant="body2" color="text.secondary">
                {cardData.description}
              </Typography>
            </div>
            <div className="grid-item" >
              <Typography variant="body2">{`${cardData.firstName} ${cardData.lastName}`}</Typography>
              <Typography variant="body2">{cardData.email}</Typography>
              <Typography variant="body2">{cardData.phoneNumber}</Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </Card>
  );
};

export default CardComponent;
