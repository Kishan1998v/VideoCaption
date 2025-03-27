import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CaptionList = ({ captions, onDeleteCaption }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Captions
      </Typography>
      <List>
        {captions.map((caption, index) => (
          <ListItem
            sx={{
              borderBottom: index !== captions.length - 1 ? '1px solid lightgray' : 'none', 
            }}
            key={index}
            secondaryAction={
              <IconButton 
                edge="end" 
                aria-label="delete"
                onClick={() => onDeleteCaption(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={caption.text}
              secondary={`${caption.start}s - ${caption.end}s`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CaptionList; 