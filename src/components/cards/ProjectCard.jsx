import React, { useState } from 'react'
import styled from 'styled-components'
import { 
  Dialog, 
  DialogContent, 
  IconButton, 
  Typography, 
  Box 
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const Card = styled.div`
width: 330px;
height: 440px;
background-color: ${({theme}) => theme.card};
cursor: pointer;
border-radius: 10px;
box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
overflow: hidden;
padding: 26px 20px;
display: flex;
flex-direction: column;
gap: 14px;
transition: all 0.5s ease-in-out;
&:hover{
transform: translateY(-10px);
box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
filter: brightness(1.1);
}
`;

const Image = styled.img`
width: 100%;
height: 55%;
background-color: ${({theme}) => theme.white};
border-radius: 10px;
box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 0px;
padding: 0px 2px;
`;

const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: ${({theme}) => theme.text_secondary};
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`;

const Date = styled.div`
font-size: 12px;
margin-left: 2px;
font-weight: 400;
color: ${({theme}) => theme.text_secondary + 80};
@media only screen and (max-width: 768px) {
font-size: 10px;
}
`;

const Description = styled.div`
font-weight: 300;
color: ${({theme}) => theme.text_secondary + 99};
overflow: hidden;
margin-top: 8px;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    max-width: 600px;
    width: 60%;
    max-height: 90vh;
    border-radius: 16px;
    background-color: ${({theme}) => theme.primary_theme};
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
  color: ${({theme}) => theme.text_secondary};
  background-color: rgba(194, 187, 187, 1);
  &:hover {
    background-color: rgba(119, 115, 115, 1);
  }
`;

const ModalImage = styled.img`
  width: 80%;
  max-height: 280px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  border-radius: 12px;
  margin-bottom: 16px;
box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);

`;

const ProjectCard = ({project}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card onClick={handleOpen}>
          <Image src={project.image} />
          <Details>
              <Title>{project.title}</Title>
              <Date>{project.date}</Date>
              <Description>{project.description}</Description>
          </Details>
      </Card>

      <StyledDialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        
        <DialogContent sx={{ padding: 3 }}>
          <Box>
            <ModalImage src={project.image} alt={project.title} />
            
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                fontWeight: 600,
                marginBottom: 1,
                color: 'text.primary'
              }}
            >
              {project.title}
            </Typography>
            
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                marginBottom: 2,
                opacity: 0.8
              }}
            >
              {project.date}
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.primary',
                lineHeight: 1.6,
                opacity: 0.9
              }}
            >
              {project.description}
            </Typography>
          </Box>
        </DialogContent>
      </StyledDialog>
    </>
  )
}

export default ProjectCard;