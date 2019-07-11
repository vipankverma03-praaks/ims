import tw from 'tailwind.macro'
import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo/logo3x.png'
import Headings from '../../components/utils/Heading'

const Nav = styled.nav`
  ${tw`container w-full h-16 sm:flex-col flex lg:flex-row relative`}
  background-color: 'transparent';
  text-decoration: none;
`
const ListItem = styled.li`
  ${tw`container list-none sm:w-full sm:text-center lg:text-left sm:py-4 relative no-underline inline pl-8 `}
  
  @media screen and (min-width: 375px) and (max-width: 765px){
    background: #0d266c;
  }
`

const NavLink = styled.a`
  ${tw`font-robotoMedium sm:text-2xl lg:text-xl inline px-8 text-white`}
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  
  ::before{
   content:'';
   opacity: 0;
   position: absolute;
   top: 45px;
   left: 62px;
   width: 50px;
   height: 1px;
   background: #eabd00;
  }
  
  &:active::before, &:hover::before, &:visited::before{
  opacity: 1;
  }
`
const ListDiv = styled.div`
  ${tw `container flex self-center relative hidden lg:block pl-10 w-full`} 
  
  @media screen and (min-width: 375px) and (max-width: 765px){
  top: 3.6rem;
  }
`
const ListWrapper = styled.u`
  ${tw`sm:flex-col lg:flex-row flex content-between sm:justify-center w-full self-end`}
  text-decoration: none;
`

const LogoWrapper = styled.div`
  ${tw`container relative`}
  width: 5rem;
`

const MenuIconWrapper = styled.div`
  ${tw`md:visible py-3 sm:visible lg:hidden`}
  position: absolute;
  right: 0;
  width: fit-content;
  height: fit-content;
`

const MenuHamburgerIcon = styled.div`
  ${tw``} 
  background: white;
  margin: 6px 12px;
  width: 20px;
  height: 2px;
`

const ImageContainer = styled.img`
  ${tw`w-full absolute`}
  top: 18px;
  left: 18px;
  z-index: 1;
`
const ImageWrapper = styled.div`
    ${tw`overflow-hidden`}
    width: 22vw;
    height: 30vw;
    background: grey;
    
`

const DropDownWrapper = styled.div`
  ${tw`w-full absolute hidden`}
  top: 64px;
  height: fit-content;
  background: white;
  
  > div{
    padding-bottom: 4rem;
  }
  
`

const toggleDropDown = (name) =>{
  let el = document.getElementById(name);
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

const menuToggle = () =>{
  let navBarList = document.getElementById("nav-bar-list");

  if(navBarList.classList.contains('show-navigation')){
    navBarList.classList.add('hide-navigation');
    navBarList.classList.remove('show-navigation');
  }
  else{
    navBarList.classList.remove('hide-navigation');
    navBarList.classList.add('show-navigation');
  }
};

const NavBar = () => (

  <>
    <Nav>
      <LogoWrapper>
        <Link to="/Home">
          <ImageContainer src={logo} alt="logo" />
        </Link>
      </LogoWrapper>
      <MenuIconWrapper id="menu-icon" onClick={()=>{menuToggle()}}>
        <MenuHamburgerIcon />
        <MenuHamburgerIcon />
        <MenuHamburgerIcon />
      </MenuIconWrapper>
      <ListDiv id="nav-bar-list" className="nav-bar-list">
        <ListWrapper>
          <ListItem>
            <NavLink onClick={()=>{
              toggleDropDown('about-us');
            }}>About US</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Admissions</NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={()=>{
              toggleDropDown('academics');
            }}>Academics</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>R&D</NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={()=>{
              toggleDropDown('department');
            }}>Department</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>LIFE@IMSEC</NavLink>
          </ListItem>
        </ListWrapper>
      </ListDiv>
      <DropDownWrapper id="about-us">
        <div className="p-8  bg-grey-100 flex">
          <div className="left-dropDown mr-4">
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="1rem 2rem 0 0" width="16vw" fontWeight="400" content="IMS Society" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="1rem 2rem 0 0" fontWeight="400" width="16vw" content="Executive Council" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="16vw" content="Governing Council" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="16vw" content="The Chairman" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="16vw" content="The Director" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="16vw" content="Mission & Vision" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="16vw" content="Location" padding="1rem"/>
          </div>
          <div className="right-dropDown w-full flex justify-around">
            <ImageWrapper className="about-us-drop-down-image" />
            <ImageWrapper className="about-us-drop-down-image" />
            <ImageWrapper className="about-us-drop-down-image" />
          </div>
        </div>
      </DropDownWrapper>
      <DropDownWrapper id="academics">
        <div className="p-8  bg-grey-100 flex">
          <div className="left-dropDown mr-4">
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="1rem 2rem 0 0" width="16vw" fontWeight="400" content="Course" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="1rem 2rem 0 0" fontWeight="400" width="16vw" content="Faculty" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="16vw" content="Success Story" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="16vw" content="Academic" padding="1rem"/>
          </div>
          <div className="right-dropDown w-full flex justify-around">
            <ImageWrapper className="about-us-drop-down-image" />
            <ImageWrapper className="about-us-drop-down-image" />
            <ImageWrapper className="about-us-drop-down-image" />
          </div>
        </div>
      </DropDownWrapper>
      <DropDownWrapper id="department">
        <div className="p-8  bg-grey-100 flex">
          <div className="left-dropDown mr-8">
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="1rem 2rem 0 0" width="16vw" fontWeight="600" content="B.Tech" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="1rem 2rem 0 0" fontWeight="400" width="32vw" content="Department of Civil Engineering" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="32vw" content="Department of Computer Science & Engineering" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="32vw" content="Department of Electrical & Electronics Engineering" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="32vw" content="Department of Electrical & Communication Engineering" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="32vw" content="Department of Information Technology" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="32vw" content="Department of Mechanical Engineering" padding="1rem"/>
            <Headings font="Roboto-Regular" tag="h2" fontWeight="400" margin="1rem 2rem 0 0" color="#0d266c" width="32vw" content="Department of Applied Science & Humanity" padding="1rem"/>
          </div>
          <div className="right-dropDown px-8 w-full flex-col justify-between">
            <div className="flex-col">
              <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="1rem auto" width="100%" fontWeight="600" content="Post Graduate" padding="1rem 0"/>
              <Headings font="Roboto-Regular" tag="h2" color="#0d266c" margin="1rem auto" width="100%" fontWeight="400" content="Department of Master of Business Administration" padding="1rem 0"/>
            </div>
            <div className="flex justify-around">
              <ImageWrapper className="about-us-drop-down-image" />
              <ImageWrapper className="about-us-drop-down-image" />
            </div>
          </div>
        </div>
      </DropDownWrapper>
    </Nav>
  </>
);

export default NavBar
