import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const videos = ({videos}) => {

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item , idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.ChannelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default videos