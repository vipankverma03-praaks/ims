import tw from 'tailwind.macro'
import styled from 'styled-components'
import React from 'react'

import SocialIcons from '../../elements/socialIcons'

const TopBarWrapper = styled.div`
  ${tw`container sm:hidden lg:flex-row lg:flex justify-between py-1`}
  background: #eabd00;
`

const Headline = styled.h4`
${tw ` inline px-4 font-medium font-robotoMedium`}
`

const Divider = styled.span`
  ${tw `pl-2 pr-2`}
  border-right: 2px solid #000;
`

const TopBar = () => (
  <>
    <TopBarWrapper>
      <div className="top-bar-text p-0">
        <Headline>
          29 Years of Legacy
          <Divider />
        </Headline>
        <Headline>
          NBA Accredited Branches (BT, CSE & ME)
          <Divider />
        </Headline>
        <Headline>NAAC Accredited with Grade 'A'</Headline>
      </div>
      <div className="top-bar-social-icons flex">
        <SocialIcons/>
      </div>
    </TopBarWrapper>
  </>
);

export default TopBar
