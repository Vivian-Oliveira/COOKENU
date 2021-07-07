import React from 'react'
import logo from '../../assets/logo.png'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = () => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <SignUpForm />
    </ScreenContainer>
  )
}

export default SignUpPage
