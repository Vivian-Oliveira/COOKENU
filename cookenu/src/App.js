import React, { useState } from 'react'
import theme from './constants/theme';
import Router from './routes/Router'
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(
    token ? "logout" : "login"
  )

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
