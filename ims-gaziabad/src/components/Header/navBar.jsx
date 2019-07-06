import tw from 'tailwind.macro'
import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo/logo3x.png'


const Nav = styled.nav`
  ${tw`container w-full h-16 flex relative`}
  background-color: 'transparent';
  text-decoration: none;
`
const ListItem = styled.li`
  ${tw`container list-none no-underline inline pl-8 `}
`

const NavLink = styled.a`
  ${tw`font-robotoMedium inline p-8 text-xl text-white`}
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
`
const ListDiv = styled.div`
  ${tw `container flex self-center pl-10 w-full`} 
`
const ListWrapper = styled.u`
  ${tw`flex content-between w-full self-end`}
  text-decoration: none;
`

const LogoWrapper = styled.div`
  ${tw`container relative`}
  width: 5rem;
`

const ImageContainer = styled.img`
  ${tw`w-full absolute`}
  top: 18px;
  left: 18px;
`


const NavBar = () => (
  <>
    <Nav>
      <LogoWrapper>
        <Link to="/Home">
          <ImageContainer src={logo} alt="logo" />
        </Link>
      </LogoWrapper>
      <ListDiv>
        <ListWrapper>
          <ListItem>
            <NavLink>About US</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Admissions</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Infrastructure</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Department</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Sports</NavLink>
          </ListItem>
        </ListWrapper>
      </ListDiv>
    </Nav>
  </>
);

export default NavBar
