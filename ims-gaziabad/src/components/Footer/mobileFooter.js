import React from 'react'
import Headings from '../utils/Heading';
import SocialIcons from '../../elements/socialIcons';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export default function MobileFooter(props) {

  const footerToggle = (id) =>{
    let el = document.getElementById(id);
    if(el.classList.contains('show-links')){
      el.classList.add('hide-links');
      el.classList.remove('show-links');
    }
    else{
      el.classList.add('show-links');
      el.classList.remove('hide-links');
    }
  }

  const AddBtn = styled.button`
  ${tw`outline-none text-xl border-transparent font-extrabold rounded-full`}
  background: #253b79;
  color: #fff;
  width: 6vw;
  height: 6vw;
  padding: 0;
  cursor: pointer;
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
  const Headline = styled.h3`
  ${tw` inline text-left pl-2 pr-2 font-robotoRegular`}
  color: #0d266c;
  width: 5rem;
  font-weight: 300;
  font-size: 1rem;
`

  return(
    <footer className="w-full bg-grey-footer">
      <div className="sm:flex justify-between">
        <Headings
          wrapperClassName="my-auto"
          width="20"
          color="#0d266c"
          fontWeight="600"
          padding="0 1rem"
          tag="h3"
          margin="1rem 0 1rem 1rem"
          content="Courses"
        />
        <div className="w-8 my-auto mx-8">
          <AddBtn onClick={()=>{footerToggle('courses')}}>+</AddBtn>
        </div>
      </div>
      <div id="courses" className="w-full p-2 hidden flex ml-4">
        <div className="w-full mt-2 mb-6 md:pr-6 lg:pr-2 sm:flex-col lg:flex-row lg:flex-wrap flex">
          <div className="fit-content my-2">
            <Headline>
              Master of Business Administration
            </Headline>
          </div>
          <div className="fit-content my-2">
            <Headline>
              Civil Engineering
            </Headline>
          </div>
          <div className="fit-content my-2">
            <Headline>
              Computer Science & Engineering
            </Headline>
          </div>
          <div className="fit-content my-2">
            <Headline>
              Electrical & Electronics Engineering
            </Headline>
          </div>
          <div className="fit-content my-2">
            <Headline>
              Electronics & Communication Engineering
            </Headline>
          </div>
          <div className="fit-content my-2">
            <Headline>
              Information Technology
            </Headline>
          </div>
          <div className="fit-content my-2">
            <Headline>
              Mechanical Engineering
            </Headline>
          </div>
          <div className="fit-content my-2">
            <Headline>
              Biotechnology
            </Headline>
          </div>
        </div>
      </div>
      <div className="w-full flex footer-btm-row">
        <div className="footer-links-container flex-col">
          <div className="footer-quickLinks flex">
            <div className="sm:flex-row sm:my-2 sm:w-full sm:flex lg:block sm:justify-between">
              <Headings
                wrapperClassName="my-auto"
                width="20"
                color="#0d266c"
                fontWeight="600"
                padding="0 1rem"
                tag="h3"
                margin="0 0 0 1rem"
                content="Quick Links" />
              <div className="w-8 my-auto mx-8">
                <AddBtn onClick={()=>{footerToggle('quickLinks')}}>+</AddBtn>
              </div>
            </div>
          </div>
          <div className="footer-links lg:flex-row sm:flex-col justify-between">
            <div id="quickLinks" className="hidden">
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
            </div>
            <div className="sm:flex-row  sm:flex sm:my-2 lg:block sm:justify-between">
              <Headings
                wrapperClassName="my-auto sm:ml-4"
                width="20"
                color="#0d266c"
                fontWeight="600"
                padding="0 1rem"
                tag="h3"
                margin="0 0 0 0"
                content="Guidelines for Anti Ragging"
              />
              <div className="w-8 my-auto mx-8">
                <AddBtn onClick={()=>{footerToggle('guidelines')}}>+</AddBtn>
              </div>
            </div>
            <div id="guidelines" className=" hidden footer-link-list">
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
      <div id="connect-with-us" className="social-icons">
        <div className="sm:flex-row sm:my-2 sm:w-full sm:flex lg:block sm:justify-between">
          <Headings
            wrapperClassName="my-auto"
            width="20"
            color="#0d266c"
            fontWeight="600"
            padding="0 1rem"
            tag="h3"
            margin="0 0 0 1rem"
            content="Connect With Us" />
          <div className="w-8 my-auto mx-8">
            <AddBtn onClick={()=>{footerToggle('connectUs')}}>+</AddBtn>
          </div>
        </div>
        <div id="connectUs" className="hidden">
          <div className="mb-4">
            <SocialIcons />
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
      </div>
    </footer>


  )
}