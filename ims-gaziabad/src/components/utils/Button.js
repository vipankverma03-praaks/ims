import React from 'react'

import tw from 'tailwind.macro'
import styled from 'styled-components'

const Button = (props) => {

  const Btn = styled.button`
    ${tw`font-marion`}
    width: ${props.width};
    height:${props.height};
    color: ${props.color};
    padding: ${props.padding};
    border-radius: 19px;
    outline: none;
    border: 1px solid ${props.borderColor};
    background-color: white;
  `

  return(
    <Btn>{props.content}</Btn>
  )
}
export default Button
