import React from 'react'

import tw from 'tailwind.macro'
import styled from 'styled-components'

export default function Wrapper(props) {
  const Container = styled.section`
    ${tw`container w-full ${props.twClass}`}
    height: ${props.height};
    
  `
  return(
    <Container>
      {props.children}
    </Container>
  )
}


