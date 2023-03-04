import { Box, Stack } from '@mui/material'
import React from 'react'
import { ChannelCard, VideoCard } from './'

const Videos = ({videos, direction}) => {

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {videos?.map((item, i)=> (
            <Box key={i} sx={{ m:{xs:'auto', md:'0'} }}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos