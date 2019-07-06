import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

// Icons


import Youtube from '../images/Youtube.svg'
import Wordpress from '../images/Wordress icon.svg'
import LinkedIn from '../images/Linked In .svg'
import Instagram from '../images/Instagram Icon.svg'
import Twitter from '../images/Twitter Icon.svg'
import Facebook from '../images/Facebook Icon.svg'


export default function SocialIcons(props) {
  const IconWrapper = styled.div`
    margin: auto 0;
    width: 2rem;
    background: transparent;
  `
  const Icon = styled.img`
    ${tw`w-full p-1`}
    cursor: pointer;
  `

  const IconContainer = styled.a`
    cursor: pointer;
  `

  return(
    <div className="icon-container flex px-6">
      <IconWrapper>
      <IconContainer>
          <Icon src={Facebook} />
      </IconContainer>
      </IconWrapper>
      <IconWrapper>
        <IconContainer>
          <Icon src={Twitter} />
        </IconContainer>
      </IconWrapper>
      <IconWrapper>
        <IconContainer>
          <Icon src={Instagram} />
        </IconContainer>
      </IconWrapper>
      <IconWrapper>
        <IconContainer>
          <Icon src={Youtube} />
        </IconContainer>
      </IconWrapper>
      <IconWrapper>
        <IconContainer>
          <Icon src={LinkedIn} />
        </IconContainer>
      </IconWrapper>
      <IconWrapper>
        <IconContainer>
          <Icon src={Wordpress} />
        </IconContainer>
      </IconWrapper>
    </div>
  )

}