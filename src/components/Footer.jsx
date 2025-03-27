import { Box, Tooltip, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import FilePresentIcon from '@mui/icons-material/FilePresent';

const linkedinUrl = 'https://www.linkedin.com/in/kishan-vishwakarma-8191b521b/';
const githubUrl = 'https://github.com/Kishan1998v/VideoCaption';
const contactUrl = 'mailto:kishan.vishwakarma.1109@gmail.com';
const resumeUrl = 'https://drive.google.com/file/d/1o_bi8RIadDxlxDFRx-7DXU7uDG2zjwrR/view?usp=sharing';

const Elements = ({ title, url, Icon }) => {
  return (
    <Tooltip title={title} arrow placement="top">
      <a href={url} style={{ color: 'black' }}>
        <Icon />
      </a>
    </Tooltip>
  );
};

const Footer = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
      color: 'black',
    }}>
      <Typography variant="h6">
        kishan vishwakarma
        <br />
        <Elements title="LinkedIn" url={linkedinUrl} Icon={LinkedInIcon} />
        <Elements title="GitHubRepo" url={githubUrl} Icon={GitHubIcon} />
        <Elements title="Email" url={contactUrl} Icon={EmailIcon} />
        <Elements title="Resume" url={resumeUrl} Icon={FilePresentIcon} />
      </Typography>
    </Box>
  );
};

export default Footer;