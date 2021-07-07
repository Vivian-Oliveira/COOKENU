import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled'
import Button from '@material-ui/core/Button';
import { goToRecipesList, goToLogin } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

export const Header = () => {
  const history = useHistory()

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToLogin(history)} color="inherit">Cookenu</Button>
        <Button onClick={() => goToRecipesList(history)} color="inherit">Login</Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header
