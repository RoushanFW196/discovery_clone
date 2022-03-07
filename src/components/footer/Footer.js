import React from "react";
import "./footer.css";
import { HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { IoLogoYoutube } from 'react-icons/io';
// import { AiFillFacebook } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (  
    <div className="footer">
      <footer>

        <div className="footer-end-first-div footer-block">
          <div className="footer-start-first-div">
                    <div className="footer-flex">
                        <div className="footer-description">
                            <p>
                              <HiOutlineMail className="footer-icon-left"/>

                              <span><a className="footer-hover-color" href="mailto:hello@discovery.com">hello@discovery.com</a></span></p>
                            <p>
                              <BiPhoneCall className="footer-icon-left"/>
                              
                              <span> 022-43491100 +91-8433774761 (Mon-Fri, excluding Holidays 11am-4pm)</span></p>
                            <p>
                              <MdLocationOn className="footer-icon-left"/>
                              
                              <span>Discovery India, 5th Floor, WeWork BKC, C20 G Block, Bandra Kurla Complex, Mumbai 400051</span></p>
                        </div>
                        {/* right */}
                        <div className="footer-block footer-left-icon-div-block">
                          <div className="footer-social-desc ">Follow us</div>
                          <div className="footer-flex">
                          <IoLogoYoutube id="yt-icon" className="footer-icon-right"/> 
                          <FaFacebook id="fb-icon" className="footer-icon-right"/> 
                          </div>
                        </div>
                        <div className="footer-block">
                          <div className="footer-social-desc footer-social-icon-gap">discovery+ App</div>
                          <div className="footer-flex">
                          <img className="footer-app-store-icon1"  src="https://icon-library.com/images/app-store-vector-icon/app-store-vector-icon-4.jpg" alt="" />
                          <img  className="footer-app-store-icon2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/800px-Google_Play_Store_badge_EN.svg.png" alt="" />
                          </div>
                        </div>
                    </div>
          </div>
          {/* second div */}
          <div>
                <div className="footer-flex">
                <div className="flex-half-left">
              <p className="footer-hover-color">Advertising Services Terms & Conditions</p>
              <p className="footer-hover-color">Online Advertising Order</p>
              <p className="footer-hover-color">Support</p>
            </div>
                </div>
          </div>
        </div>
            {/* second div */}
        <div className="footer-block">
          <div className="footer-flex footer-hr">
            <div className="flex-half-left">
              <p className="footer-hover-color">Privacy Policy</p>
              <p className="footer-hover-color">Terms of Use</p>
              <p className="footer-hover-color">FAQ's</p>
            </div>
            <div className="flex-half-right">
              <p>Copyright © 2020 Discovery, Inc. or its subsidiaries and
                affiliates. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
