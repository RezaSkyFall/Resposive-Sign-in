import { createTheme, CssBaseline, Stack, Theme, ThemeProvider } from '@mui/material'
import SignIn from './pages/sign-in'

function App() {
  
  const theme : Theme = createTheme({
    palette: {
      mode:'light',
      primary: {
        main:'#5429FF',
    },
    text:{
      primary:'#344054',
      secondary: '#667085'
    }
  },
  typography:{
    fontFamily:'Inter',

  }  ,
  shape:{
    borderRadius:10
  }
});

  return (
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <SignIn />

   </ThemeProvider>
  )
}

export default App
