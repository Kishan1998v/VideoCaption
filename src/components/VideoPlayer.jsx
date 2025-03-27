import { Box } from '@mui/material';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, isPlaying, onProgress, currentCaption }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playing={isPlaying}
        onProgress={onProgress}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      {currentCaption && (
        <div className="caption-display">
          {currentCaption}
        </div>
      )}
    </Box>
  );
};

export default VideoPlayer; 