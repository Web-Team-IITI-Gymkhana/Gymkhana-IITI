import React from 'react'
import { Box, Skeleton } from '@mui/material'
import '../public.css'

const SectionLoading = () => {
  return <Box gap={5} padding={3} className={'wrapper'} marginBottom={10} >
    <Skeleton variant="circular" width={250} height={250} animation='wave' />
    <Box>
      <Skeleton variant="text" animation='wave' />
      <Skeleton variant="rectangular" animation='wave' width={300} height={200} />
    </Box>
  </Box>
}

export default SectionLoading