import React from 'react'
import tw from 'tailwind.macro'
import '../css/gobal.css'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Headings from '../components/utils/Heading'
import ImgWrapper from '../components/utils/ImageWrapper'
import MultipleItems from '../elements/carousel'

import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Images
import HeaderImg from '../images/header/header3x.jpg'
import PromotionsIcon from '../images/promotions.svg'
import AchievementIcon from '../images/achievement.svg'
import ExcellenceImg from '../images/center_for_excellence.jpg'
import Student from '../images/student4x.jpg'
import EmployeeIcon from '../images/employee.svg'
import ImsCollegeImg from '../images/ims-engineering-college-imsec-ghaziabad@3x.jpg'
import ImsCeleb2 from '../images/IMSEC CELEB@3x.jpg'
import ImsCeleb1 from '../images/ImsCelebrities3x.jpg'
import Events1 from '../images/events1.jpg'
import Events2 from '../images/events2.jpg'
import Gallery1 from '../images/gallery1.jpg'
import IMSLOGO from '../images/logo/logo3x.png'
import ContactIcon from '../images/contact-icon.svg'
import MailIcon from '../images/mail-icon.svg'
import Campus1 from '../images/campus-1.jpg'
import Campus2 from '../images/campus-2.jpg'
import Campus3 from '../images/campus-3.jpg'

import SocialIcons from '../elements/socialIcons'

import Layout from '../components/Layout'
import Button from '../components/utils/Button'
import MobileFooter from '../components/Footer/mobileFooter';

const PageRow = styled.div`
  ${tw`w-full h-auto relative`}
  top: 0;
  left: 0;
  
  @media screen and (min-width: 365px) and (max-width: 765px){
  .topHeader{
     width: 100vw;
    overflow:hidden;
    }
  }
`
const ImageWrapper = styled.div`
  ${tw`overflow-hidden w-full`}
  
`

const Image = styled.img`
  ${tw`w-full h-full sm:w-auto sm:h-auto`}
`

const SectionWrapper = styled.section`
  ${tw`container w-full pl-4 sm:static lg:absolute pr-4`}
  top: 16vw;
`
const ContentDiv = styled.div`
  ${tw`container w-full pl-6 pr-6 text-white`}
  
  @media screen and (min-width: 900px){
    .hide-on-large{
      display: none;
    }
  }
`

const Heading = styled.h1`
  ${tw`text-left font-marion text-6xl lg:inline hidden`}
`

const CardParagraph = styled.p`
  ${tw`text-left font-robotoLight font-semibold text-sm m-0 pt-2`}
`

const CardContent = styled.div`
  ${tw`container w-full text-white pl-4 pr-4`}
`

const CardRow = styled.div`
  ${tw`sm:flex lg:flex-row  sm:flex-col sm:justify-between w-full`}
`

const CardWrapper = styled.div`
  ${tw`container flex  sm:my-2 mr-4 p-4`}
  width:fit-content;
  background-color: #0d266c;
`

const EventImgWrapper = styled.img``

