import { useState } from 'react'
import { Container, Box, TextField, Typography, Paper, Grid } from '@mui/material'
import VideoPlayer from './components/VideoPlayer'
import CaptionForm from './components/CaptionForm'
import CaptionList from './components/CaptionList'
import './App.css'

function App() {
  const [videoUrl, setVideoUrl] = useState('')
  const [captions, setCaptions] = useState([])
  const [currentCaption, setCurrentCaption] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const handleAddCaption = () => {
    if (currentCaption && startTime && endTime) {
      setCaptions([
        ...captions,
        {
          text: currentCaption,
          start: parseFloat(startTime),
          end: parseFloat(endTime)
        }
      ])
      setCurrentCaption('')
      setStartTime('')
      setEndTime('')
    }
  }

  const handleDeleteCaption = (index) => {
    setCaptions(captions.filter((_, i) => i !== index))
  }

  const handleProgress = (e) => {
    setCurrentTime(e.playedSeconds)
  }

  const getCurrentCaption = () => {
    return captions.find(
      caption => currentTime >= caption.start && currentTime <= caption.end
    )?.text || ''
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Video Caption Creator
        </Typography>
        <section className='main-section'>
          <div className='video-player-section'>
            <Paper sx={{ p: 2, mb: 2 }}>
              <TextField
                fullWidth
                label="Video URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Enter video URL"
                sx={{ mb: 2 }}
              />
              {videoUrl && (
                <VideoPlayer
                  url={videoUrl}
                  isPlaying={isPlaying}
                  onProgress={handleProgress}
                  currentCaption={getCurrentCaption()}
                />
              )}
            </Paper>
          </div>
          <div className='caption-form-section'>
            <Paper sx={{ p: 2, mb: 2 }}>
              <CaptionForm
                currentCaption={currentCaption}
                setCurrentCaption={setCurrentCaption}
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={setEndTime}
                onAddCaption={handleAddCaption}
              />
            </Paper>
            
            {captions.length > 0 && (
              <Paper sx={{ p: 2 }}>
                <CaptionList
                  captions={captions}
                  onDeleteCaption={handleDeleteCaption}
                />
              </Paper>
            )}
          </div>
        </section>  
      </Box>
    </Container>
  )
}

export default App
