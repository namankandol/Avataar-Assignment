import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "../Assets/Carousel.css"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/keyboard"

import {
  EffectCoverflow,
  Pagination,
  Keyboard,
  Navigation,
} from "swiper/modules"

import books from "../Images/books.jpg"
import botanical from "../Images/botanical.jpg"
import clothing from "../Images/clothing.jpg"
import electronics from "../Images/electronics.jpg"
import furniture from "../Images/furniture.jpg"
import games from "../Images/games.jpg"
import movies from "../Images/movies.jpg"
import music from "../Images/music.jpg"

const Carousel = () => {
  return (
    <div className="container">
      <h1 className="heading">Featured Products</h1>
      <p className="subheading">Explore and discover variety of products</p>
      <Swiper
        slideToClickedSlide={true}
        keyboard={{ enabled: true }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2.5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 3,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
        className="swiper_container"
      >
        <SwiperSlide>
          {" "}
          <img src={books} alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <img src={botanical} alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <img src={clothing} alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <img src={electronics} alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <img src={furniture} alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <img src={games} alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <img src={movies} alt="" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <img src={music} alt="" />{" "}
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Carousel
