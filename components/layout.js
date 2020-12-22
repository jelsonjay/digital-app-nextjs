import React from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components'

const Title = styled.h1`
color: ${(props) => props.theme.colors.primary};
`


const Layout = ({children, title}) =>{
  return(
    
    <div>
    <NavBar />
    <Title>{title}</Title>
    {children}
    </div>
  )
}

export default Layout