import React from 'react'
import Slider from 'react-slick'

export default function Carousel(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplaySpeed: 1300,
  }

  return(
    <div>
      <Slider {...settings}>
        {props.child}
      </Slider>
    </div>
  )
}


