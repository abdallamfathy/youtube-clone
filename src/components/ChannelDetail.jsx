import { CheckCircle } from '@mui/icons-material'
import { CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {

  const { id } = useParams()
  const [channelDetail , setChannelDetail] = (null)
  const [videos , setVideos] = ([])


  // console.log(channelDetail);

  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
    
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  },[id])

  return (
    <Box>
      {id}
    </Box>
  )
}

export default ChannelDetail