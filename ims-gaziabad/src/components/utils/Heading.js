import React from 'react'
import PropTypes from 'prop-types'

import tw from 'tailwind.macro'
import styled from 'styled-components'


export default function Heading (props) {

  const Wrapper = styled.div`
    ${tw`container relative`}
    width: ${props.width};
    display: ${props.display};
    &:after{
    position: absolute;
    top: ${props.underlineTop};
    left: 0;
    content: '';
    width: 70px;
    height: 2px;
    background-color: ${props.underlineColor};
    }

  `

  const Title = styled(props.tag)`
    ${tw`text-left`}
    font-family: '${props.font}';
    font-style: normal;
    font-size: ${props.size};
    color: ${props.color};
    font-weight: ${props.fontWeight};
    letter-spacing: normal;
    padding:${props.padding};
    margin: ${props.margin};
    
  `

  return (
    <Wrapper className={props.wrapperClassName}>
      <Title className={`${props.titleClassName} title`}>{props.content}</Title>
    </Wrapper>
  )
}

Heading.propTypes = {
  tag: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.width,
  size: PropTypes.string,
  margin: PropTypes.string,
  wrapperClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  fontWeight: PropTypes.string,
  display: PropTypes.string,
  font: PropTypes.string,
  underlineColor: PropTypes.string,
}

Heading.defaultProps = {
  tag: 'span',
  color: 'black',
  content: 'Test',
  padding: '0 0 0 0',
  width: '',
  size: '',
  font: 'Marion',
  margin: '0',
  fontWeight: 'bold',
  wrapperClassName: '',
  display: 'block',
  titleClassName: '',
  underlineColor: '',
}