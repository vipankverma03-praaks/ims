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
    
    @media screen and (min-width: 365px) and (max-width: 900px){
      width: ${props.mobileWidth};
    }
  `

  const Img = styled.img`
    ${tw`w-full`}
    height: ${props.height};
    border-radius: ${props.borderRadius};
  `
  return(
    <Wrapper className={props.wrapperClassName}>
      <Img src={props.img} alt={props.altText}/>
    </Wrapper>
  )

};

ImgWrapper.propTypes = {
  width: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  altText: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
}
