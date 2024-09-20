import { Box, Stack, Typography } from "@mui/material"
import { Firestore } from "firebase/firestore"

const item = ['tomato', 'potato', 'carrot', 'ginger', 'radish', 'onion', 'garlic', 'cucumber', 'kale', 'spinach']

export default function Home() {
  return (
  <Box
    width="100vw"
    height="100vh"
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'} 
  >
    <Box
    border={'1px solid #333'}
    >
    <Box
      width={'800px'}
      height={'100px'}
      bgcolor={'#7393B3'}
      display={'flex'}
      justifyContent={'center'}
      alignContent={'center'}
    >
      <Typography
        variant="h2"
        color={'#333'}
        textAlign={'center'}
      >
      Pantry Items
      </Typography>
    </Box>
    <Stack
    width="800px"
    height="300px"
    spacing={2} 
    overflow={'auto'}
    >
      {item.map((i) => (
        <Box
        key={i}
        width="100%"
        height="300px"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'#f0f0f0'}
        >
          <Typography
          variant={'h2'}
          color={'#333'}
          textAlign={'center'}
          >
            {
            i.charAt(0).toUpperCase() + i.slice(1)
            }
          </Typography>
        </Box>
      ))}
    </Stack>
    </Box>
  </Box>
  )
}
