import { Box, TextField, Button, Typography } from '@mui/material';

const CaptionForm = ({ 
  currentCaption, 
  setCurrentCaption, 
  startTime, 
  setStartTime, 
  endTime, 
  setEndTime, 
  onAddCaption 
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Add Caption
      </Typography>
      <TextField
        fullWidth
        label="Caption Text"
        value={currentCaption}
        onChange={(e) => setCurrentCaption(e.target.value)}
        sx={{ mb: 2, width: '100%' }}
      />
      <Box sx={{ display: 'flex', gap: 2, mb: 2, width: '100%' }}>
        <TextField
          fullWidth
          label="Start Time (seconds)"
          type="number"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          sx={{ flex: 1 }}
        />
        <TextField
          fullWidth
          label="End Time (seconds)"
          type="number"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          sx={{ flex: 1 }}
        />
      </Box>
      <Button
        fullWidth
        variant="contained"
        onClick={onAddCaption}
        disabled={!currentCaption || !startTime || !endTime}
      >
        Add Caption
      </Button>
    </Box>
  );
};

export default CaptionForm; 