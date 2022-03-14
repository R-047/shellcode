import React from 'react'
import './home.css'


import prod_img from './productimg.png';
import itm_ic from './bionic-contact-lens-svgrepo-com.svg'
import firstimg from './firstitem.png'
import secimg from './seconditem.png'
import thirdimg from './thirditem.png'
import cardimg from './cardimg.png'
import quote from './quotes.svg'
import earth from './earth.png'
import blob from './blob.svg'
import logo_ic from './logoipsum.svg'
import ssshape from './ssshape.svg'


import styled from 'styled-components'
import user1 from './userdp1.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




function HomePage() {
  return (
    <div className='main_div'>
      
      <div className='background_blob'>

        <div className='header'>
          <div className='logo'>
            <a href='#'>
              <img src={logo_ic}></img>
            </a>
          </div>
          <nav className='nav_bar'>
            <a href='#'>How it works</a>
            <a href='#'>Shop</a>
            <a href='#'>Compatibility</a>
            <a href='#'>About Us</a>
            <a href='#'>Blog</a>
          </nav>
          <div className='soc_media_cont'>
            <a href='www.facebook.com'>
              <FontAwesomeIcon icon={faFacebook} color="white" />
            </a>
            <a href='www.youtube.com'>
              <FontAwesomeIcon icon={faInstagram} color="white" />
            </a>
            <a href='www.facebook.com'>
              <FontAwesomeIcon icon={faLinkedin} color="white" />
            </a>
            <a href='www.facebook.com'>
              <FontAwesomeIcon icon={faTwitter} color="white" />
            </a>
            <a href='https://www.youtube.com/'>
              <FontAwesomeIcon icon={faYoutube} color="white" />
            </a>
          </div>
          <a className="cart_link">
            <div>
              0
            </div>
            <FontAwesomeIcon icon={faCartShopping} color="white" />
          </a>
        </div>

        <div className='tagline_prod_wrapper'>
          <div className="tagline_wrapper">
            <h1>Random Text being animated<br />just to show off</h1>
            <p>Random mini Text being animated blah blah<br />just to show off</p>
            <a href='#'>Call to Action</a>
          </div>
          <div className='prod_image'>
            <img src={prod_img} width={400} ></img>
          </div>
        </div>
      </div>

      <div className='features_container'>
        <h1>your mini webiste in a card</h1>
        <div className='features_items_wrapper'>

          <div className='item_cont'>
            <img src={itm_ic} width={30}></img>
            <div className='text_Wrapper'>
              <h5>contactless sharing of card</h5>
              <p>Just a tap shares your information</p>
            </div>
          </div>

          <div className='item_cont'>
            <img src={itm_ic} width={30}></img>
            <div className='text_Wrapper'>
              <h5>contactless sharing of card</h5>
              <p>Just a tap shares your information</p>
            </div>
          </div>

          <div className='item_cont'>
            <img src={itm_ic} width={30}></img>
            <div className='text_Wrapper'>
              <h5>contactless sharing of card</h5>
              <p>Just a tap shares your information</p>
            </div>
          </div>

        </div>
      </div>

      <div className='how_it_works_container'>
        <h1>How it works</h1>

        <div className='img_content_wrapper'>
          <img src={firstimg} width={500}></img>
          <div className='text_wrapper_2'>
            <h1>Share it with a Tap</h1>
            <p>Card can be tapped on most of the Android phones and newer iPhones. Non-NFC phones can scan the QR code to access your profile. No apps required.</p>
          </div>
        </div>

        <div className='img_content_wrapper'>
          <div className='text_wrapper_2'>
            <h1>Share it with a Tap</h1>
            <p>Card can be tapped on most of the Android phones and newer iPhones. Non-NFC phones can scan the QR code to access your profile. No apps required.</p>
          </div>
          <img src={firstimg} width={500}></img>
        </div>

        <div className='img_content_wrapper'>
          <img src={firstimg} width={500}></img>
          <div className='text_wrapper_2'>
            <h1>Share it with a Tap</h1>
            <p>Card can be tapped on most of the Android phones and newer iPhones. Non-NFC phones can scan the QR code to access your profile. No apps required.</p>
          </div>
        </div>




      </div>

      <div className='buy_container'>
        <h1>buy your card</h1>

        <div className="productcards_container">
          <div className='product_card'>
            <a className='link_wrapper' href='#'>
              <img src={cardimg} width={300}></img>
              <h1>hello card</h1>
            </a>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
            <h1>Rs. 799.00</h1>
            <a className="buynow_link" href='#'>buy now</a>
          </div>

          <div className='product_card'>
            <a className='link_wrapper' href='#'>
              <img src={cardimg} width={300}></img>
              <h1>hello card</h1>
            </a>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
            <h1>Rs. 799.00</h1>
            <a className="buynow_link" href='#'>buy now</a>
          </div>

          <div className='product_card'>
            <a className='link_wrapper' href='#'>
              <img src={cardimg} width={300}></img>
              <h1>hello card</h1>
            </a>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
            <h1>Rs. 799.00</h1>
            <a className="buynow_link" href='#'>buy now</a>
          </div>
        </div>

      </div>

      <div className='video_container'>
        <iframe width="700" height="450"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>

      <div className='testimonials_container'>
        <h1>User Reviews</h1>


        <div className='owl_wrapper'>
          <OwlCarousel className='owl-theme' loop autoplay={true} items={1} dots={true} center={true} margin={50}>
            <div className='item'>
              <UserReviewContainer dp_path={user1} testimony="Card can be tapped on most of the Android phones and newer iPhones. Non-NFC phones can scan the QR code to access your profile. No apps required."
                user_name="Alby Mathew"
                user_about="lalalal - lallala"
              />
            </div>
            <div className='item'>
              <UserReviewContainer dp_path={user1} testimony="Card can be tapped on most of the Android phones and newer iPhones. Non-NFC phones can scan the QR code to access your profile. No apps required."
                user_name="Alby Mathew"
                user_about="lalalal - lallala"
              />
            </div>
            <div className='item'>
              <UserReviewContainer dp_path={user1} testimony="Card can be tapped on most of the Android phones and newer iPhones. Non-NFC phones can scan the QR code to access your profile. No apps required."
                user_name="Alby Mathew"
                user_about="lalalal - lallala"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div className='impact_container'>
        <div className='impact_txt_wrapper'>
          <h1>Paper wastage</h1>
          <p>Of the 27-million-plus business cards printed each day in the US alone, 88 percent are tossed away within a week of receiving them. Think of all the firs and pines — a precious and finite resource — that are being used up and disposed of, after serving little to no purpose.</p>
        </div>
        <img src={earth} width={400}></img>
      </div>




    </div>
  )
}

