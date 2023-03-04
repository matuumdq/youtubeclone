import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAIP"
import {ChannelCard, Videos} from "./"

const ChannelDetail = () => {

  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  }, [id])
  

  return (
    <Box minHeight='95vh'>
        <Box>
            <div
                style={{
                    background: 'linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(37,222,181,1) 72%, rgba(0,255,129,1) 100%)',
                    zIndex: 10,
                    height:'300px'
                }}
            />
                <ChannelCard channelDetail={channelDetail} marginTop='-120px'/>
        </Box>
        <Box display='flex' p='2'>
            <Box sx={{ mr: {sm: '100px', }}} />
                <Videos videos={videos} />

        </Box>
    </Box>
  )
}

export default ChannelDetail