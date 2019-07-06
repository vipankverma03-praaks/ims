import React from 'react'
import Slider from 'react-slick'
import ImgWrapper from '../components/utils/ImageWrapper'

import AlgoWorks from '../images/recruiters-logo/Algoworks.jpg'
import Ericsson from '../images/recruiters-logo/Ericsson Logo.png'
import Idemia from '../images/recruiters-logo/Idemia.png'
import Sopra from '../images/recruiters-logo/Sopra.png'
import Amazon from '../images/recruiters-logo/Amazon LOGO.png'
import Deloitte from '../images/recruiters-logo/Deloitte.jpg'
import Foresight from '../images/recruiters-logo/Foresight.png'
import Global from '../images/recruiters-logo/global.jpg'
import GlobalLogic from '../images/recruiters-logo/GlobalLogic.png'
import Headstrong from '../images/recruiters-logo/Headstrong.png'
import IBM from '../images/recruiters-logo/IBM.png'
import LogoPOLESTAR from '../images/recruiters-logo/LOGO POLESTAR.jpg'
import Mphasis from '../images/recruiters-logo/Mphasis.png'
import NTT from '../images/recruiters-logo/NTT.jpg'
import OpenText from '../images/recruiters-logo/OpenText.png'
import QA from '../images/recruiters-logo/Q A.png'
import TCS from '../images/recruiters-logo/TCS.jpg'
import ThinkLearn from '../images/recruiters-logo/Think & Learn.jpg'
import Vvdn from '../images/recruiters-logo/vvdn logo.jpg'
import UHG from '../images/recruiters-logo/UHG.png'
import Nagarro from '../images/recruiters-logo/Nagarro.png'
import Wipro from '../images/recruiters-logo/Wipro.png'

export default function MultipleItems(props) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 1300,
    autoplay: true,
    variableWidth: true,
  }

  return(
    <div>
      <Slider {...settings}>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={AlgoWorks} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Amazon} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Foresight} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div> <div className="carouselImgContainer">
        <ImgWrapper width="100%" img={Global} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
      </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Deloitte} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={GlobalLogic} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Headstrong} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={IBM} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={LogoPOLESTAR} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Mphasis} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={NTT} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={OpenText} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={QA} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={TCS} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={ThinkLearn} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Vvdn} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={UHG} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Nagarro} padding="0 1rem" margin="0 auto" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Ericsson}  padding="0 1rem" margin="0 auto" alt Text="algoWorks" twClass="w-full" />>
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Idemia} margin="0 auto" padding="0 1rem" altText="algoWorks" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Sopra} altText="algoWorks" margin="0 auto" padding="0 1rem" twClass="w-full" />
        </div>
        <div className="carouselImgContainer">
          <ImgWrapper width="100%" img={Wipro} altText="algoWorks" margin="0 auto" padding="0 1rem" twClass="w-full" />
        </div>
      </Slider>
    </div>
  )
}


