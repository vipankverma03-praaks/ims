import React from 'react'
import PropTypes from 'prop-types'

import tw from 'tailwind.macro'
import styled from 'styled-components'

export default function ImgWrapper(props) {
  const Wrapper = styled.div`
    width: ${props.width};
    height: ${props.height};
    margin: ${props.margin};
    padding: ${props.padding};
    border-radius: ${props.borderRadius};
    background-color: transparent;
  `

  const Img = styled.img`
    ${tw`w-full`}
    height: ${props.height};
    border-radius: ${props.borderRadius};
  `
  return(
    <Wrapper>
      <Img src={props.img} alt={props.altText}/>
    </Wrapper>
  )

};

ImgWrapper.propTypes = {
  width: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  altText: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
}
