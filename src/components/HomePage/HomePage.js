import React, {useEffect, useState} from 'react'
import './home.css'


import prod_img from './res/productimg.svg';
import itm_ic from './res/bionic-contact-lens-svgrepo-com.svg'
import firstimg from './res/item_ilstrns.svg'
import secimg from './res/seconditem.png'
import thirdimg from './res/thirditem.png'
import cardimg from './res/cardimg.png'
import quote from './res/quotes.svg'
import earth from './res/earth.png'
import blob from './res/blob.svg'
import logo_ic from './res/logoipsum.svg'
import ssshape from './res/ssshape.svg'
import rectblack from './res/rectblackk.png'
import rectgrey from './res/rectgrey.png'
import worldmap from './res/worldmap.svg'


import styled from 'styled-components'
import user1 from './res/userdp1.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 200px 20px 200px;
  /* background-color: aqua; */
  position: fixed;
  top: 0px;
  background-color: ${(props) => props.bg_color.background};;
  z-index: 10;
  color:  ${(props) => props.bg_color.color};
  /* border-bottom: 1px solid black; */
  box-shadow: ${(props) => props.bg_color.shadow};
`


function HomePage() {

  const [headerColorState, setheaderColorState] = useState({
    background: "transparent",
    color: "white",
    shadow: "none"
  })
  const onScroll = (e) => {
    console.log(window.scrollY)
    if(window.scrollY > 50){
      setheaderColorState({
        background: "white",
        color: "black",
        shadow: "0px 5px 5px -3px grey"
      })
    }else{
      setheaderColorState({
        background: "transparent",
        color: "white",
        shadow: "none"
      })
    }
   }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    
     
  }, [])
  
  return (
    <div className='main_div'>
      
      <div className='background_blob'>
      <Header bg_color={headerColorState}>
        {/* <div className='header'> */}
          <div className='logo'>
            <a href='#'>
              <img src={logo_ic}></img>
            </a>
          </div>
          <nav className='nav_bar'>
            <a href='#' style={{color: headerColorState.color}}>How it works</a>
            <a href='#' style={{color: headerColorState.color}}>Shop</a>
            <a href='#' style={{color: headerColorState.color}}>Compatibility</a>
            <a href='#' style={{color: headerColorState.color}}>About Us</a>
            <a href='#' style={{color: headerColorState.color}}>Blog</a>
          </nav>
          <div className='soc_media_cont'>
            <a href='www.facebook.com' >
              <FontAwesomeIcon icon={faFacebook} color={headerColorState.color} />
            </a>
            <a href='www.youtube.com'>
              <FontAwesomeIcon icon={faInstagram} color={headerColorState.color} />
            </a>
            <a href='www.facebook.com'>
              <FontAwesomeIcon icon={faLinkedin} color={headerColorState.color} />
            </a>
            <a href='www.facebook.com'>
              <FontAwesomeIcon icon={faTwitter} color={headerColorState.color} />
            </a>
            <a href='https://www.youtube.com/'>
              <FontAwesomeIcon icon={faYoutube} color={headerColorState.color} />
            </a>
          </div>
          <a className="cart_link">
            <div>
              0
            </div>
            <FontAwesomeIcon icon={faCartShopping} color={headerColorState.color} />
          </a>
        {/* </div> */}
        </Header>

        <div className='tagline_prod_wrapper'>
          <div className="tagline_wrapper">
            <h1>Lorem Ipsum is simply dummy<br /> text of the printing</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry<br />just to show off</p>
            <a href='#'>Call to Action</a>
          </div>
          <div className='prod_image'>
            <img src={prod_img} width={200} ></img>
          </div>
        </div>
      </div>

      <div className='features_container'>
        <h1>Lorem Ipsum is simply dummy text</h1>
        <div className='features_items_wrapper'>

          <div className='item_cont'>
            <img src={itm_ic} width={30}></img>
            <div className='text_Wrapper'>
              <h5>Lorem ipsum dolor sit amet</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>

          <div className='item_cont'>
            <img src={itm_ic} width={30}></img>
            <div className='text_Wrapper'>
              <h5>Lorem ipsum dolor sit amet</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>

          <div className='item_cont'>
            <img src={itm_ic} width={30}></img>
            <div className='text_Wrapper'>
              <h5>Lorem ipsum dolor sit amet</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>

        </div>
      </div>

      <div className='how_it_works_container'>
        <h1>How it works</h1>

        <div className='img_content_wrapper'>
          <img src={firstimg} width={400}></img>
          <div className='text_wrapper_2'>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
        </div>

        <div className='img_content_wrapper'>
          <div className='text_wrapper_2'>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          <img src={firstimg} width={400}></img>
        </div>

        <div className='img_content_wrapper'>
          <img src={firstimg} width={400}></img>
          <div className='text_wrapper_2'>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
        </div>




      </div>

      <div className='buy_container'>
        <h1>buy your card</h1>

        <div className="productcards_container">
  

          <ProductType img_name={rectgrey} sec_img_name={rectblack} heading="Lorem Ipsum" items_arr={["item1", "item2", "item3"]} amount="Rs. 799.00"/>
          <ProductType img_name={rectgrey} sec_img_name={rectblack} heading="Lorem Ipsum" items_arr={["item1", "item2", "item3"]} amount="Rs. 799.00"/>
          <ProductType img_name={rectgrey} sec_img_name={rectblack} heading="Lorem Ipsum" items_arr={["item1", "item2", "item3"]} amount="Rs. 799.00"/>

        </div>

      </div>

      <div className='video_container'>
        <iframe width="700" height="450"
          src="https://www.youtube.com/embed/ScMzIvxBSi4">
        </iframe>
      </div>

      <div className='testimonials_container'>
        <h1>User Reviews</h1>


        <div className='owl_wrapper'>
          <OwlCarousel className='owl-theme' loop  items={1} dots={true} center={true} margin={50}>
            <div className='item'>
              <UserReviewContainer dp_path={user1} testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                user_name="Alby Mathew"
                user_about="Lorem - Ipsum"
              />
            </div>
            <div className='item'>
              <UserReviewContainer dp_path={user1} testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                user_name="Alby Mathew"
                user_about="Lorem - Ipsum"
              />
            </div>
            <div className='item'>
              <UserReviewContainer dp_path={user1} testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                user_name="Alby Mathew"
                user_about="Lorem - Ipsum"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>

      <div className='impact_container'>
        <div className='impact_txt_wrapper'>
          <h1>Lorem Ipsum is simply dummy</h1>
          <p>Of the 27-million-plus business cards printed each day in the US alone, 88 percent are tossed away within a week of receiving them. Think of all the firs and pines — a precious and finite resource — that are being used up and disposed of, after serving little to no purpose.</p>
        </div>
        <img src={worldmap} width={400}></img>
      </div>




    </div>
  )
}

export default HomePage






const TestimonialWrapper = styled.div`
 display:flex;
 flex-direction: row;
 width: 500px;
 height: fit-content;
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




function ProductType({img_name, sec_img_name, heading, items_arr, amount}){

  const [imageState, setimageState] = useState(img_name);



  const list_items = items_arr.map((ele, index) => {
    return(<li key={index}>{ele}</li>)
  })


  const onImgHoverIn = (e) => {
    setimageState(sec_img_name)
  }

  const onImageHoverOut = (e) => {
    setimageState(img_name)
  }

  return (
    <div className='product_card'>
            <a className='link_wrapper' href='#'>
              <img src={imageState} width={300} onMouseOver={onImgHoverIn} onMouseOut={onImageHoverOut}></img>
              <h1>{heading}</h1>
            </a>
            <ul>
              {list_items}
            </ul>
            <h1>{amount}</h1>
            <a className="buynow_link" href='#'>buy now</a>
          </div>
  )

}
