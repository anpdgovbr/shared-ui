import { Box, Container, Divider, Stack, Typography } from "@mui/material"
import { SharedUIComponentProps } from "src/types/SharedUIComponentProps.js"

interface GovBrItemProps extends SharedUIComponentProps{
  type: 'text' | 'button' | 'link' | 'radio' | 'checkbox' | 'content_button'
  label?: string
  image?: React.ReactNode
  sideIcon?: string
  asButton?: boolean
  sx?: GovBrItemProps

}

export const GovBRItem: React.FC<Readonly<GovBrItemProps>> = ({
  label,
  image,
  sideIcon,
  asButton,
  sx,
}) => {

 return( 
  <Box className="br-item" sx={{ml: 0, width: 'fit-content'}}>
    <Stack direction="row" spacing={0}>
      {image && <Box>{image}</Box>}
      <Typography sx={{ml: 1, mb: 1, direction:''}} >{label}</Typography>
    </Stack>
  </Box>
  )
}