export default HomePage






const TestimonialWrapper = styled.div`
 display:flex;
 flex-direction: row;
 width: 500px;
 height: 300px;
 align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 20px;
    position: relative;
   
    
    
   

`

const UserDp = styled.div`
 background-image: ${(props) => `url(${props.dp})`};
 min-width: 120px;
 min-height: 120px;
 max-width: 120px;
 max-height: 120px;
 width: 120px;
 height: 120px;
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 background-color: black;
 border-radius: 100%;


`

const QuoteComp = styled.div`
background-image: ${(props) => `url(${props.quote_pic})`};
 min-width: 100px;
 min-height: 100px;
 max-width: 100px;
 max-height: 100px;
 
  background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
`

const TxtWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
    align-content: flex-start;
`


const Testimony = styled.p`

`

const UserName = styled.h2`

`
const UserAbout = styled.p`

`

function UserReviewContainer({ dp_path, testimony, user_name, user_about }) {
  console.log(dp_path)
  return (
    <TestimonialWrapper >
      <UserDp dp={dp_path}></UserDp>
      <TxtWrapper>
        <QuoteComp quote_pic={quote} />
        <Testimony>
          {testimony}
        </Testimony>
        <UserName>{user_name}</UserName>
        <UserAbout>
          {user_about}
        </UserAbout>
      </TxtWrapper>
    </TestimonialWrapper>
  )
}