const Headline = styled.h3`
  ${tw` inline text-left pl-2 pr-2 font-robotoRegular`}
  color: #0d266c;
  width: 5rem;
  font-weight: 300;
  font-size: 1rem;
`
const Divider = styled.span`
  ${tw`pl-2 pr-2 sm:hidden lg:inline`}
  border-right: 2px solid #0d266c;
`
const HorizontalDivider = styled.div`
  background-color: #0d266c;
  width: 32rem;
  height: 4px;
  @media screen and (min-width: 1800px) {
    width: 74rem;
  }
  @media screen and (min-width: 1600px) {
    width: 74rem;
  }
  @media screen and (min-width: 1400px) and (max-width: 1600px) {
    width: 54rem;
  }
`

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: '0.71',
    }
  }

  getScreenDim = () =>{
    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    // To get the current window width for responsive design.
    return(width);
    console.log('width:'+ width);
    console.log('height:'+ height);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.getScreenDim);


  }

  handleScroll = () => {
    var el1 = document.getElementById('nav-bar-overlay');
    var el = document.getElementById('parallaxContainer');
    var d = el.offsetTop - window.pageYOffset;
    if (d < 100) {
      el1.classList.add('full-nav');
      el1.classList.remove('transparent-nav');
      this.setState({ opacity: '1' })
    } else {
      el1.classList.remove('full-nav');
      el1.classList.add('transparent-nav');
      this.setState({ opacity: '0.71' })
    }
  }

  render() {
    return (
      <>
        <Layout />
        <Header opacity={this.state.opacity} />
        <PageRow className="homePage">
          <div id="introImage"  className="topHeader w-full">
            <ImageWrapper>
              <Image src={HeaderImg} alt="headerImage" />
            </ImageWrapper>
            <SectionWrapper className="banner" id="introSection">
              <ContentDiv>
                <Heading>IMS Engineering College</Heading>
                <CardRow>
                  <CardWrapper>
                    <ImgWrapper margin="auto 0" img={PromotionsIcon} width="6rem" altText="Promotions icon" />
                    <CardContent>
                      <Headings
                        margin="auto 0"
                        width="20"
                        color="white"
                        font="font-rockwell"
                        padding="0"
                        tag="h2"
                        content="Apply Now"
                      />
                      <CardParagraph>Last Date to apply is 30th June.</CardParagraph>
                    </CardContent>
                  </CardWrapper>
                  <CardWrapper>
                    <ImgWrapper margin="auto 0" img={AchievementIcon} width="6rem" altText="achievement icon" />
                    <CardContent>
                      <Headings width="20" color="white" padding="0" tag="h2" content="Rankings" />
                      <CardParagraph>
                        3rd Ranked in Uttar Pradesh <br />
                        among Private Engineering College
                      </CardParagraph>
                    </CardContent>
                  </CardWrapper>
                  <CardWrapper>
                    <ImgWrapper margin="auto 0" img={EmployeeIcon} width="6rem" altText="Employee icon" />
                    <CardContent>
                      <Headings width="100%" color="white" tag="h2" padding="0" content="28 Years" />
                      <CardParagraph>
                        Lorem Ipsum is simply dummy text <br />
                        of the printing and typesetting industry.
                      </CardParagraph>
                    </CardContent>
                  </CardWrapper>
                </CardRow>
              </ContentDiv>
            </SectionWrapper>
          </div>
          <div id="parallaxContainer" className="secondIntroDiv">
            <SectionWrapper className="banner"  id="mobileIntroSection">
              <ContentDiv>
                <CardRow className="hide-on-large">
                  <CardWrapper>
                    <ImgWrapper margin="auto 0" img={PromotionsIcon} width="6rem" altText="Promotions icon" />
                    <CardContent>
                      <Headings
                        margin="auto 0"
                        width="20"
                        color="white"
                        font="font-rockwell"
                        padding="0"
                        tag="h2"
                        content="Apply Now"
                      />
                      <CardParagraph>Last Date to apply is 30th June.</CardParagraph>
                    </CardContent>
                  </CardWrapper>
                  <CardWrapper>
                    <ImgWrapper margin="auto 0" img={AchievementIcon} width="6rem" altText="achievement icon" />
                    <CardContent>
                      <Headings width="20" color="white" padding="0" tag="h2" content="Rankings" />
                      <CardParagraph>
                        3rd Ranked in Uttar Pradesh <br />
                        among Private Engineering College
                      </CardParagraph>
                    </CardContent>
                  </CardWrapper>
                  <CardWrapper>
                    <ImgWrapper margin="auto 0" img={EmployeeIcon} width="6rem" altText="Employee icon" />
                    <CardContent>
                      <Headings width="100%" color="white" tag="h2" padding="0" content="28 Years" />
                      <CardParagraph>
                        Lorem Ipsum is simply dummy text <br />
                        of the printing and typesetting industry.
                      </CardParagraph>
                    </CardContent>
                  </CardWrapper>
                </CardRow>
              </ContentDiv>
            </SectionWrapper>
            <div id="aboutUs" className="secondIntro w-full p-6 flex lg:flex-row sm:flex-col">
              <div className="w-full h-auto pl-4 pr-4">
                <Headings
                  tag="h1"
                  underlineColor="#eabe00"
                  font="marion"
                  underlineTop="36px"
                  color="#0d266c"
                  content="ABOUT US"
                />
                <p className="font-robotoRegular pr-4 leading-normal text-grey-para sm:text-lg text-lg break-all">
                  IMS Engineering College is one of the premier technical institutes in India. The College is NAAC
                  accredited with grade ‘A’ for maintaining world class quality in Education and Infrastructure.
                  Computer Science & Engineering & Mechanical Engineering Programs got NBA accreditation in 2016 for
                  three years, reflecting advancement and compatibility with latest technical trends. Ranked 4th Amongst
                  “Outstanding Engineering Colleges of Excellence” in India and Ranked 2nd in Uttar Pradesh by CSR-GHRDC
                  Engineering College Survey 2016. IMSEC is bestowed with “Excellence in Overall Performance” Award
                  jointly by AICTE & UP Govt. (National UP Education Award 2013).
                </p>
                <Button
                  color="#0d266c"
                  content="Know More"
                  padding="6px"
                  borderColor="#0d266c"
                  width="100px"
                  height="26px"
                />
              </div>
              <div className="lg:p-0 sm:my-4">
                <ImgWrapper img={ImsCollegeImg} width="30rem" mobileWidth="20rem" twClass="m-auto ml-2 mr-2" altText="Employee icon" />
              </div>
            </div>
            <section className="w-full flex lg:flex-row sm:flex-col bg-blue-site p-6">
              <div className="w-60 pr-6">
                <ImgWrapper
                  img={ExcellenceImg}
                  width="26rem"
                  mobileWidth="20rem"
                  borderRadius="5px"
                  twClass="m-auto ml-2 mr-2"
                  altText="achievement icon"
                />
              </div>
              <div id="excellenceSection" className="w-full flex">
                <div className="w-full h-auto px-4 sm:p-0 sm:my-6 lg:m-0">
                  <Headings
                    font="marion"
                    tag="h1"
                    color="#fff"
                    titleClassName="sm:text-xl"
                    underlineColor="#eabe00"
                    underlineTop="30px"
                    content="CENTRE FOR EXCELLENCE"
                  />
                  <p className="font-robotoRegular pr-4 leading-normal sm:text-sm sm:py-2  text-white lg:text-lg break-all">
                    The main aim of this Centre of Excellence is to bridge the gap between the expectation of modern
                    industries and the knowledge of our graduates. The centre will help to make the aspiring engineers
                    acquainted with the conceptual as well as practical knowledge of the Industrial latest technologies.
                  </p>
                  <div className="flex">
                    <div className=" mt-4 mb-4 pr-6">
                      <Headings
                        tag="h4"
                        color="#eabd00"
                        padding="10px 15px 10px 0"
                        content="ABB Industrial Automation Centre"
                      />
                      <Headings
                        tag="h4"
                        color="#eabd00"
                        padding="10px 15px 10px 0"
                        content="GeoSpatial Technology Centre"
                      />
                    </div>
                    <div className="mt-4 mb-4 pr-6">
                      <Headings tag="h4" color="#eabd00" padding="10px 15px 10px 0" content="Robotics and Automation" />
                      <Headings
                        tag="h4"
                        color="#eabd00"
                        padding="10px 15px 10px 0"
                        content="Texas Instruments Embedded Systems"
                      />
                    </div>
                  </div>
                  <Button
                    color="#0d266c"
                    content="Know More"
                    padding="6px"
                    borderColor="#0d266c"
                    width="100px"
                    height="26px"
                  />
                </div>
              </div>
            </section>
            <section id="placements-section" className="w-full placements flex flex-col bg-yellow-texture p-6">
              <div className="text-white">
                <Headings
                  font="Marion"
                  underlineColor="#0d266c"
                  underlineTop="30px"
                  tag="h1"
                  color="#0d266c"
                  content="PLACEMENT 2016-19"
                />
                <Headings
                  wrapperClassName="pt-4 pb-2"
                  tag="span"
                  color="#0d266c"
                  fontWeight="400"
                  font="Roboto-Regular"
                  content="Till 30th April 2019"
                />
              </div>
              <div className="flex lg:flex-row sm:flex-col lg:m-6 sm:m-0">
                <div className="w-fit-content w-1/3 sm:my-4 m-auto">
                  <Headings
                    wrapperClassName="centerText"
                    width="fit-content"
                    padding="0 10px"
                    margin="0 auto"
                    tag="span"
                    size="4rem"
                    color="#fff"
                    font="Roboto-Bold"
                    content="355"
                  />
                  <div className="font-sans text-lg text-center text-blue-site font-bold">Companies Visited</div>
                </div>
                <div className="w-fit-content sm:my-4 w-1/3 m-auto">
                  <Headings
                    wrapperClassName="centerText"
                    width="fit-content"
                    padding="0 10px"
                    tag="span"
                    margin="0 auto"
                    size="4rem"
                    font="Roboto-Bold"
                    color="#fff"
                    content="1708"
                  />
                  <div className="font-robotoBold text-lg text-center text-blue-site font-bold">Total Offers</div>
                </div>
                <div className="w-fit-content sm:my-4 w-1/3 m-auto">
                  <Headings
                    wrapperClassName="centerText"
                    width="fit-content"
                    padding="0 10px"
                    tag="span"
                    size="4rem"
                    color="#fff"
                    font="Roboto-Bold"
                    margin="0 auto"
                    content="1371"
                  />
                  <div className="font-robotoBold text-lg text-center text-blue-site font-bold">Total Placements</div>
                </div>
                <div className="w-fit-content sm:my-4 w-1/3 m-auto">
                  <Headings
                    wrapperClassName="centerText"
                    width="fit-content"
                    padding="0 10px"
                    tag="span"
                    margin="0 auto"
                    size="4rem"
                    font="Roboto-Bold"
                    color="#fff"
                    content="70.63%"
                  />
                  <div className="font-robotoBold text-lg text-blue-site font-bold text-center">
                    Placement Percentage
                  </div>
                </div>
              </div>
            </section>
            <section id="majorRecruiters" className="major-recruiters w-full bg-white p-6">
              <Headings
                underlineColor="#eac600"
                underlineTop="54px"
                padding="1rem 0"
                tag="h1"
                color="#0d266c"
                size="2rem"
                content="MAJOR RECRUITERS"
              />
              <div className="recruiterCarousel w-full p-8" id="carouselRecruiter">
                <MultipleItems width="7rem" />
              </div>
            </section>
            <section id="noticeSection" className="noticeContainer flex lg:flex-row sm:flex-col w-full">
              <div id="noticeSection" className="notice p-6 lg:w-1/2 sm:w-full">
                <Headings
                  underlineColor="#0d266c"
                  underlineTop="54px"
                  padding="1rem 0"
                  tag="h1"
                  color="#0d266c"
                  size="2rem"
                  content="NOTICE"
                />
                <div className="w-full notice-card-container">
                  <ul className="">
                    <li className="pb-4">
                      <div className="flex">
                        <div>
                          <Headings
                            padding="0"
                            tag="span"
                            color="#0d266c"
                            size="2rem"
                            font="Roboto-Black"
                            content="26"
                          />
                          <Headings
                            padding="1rem 0"
                            tag="span"
                            font="Roboto-Black"
                            color="#0d266c"
                            size="1rem"
                            content="JULY"
                          />
                        </div>
                        <div className="pl-6">
                          <Headings
                            wrapperClassName="pt-2 pb-2"
                            padding="0"
                            tag="span"
                            fontWeight="100"
                            color="#0d266c"
                            size=".9rem"
                            font="Roboto-Medium"
                            content="Importance notice for filling even sem regular & carry over examination form session 2018-19."
                          />
                        </div>
                      </div>
                    </li>
                    <li className="pb-4">
                      <div className="flex">
                        <div>
                          <Headings
                            padding="0"
                            tag="span"
                            color="#0d266c"
                            size="2rem"
                            font="Roboto-Black"
                            content="26"
                          />
                          <Headings
                            padding="1rem 0"
                            tag="span"
                            color="#0d266c"
                            size="1rem"
                            font="Roboto-Black"
                            content="JULY"
                          />
                        </div>
                        <div className="pl-6">
                          <Headings
                            wrapperClassName="pt-2 pb-2"
                            padding="0"
                            tag="span"
                            fontWeight="100"
                            color="#0d266c"
                            size=".9rem"
                            font="Roboto-Medium"
                            content="Challenge Evaluation Form of Odd semester 2018-19."
                          />
                        </div>
                      </div>
                    </li>
                    <li className="pb-4">
                      <div className="flex">
                        <div>
                          <Headings
                            padding="0"
                            tag="span"
                            color="#0d266c"
                            size="2rem"
                            font="Roboto-Black"
                            content="26"
                          />
                          <Headings
                            padding="1rem 0"
                            tag="span"
                            color="#0d266c"
                            size="1rem"
                            font="Roboto-Black"
                            content="JULY"
                          />
                        </div>
                        <div className="pl-6">
                          <Headings
                            wrapperClassName="pt-2 pb-2"
                            padding="0"
                            tag="span"
                            fontWeight="100"
                            color="#0d266c"
                            size=".9rem"
                            font="Roboto-Medium"
                            content="Notice Regarding Celebration of Scholarship distribution Day (From Samaj Kalyan) General & SC Students list Attach."
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="announcementSection" className="announcementContainer bg-blue-site p-6 lg:w-1/2 sm:w-full">
                <Headings
                  underlineColor="#eac600"
                  underlineTop="54px"
                  titleClassName=""
                  padding="1rem 0"
                  tag="h1"
                  color="#eac600"
                  size="2rem"
                  content="ANNOUNCEMENT"
                />
                <ul>
                  <li className="pb-8">
                    <Headings
                      padding="0"
                      tag="span"
                      font="Roboto-Medium"
                      fontWeight="300"
                      color="#eac600"
                      size=".9rem"
                      content="“Robotics Workshop” Under Centre of Excellence at IMSEC on 05/03/2019 to 09/03/2019."
                    />
                  </li>
                  <li className="pb-8">
                    <Headings
                      padding="0"
                      tag="span"
                      font="Roboto-Medium"
                      fontWeight="300"
                      color="#eac600"
                      size=".9rem"
                      content="Congratulations!!! to Dr. Meghna Singh (Assistant Professor in Department of Bio-Technology IMSEC Ghaziabad)."
                    />
                  </li>
                  <li className="pb-8">
                    <Headings
                      padding="0"
                      tag="span"
                      font="Roboto-Medium"
                      fontWeight="300"
                      color="#eac600"
                      size=".9rem"
                      content="Congratulations!!! Project titled “Post-Harvest Crop Management System Using IOT and AI” won overall first prize."
                    />
                  </li>
                </ul>
              </div>
            </section>
            <section id="events-section" className="events w-full p-6">
              <Headings
                underlineColor="#eac600"
                underlineTop="54px"
                padding="1rem 0"
                tag="h1"
                color="#0d266c"
                size="2rem"
                content="EVENTS"
              />
              <div className="w-full event-inner-container">
                <ul>
                  <li className="flex lg:flex-row sm:flex-col-reverse align sm:my-4 justify-between">
                    <div className="sm:flex sm:my-2 lg:my-0 ">
                      <div className="events-list-date">
                        <Headings
                          width="6rem"
                          padding="1rem 0"
                          tag="span"
                          color="#0d266c"
                          size="1.9rem"
                          font="Roboto-Black"
                          content="26-27"
                        />
                        <Headings
                          padding="1rem 0"
                          tag="span"
                          color="#eac600"
                          size="0.9rem"
                          font="Roboto-Black"
                          wrapperClassName="w-4"
                          content="JULY"
                        />
                      </div>
                      <div className="event-container ml-4 inline w-full">
                        <Headings
                          titleClassName="events-title"
                          padding="1rem 0"
                          tag="span"
                          color="#333333"
                          fontWeight="400"
                          font="Roboto-Medium"
                          size="1rem"
                          content="International Conference"
                        />
                        <Headings
                          wrapperClassName="pt-2"
                          tag="span"
                          color="#707070"
                          font="Roboto-Medium"
                          fontWeight="300"
                          size=".8rem"
                          content="8:00 AM - 5:00 PM @ IMS Engineering College, Ghaziabad"
                        />
                        <p className="leading-normal text-sm sm:hidden lg:block text-grey-para font-robotoRegular break-normal pr-8">
                          Non-Conventional Energy forms one of the pillars for delivering global sustainable environment
                          and the commitment to climate change targets. The Non-Conventional energy industry has matured;
                          with huge investments being ploughed into it globally. The scope for improvement in India’s
                          energy system is vast.
                        </p>
                      </div>
                    </div>
                    <div className="inline float-right sm:order-first events-image-wrapper">
                      <ImgWrapper img={Events1} width="14rem" mobileWidth="100%" twClass="m-auto ml-2 mr-2" altText="Events" />
                    </div>
                  </li>
                  <li className="flex lg:flex-row sm:flex-col-reverse sm:my-4 justify-between">
                    <div className='sm:flex sm:my-2 lg:my-0'>
                      <div className="events-list-date">
                        <Headings
                          width="6rem"
                          padding="1rem 0"
                          tag="span"
                          color="#0d266c"
                          font="Roboto-Black"
                          size="1.9rem"
                          content="21"
                        />
                        <Headings
                          padding="1rem 0"
                          tag="span"
                          color="#eac600"
                          size=".9rem"
                          font="Roboto-Black"
                          wrapperClassName="w-4"
                          content="SEPTEMBER"
                        />
                      </div>
                      <div className="event-container inline ml-4 w-full">
                        <Headings
                          titleClassName="events-title"
                          padding="1rem 0"
                          tag="span"
                          fontWeight="400"
                          color="#333333"
                          font="Roboto-Medium"
                          size="1rem"
                          content="National Level Sports Fest 'RANN 19' "
                        />
                        <Headings
                          wrapperClassName="pt-2"
                          tag="span"
                          color="#707070"
                          font="Roboto-Medium"
                          fontWeight="300"
                          size=".8rem"
                          content="8:00 AM - 5:00 PM @ IMS Engineering College, Ghaziabad"
                        />
                        <p className="leading-normal text-sm sm:hidden lg:block text-grey-para font-robotoRegular break-normal pr-8">
                          IMS Engineering College Ghaziabad feel proud of our students for winning 1st position in Table
                          Tennis (Men’s) at National Level Sports Fest “RANN 19” held on 02-04 Mar 2019 at Krishna
                          Institute of Engineering & Technology (KIET).
                        </p>
                      </div>
                    </div>
                    <div className=" inline float-right">
                      <ImgWrapper img={Events2} width="14rem" mobileWidth="100%" twClass="m-auto ml-2 mr-2" altText="Employee icon" />
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section id="Ims-institutions" className="w-full sm:hidden lg:fle-col bg-blue-site p-6">
              <Headings
                underlineColor="#eac600"
                underlineTop="70px"
                padding="2rem 0"
                tag="h1"
                color="#fff"
                size="2rem"
                content="IMS GROUP OF INSTITUTIONS"
              />
              <div className="flex-row flex w-full">
                <div className="cardContainer w-1/3 bg-white m-4">
                  <ImgWrapper img={Campus1} width="100%" twClass="m-auto ml-2 mr-2" altText="Employee icon" />
                  <div className="bg-white w-full p-6">
                    <Headings
                      padding="1rem 0"
                      tag="h1"
                      color="#020202"
                      size="1.3rem"
                      font="Roboto-Medium"
                      fontWeight="500"
                      content="Campus - I"
                    />
                    <Headings
                      padding="0"
                      tag="h1"
                      color="#020202"
                      size="1.3rem"
                      font="Roboto-Medium"
                      fontWeight="500"
                      content="Institute of Management Studies"
                    />
                    <p className="font-robotoRegular pb-6 leading-normal  text-grey-100 text-sm break-all">
                      IMS Ghaziabad has earned a reputation of academic excellence in providing practical and quality
                      academic programmes in the field of Management Sciences,
                    </p>
                    <Button
                      color="#0d266c"
                      content="Know More"
                      padding="6px"
                      borderColor="#0d266c"
                      width="100px"
                      height="26px"
                    />
                  </div>
                </div>
                <div className="cardContainer w-1/3 bg-white m-4">
                  <ImgWrapper img={Campus2} width="100%" twClass="m-auto ml-2 mr-2" altText="Employee icon" />
                  <div className="bg-white w-full p-6">
                    <Headings
                      padding="1rem 0"
                      tag="h1"
                      color="#020202"
                      size="1.3rem"
                      font="Roboto-Medium"
                      fontWeight="500"
                      content="Campus - II"
                    />
                    <Headings
                      padding="0"
                      tag="h1"
                      color="#020202"
                      size="1.3rem"
                      font="Roboto-Medium"
                      fontWeight="500"
                      content="IMS Engineering College"
                    />
                    <p className="font-robotoRegular pb-6 leading-normal  text-grey-100 text-sm break-all">
                      IMSEC Ghaziabad is one of the top-notch Engineering college in North India, providing technical
                      education
                    </p>
                    <Button
                      color="#0d266c"
                      content="Know More"
                      padding="6px"
                      borderColor="#0d266c"
                      width="100px"
                      height="26px"
                    />
                  </div>
                </div>
                <div className="cardContainer w-1/3 bg-white m-4">
                  <ImgWrapper img={Campus3} width="100%" twClass="m-auto ml-2 mr-2" altText="Employee icon" />
                  <div className="bg-white w-full p-6">
                    <Headings
                      padding="1rem 0"
                      tag="h1"
                      color="#020202"
                      size="1.3rem"
                      font="Roboto-Medium"
                      fontWeight="500"
                      content="Campus - III"
                    />
                    <Headings
                      padding="0"
                      tag="h1"
                      color="#020202"
                      size="1.3rem"
                      font="Roboto-Medium"
                      fontWeight="500"
                      content="IMS Ghaziabad "
                    />
                    <p className="font-robotoRegular pb-6 leading-normal  text-grey-100 text-sm break-all">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                    <Button
                      color="#0d266c"
                      content="Know More"
                      padding="6px"
                      borderColor="#0d266c"
                      width="100px"
                      height="26px"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="studentsSpeakSection"
              className="studentsSpeak w-full relative lg:p-6 sm:p-0 flex flex-col"
            >
              <Headings
                wrapperClassName="sm:m-4 lg:my-0"
                underlineColor="#0d266c"
                underlineTop="40px"
                width="20"
                color="#0d266c"
                padding="0.5rem 0 0 0"
                tag="h2"
                content="STUDENTS SPEAK"
              />
              <div className="w-full lg:p-16 sm:p-0">
                <Headings
                  wrapperClassName="qoutesHeading"
                  titleClassName="lg:text-xl text-lg"
                  width="20"
                  color="black"
                  font="RobotoRegular"
                  padding="0"
                  tag="h4"
                  margin="0 5rem"
                  content="IMSEC played a vital role in preparing me for my career. Being exposed to such internationalism at University really helped me to understand people, which is an essential part of politics. "
                />
              </div>
              <div className="w-full flex">
                <ImgWrapper
                  img={Student}
                  borderRadius="50%"
                  margin="auto"
                  width="5rem"
                  twClass="m-auto ml-2 mr-2"
                  altText="Student"
                />
              </div>
              <div className="mx-auto">
                <Headings width="20" color="black" padding="0" tag="h4" margin="0 5rem" content="Anand Prakash" />
              </div>
              <div className="mx-auto">
                <Headings
                  width="20"
                  color="black"
                  fontWeight="500"
                  padding="0"
                  tag="h4"
                  margin="0 5rem"
                  content="Biotechnology (Batch 2009-13)"
                />
              </div>
            </section>
            <section id="events-gallery-section" className="w-full sm:hidden lg:block events-gallery p-8">
              <Headings
                underlineColor="#eac600"
                underlineTop="70px"
                padding="2rem 0"
                tag="h1"
                color="#0d266c"
                titleClassName="sm:text-lg"
                size="2rem"
                content="EVENTS GALLERY" />
              <div className="flex events-gallery-container pb-4">
                <div id="event-image-container-1" className="event-image-container-1 overflow-hidden h-full bg-yellow">
                  <EventImgWrapper src={Gallery1} altText="Employee icon" />
                </div>
                <div id="event-image-container-2" className="h-full bg-grey event-image-container-2">
                  <div id="event-image-inner-2-1" className="event-image-inner-2-1  overflow-hidden w-full bg-purple">
                    <EventImgWrapper src={Gallery1} altText="Employee icon" />
                  </div>
                  <div id="event-image-inner-2-2" className="event-image-inner-2-2 w-full overflow-hidden bg-blue">
                    <EventImgWrapper src={Gallery1} altText="Employee icon" />
                  </div>
                </div>
                <div id="event-image-container-3" className="h-full bg-orange event-image-container-3">
                  <div id="event-image-inner-3-1" className="event-image-inner-3-1  w-full overflow-hidden bg-blue">
                    <EventImgWrapper src={Gallery1} altText="Employee icon" />
                  </div>
                  <div id="event-image-inner-3-2" className="event-image-inner-3-2 w-full overflow-hidden bg-purple">
                    <EventImgWrapper src={Gallery1} altText="Employee icon" />
                  </div>
                </div>
                <div id="event-image-container-4" className="h-full bg-green event-image-container-4">
                  <div id="event-image-inner-4-1" className="event-image-inner-4-1 flex w-full bg-yellow">
                    <div
                      id="event-image-inner-inside-1"
                      className="event-image-inner-inside-1 inline overflow-hidden  h-full bg-yellow"
                    >
                      <EventImgWrapper src={Gallery1} altText="Employee icon" />
                    </div>
                    <div
                      id="event-image-inner-inside-2"
                      className="event-image-inner-inside-2 inline h-full overflow-hidden bg-red"
                    >
                      <EventImgWrapper src={Gallery1} altText="Employee icon" />
                    </div>
                    <div
                      id="event-image-inner-inside-3"
                      className="event-image-inner-inside-3 inline h-full overflow-hidden bg-grey"
                    >
                      <EventImgWrapper src={Gallery1} altText="Employee icon" />
                    </div>
                  </div>
                  <div id="event-image-inner-4-2" className="event-image-inner-4-2 flex w-full bg-green">
                    <div
                      id="event-image-inner-inside-4"
                      className="event-image-inner-inside-4 inline  h-full overflow-hidden red"
                    >
                      <EventImgWrapper src={Gallery1} altText="Employee icon" />
                    </div>
                    <div
                      id="event-image-inner-inside-5"
                      className="event-image-inner-inside-5 inline h-full overflow-hidden bg-yellow"
                    >
                      <EventImgWrapper src={Gallery1} altText="Employee icon" />
                    </div>
                    <div
                      id="event-image-inner-inside-6"
                      className="event-image-inner-inside-6 inline h-full overflow-hidden bg-purple"
                    >
                      <EventImgWrapper src={Gallery1} altText="Employee icon" />
                    </div>
                  </div>
                </div>
              </div>
              <Button
                color="#0d266c"
                content="View All"
                padding="6px"
                borderColor="#0d266c"
                width="100px"
                height="26px"
              />
            </section>
            <section id="celebritiesSection" className="w-full celebrities p-6">
              <Headings
                tag="h1"
                color="#0d266c"
                underlineColor="#0d266c"
                underlineTop="54px"
                padding="1rem 0"
                size="2rem"
                content="CELEBRITIES @ IMSEC"
              />
              <div className="flex lg:flex-row sm:flex-col pt-4 pb-4">
                <div id="celebretiesIms" className="w-full">
                  <ImgWrapper
                    img={ImsCeleb2}
                    borderRadius="5px"
                    width="40vw"
                    mobileWidth="100%"
                    twClass="m-auto ml-2 mr-2"
                    altText="Employee icon"
                  />
                </div>
                <div className="w-full">
                  <ImgWrapper
                    wrapperClassName="sm:my-4 lg:my-0"
                    img={ImsCeleb1}
                    borderRadius="5px"
                    width="40vw"
                    mobileWidth="100%"
                    twClass="m-auto ml-2 mr-2"
                    altText="Employee icon"
                  />
                </div>
              </div>
              <Button
                color="#0d266c"
                content="View All"
                padding="6px"
                borderColor="#0d266c"
                width="100px"
                height="26px"
              />
            </section>
            { this.getScreenDim() >900 ?
            <footer className="w-full bg-grey-footer">
              <div id="courses" className="w-full p-6">
                <div className="w-full mt-2 mb-6 md:pr-6 lg:pr-2 flex-row flex-wrap flex">
                  <div className="fit-content my-2">
                    <Headline>
                      Master of Business Administration
                      <Divider />
                    </Headline>
                  </div>
                  <div className="fit-content my-2">
                    <Headline>
                      Civil Engineering
                      <Divider />
                    </Headline>
                  </div>
                  <div className="fit-content my-2">
                    <Headline>
                      Computer Science & Engineering
                      <Divider />
                    </Headline>
                  </div>
                  <div className="fit-content my-2">
                    <Headline>
                      Electrical & Electronics Engineering
                      <Divider />
                    </Headline>
                  </div>
                  <div className="fit-content my-2">
                    <Headline>
                      Electronics & Communication Engineering
                      <Divider />
                    </Headline>
                  </div>
                  <div className="fit-content my-2">
                    <Headline>
                      Information Technology
                      <Divider />
                    </Headline>
                  </div>
                  <div className="fit-content my-2">
                    <Headline>
                      Mechanical Engineering
                      <Divider />
                    </Headline>
                  </div>
                  <div className="fit-content my-2">
                    <Headline>
                      Biotechnology
                      <Divider />
                    </Headline>
                  </div>
                </div>
              </div>
              <div className="w-full flex footer-btm-row">
                <div className="footer-logo-container lg:block">
                  <div className="footer-logo px-6  flex">
                    <ImgWrapper img={IMSLOGO} width="4rem" twClass="m-auto ml-2 mr-2" altText="IMS LOGO" />
                    <Headings
                      wrapperClassName="flex my-auto mx-0"
                      width="20"
                      color="#0d266c"
                      fontWeight="500"
                      padding="0"
                      tag="h3"
                      margin="0 1rem"
                      content="IMSEC"
                    />
                  </div>
                  <div className="mx-auto footer-contact-section">
                    <div className="flex">
                      <ImgWrapper
                        img={ContactIcon}
                        margin="auto 0"
                        width="6px"
                        twClass="m-auto ml-2 mr-2"
                        altText="Contact Icon"
                      />
                      <Headings
                        width="20"
                        color="#0d266c"
                        fontWeight="400"
                        font="Roboto-Regular"
                        padding="0"
                        tag="h3"
                        margin="0 1.5rem"
                        content="18001028393"
                      />
                    </div>
                    <div className="flex py-4">
                      <ImgWrapper
                        img={MailIcon}
                        margin="auto 0"
                        width="18px"
                        twClass="m-auto ml-2 mr-2"
                        altText="Mail Icon"
                      />
                      <Headings
                        width="20"
                        color="#0d266c"
                        font="Roboto-Regular"
                        fontWeight="400"
                        padding="0"
                        tag="h3"
                        margin="0 1rem"
                        content="enquiry@imsec.ac.in"
                      />
                    </div>
                  </div>
                </div>
                <div className="footer-links-container flex-col">
                  <div className="footer-quickLinks flex">
                      <Headings
                        wrapperClassName="my-auto"
                        width="20"
                        color="#0d266c"
                        fontWeight="600"
                        padding="0 1rem"
                        tag="h3"
                        margin="0 0 0 1rem"
                        content="Quick Links" />
                    <div className="lg:flex m-auto">
                      <HorizontalDivider />
                    </div>
                    <Headings
                      wrapperClassName="float-right"
                      width="20"
                      color="#0d266c"
                      fontWeight="600"
                      padding="0 1rem"
                      tag="h3"
                      margin="0"
                      content="Guidelines for Anti Ragging"
                    />
                  </div>
                  <div className="footer-links flex flex-row justify-between">
                      <div className="footer-link-list">
                        <ul>
                          <li>
                            <Headings
                              width="20"
                              color="#0d266c"
                              font="Roboto-Regular"
                              fontWeight="500"
                              padding="0.5rem 1rem"
                              tag="h4"
                              margin="0 1rem"
                              content="About IMS Society"
                            />
                          </li>
                          <li>
                            <Headings
                              width="20"
                              color="#0d266c"
                              font="Roboto-Regular"
                              fontWeight="500"
                              padding="0.5rem 1rem"
                              tag="h4"
                              margin="0 1rem"
                              content="Chairman’s Message"
                            />
                          </li>
                          <li>
                            <Headings
                              width="20"
                              color="#0d266c"
                              font="Roboto-Regular"
                              fontWeight="500"
                              padding="0.5rem 1rem"
                              tag="h4"
                              margin="0 1rem"
                              content="Director’s Message"
                            />
                          </li>
                          <li>
                            <Headings
                              width="20"
                              color="#0d266c"
                              font="Roboto-Regular"
                              fontWeight="500"
                              padding="0.5rem 1rem"
                              tag="h4"
                              margin="0 1rem"
                              content="Photo Gallery"
                            />
                          </li>
                          <li>
                            <Headings
                              width="20"
                              color="#0d266c"
                              font="Roboto-Regular"
                              fontWeight="500"
                              padding="0.5rem 1rem"
                              tag="h4"
                              margin="0 1rem"
                              content="Online Payment"
                            />
                          </li>
                          <li>
                            <Headings
                              width="20"
                              color="#0d266c"
                              font="Roboto-Regular"
                              fontWeight="500"
                              padding="0.5rem 1rem"
                              tag="h4"
                              margin="0 1rem"
                              content="Mandatory Disclosure"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="footer-link-list">
                      <ul>
                        <li>
                          <Headings
                            width="20"
                            color="#0d266c"
                            font="Roboto-Regular"
                            fontWeight="500"
                            padding="0.5rem 1rem"
                            tag="h4"
                            margin="0 1rem"
                            content="Balance Sheet & Audit Report"
                          />
                        </li>
                        <li>
                          <Headings
                            width="20"
                            color="#0d266c"
                            font="Roboto-Regular"
                            fontWeight="500"
                            padding="0.5rem 1rem"
                            tag="h4"
                            margin="0 1rem"
                            content="Media"
                          />
                        </li>
                        <li>
                          <Headings
                            width="20"
                            color="#0d266c"
                            font="Roboto-Regular"
                            fontWeight="500"
                            padding="0.5rem 1rem"
                            tag="h4"
                            margin="0 1rem"
                            content="Vivechan International Journal"
                          />
                        </li>
                        <li>
                          <Headings
                            width="20"
                            color="#0d266c"
                            font="Roboto-Regular"
                            fontWeight="500"
                            padding="0.5rem 1rem"
                            tag="h4"
                            margin="0 1rem"
                            content="Byte (E-magazine)"
                          />
                        </li>
                        <li>
                          <Headings
                            width="20"
                            color="#0d266c"
                            font="Roboto-Regular"
                            fontWeight="500"
                            padding="0.5rem 1rem"
                            tag="h4"
                            margin="0 1rem"
                            content="Library"
                          />
                        </li>
                        <li>
                          <Headings
                            width="20"
                            color="#0d266c"
                            font="Roboto-Regular"
                            fontWeight="500"
                            padding="0.5rem 1rem"
                            tag="h4"
                            margin="0 1rem"
                            content="Grievance"
                          />
                        </li>
                      </ul>
                    </div>
                      <div className="footer-link-list">
                          <ul>
                            <li>
                              <Headings
                                width="20"
                                color="#0d266c"
                                font="Roboto-Regular"
                                fontWeight="500"
                                padding="0.5rem 1rem"
                                tag="h4"
                                margin="0 1rem"
                                content="Anti Ragging"
                              />
                            </li>
                            <li>
                              <Headings
                                width="20"
                                color="#0d266c"
                                font="Roboto-Regular"
                                fontWeight="500"
                                padding="0.5rem 1rem"
                                tag="h4"
                                margin="0 1rem"
                                content="Ruling of Supreme Court"
                              />
                            </li>
                            <li>
                              <Headings
                                width="20"
                                color="#0d266c"
                                font="Roboto-Regular"
                                fontWeight="500"
                                padding="0.5rem 1rem"
                                tag="h4"
                                margin="0 1rem"
                                content="Order of Supreme Court"
                              />
                            </li>
                            <li>
                              <Headings
                                width="20"
                                color="#0d266c"
                                font="Roboto-Regular"
                                fontWeight="500"
                                padding="0.5rem 1rem"
                                tag="h4"
                                margin="0 1rem"
                                content="UGC Regulation"
                              />
                            </li>
                            <li>
                              <Headings
                                width="20"
                                color="#0d266c"
                                font="Roboto-Regular"
                                fontWeight="500"
                                padding="0.5rem 1rem"
                                tag="h4"
                                margin="0 1rem"
                                content="AICTE Notification"
                              />
                            </li>
                            <li>
                              <Headings
                                width="20"
                                color="#0d266c"
                                font="Roboto-Regular"
                                fontWeight="500"
                                padding="0.5rem 1rem"
                                tag="h4"
                                margin="0 1rem"
                                content="NIRF-2019"
                              />
                            </li>
                          </ul>
                        </div>
                    </div>
                </div>
              </div>
              <div className="bottom-bar justify-between px-6 py-2 flex bg-grey-footer-btm">
                <div className="bottom-bar-left my-auto mx-0">
                  <Headline>Privacy</Headline>
                  <Headline>Term</Headline>
                  <Headline>Sitemap</Headline>
                  <Headline>Purchase</Headline>
                </div>
                <div className="bottom-footer-social-icons">
                  <SocialIcons />
                </div>
              </div>
            </footer>  :
              <MobileFooter/> }
          </div>
        </PageRow>
      </>
    )
  }
}
