import React from 'react'
import theme from './constants/theme';
import Router from './routes/Router'
import { ThemeProvider } from '@material-ui/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App;
