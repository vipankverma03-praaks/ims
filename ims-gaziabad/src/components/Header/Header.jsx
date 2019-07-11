import React from 'react'
import styled, { keyframes } from 'styled-components'
import tw from 'tailwind.macro'
import TopBar from './TopBar'
import NavBar from './navBar'


export default function Header(props) {
  const HeaderWrapper = styled.header`
    ${tw`container w-full fixed `}
    top: 0;
    left: 0;
    z-index: 1001;
  `
  const fadeIn = keyframes`
  from {
    opacity: 0.71;
  }
  to {
       opacity: 1;
  }
`

  const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
       opacity: 0.71;
  }
`

  const NavBarOverlay = styled.div`
    ${tw`container absolute w-full h-16`}
    background-color: #0d266c;
    opacity: 0.71;
    z-index: -1;
    
    .full-nav{
      animation: 1s ease 0s normal forwards 1 ${fadeIn}
    }
    
    .transparent{
    animation: 1s ease 0s normal forwards 1 ${fadeOut}
    }
    
    @media screen and (min-width: 375px) and (max-width: 765px) {
      opacity: 1 !important;
    }
  `

  return (
    <HeaderWrapper>
      <TopBar id="top-bar-section" className="top-bar bg-white text-xl"/>
      <NavBarOverlay id="nav-bar-overlay" className="navBarOverlay" />
      <NavBar />
    </HeaderWrapper>
  )
}
