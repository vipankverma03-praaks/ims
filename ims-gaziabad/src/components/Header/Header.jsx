import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import TopBar from './TopBar'
import NavBar from './navBar'

export default function Header(props) {
  const HeaderWrapper = styled.header`
    ${tw`container w-full fixed`}
    top: 0;
    left: 0;
    z-index: 1001;
  `
  const NavBarOverlay = styled.div`
    ${tw`container absolute w-full h-16`}
    background-color: #0d266c;
    opacity: ${props.opacity};
    z-index: -1;
  `

  return (
    <HeaderWrapper>
      <TopBar />
      <NavBarOverlay className="navBarOverlay" />
      <NavBar />
    </HeaderWrapper>
  )
}
