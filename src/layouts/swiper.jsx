import { useContext } from 'react';
import AppContext from '../context/context.jsx';
// import Siper module
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import required modules
import { Pagination, EffectFade, Autoplay, Keyboard } from 'swiper/modules';

import {APP_LINKS, APP_IMAGES} from "../assets/index";

// sobrescribe estilos ccs para el swiper depues de render lazy
import '../css/swiper.css';
import { RiInformationLine } from '@remixicon/react';

export default function swiper() {

  const {appTexts} = useContext(AppContext);

  const {bookingLink} = APP_LINKS;
  const {homeBgImg1, homeBgImg2, homeBgImg3} = APP_IMAGES;
  const {hometitle1, hometitle2, hometitle3, homedescription1, homebuttontitle1} = appTexts;

  return (
    <Swiper pagination={{ clickable: true }}
                  spaceBetween={30}
                  effect={'fade'}
                  loop={true}
                  keyboard={{enabled: true,}}
                  autoplay={{delay: 348000, disableOnInteraction: false,}}
                  slidesPerView='1'
                  centeredSlides='auto'
                  grabCursor={true}
                  speed={1500}
                  ease='ease-in-out'
           modules={[EffectFade, Pagination, Autoplay, Keyboard]} className="home-slider">
              <SwiperSlide className="swiper-slide">
                <div
                  className="box"
                  style={{ background: `url(${homeBgImg1}) no-repeat` }}
                >
                  <div className="home-shadow" />
                  <video
                    src=""
                    className="home-video"
                    autoPlay=""
                    muted=""
                    loop=""
                  />
                  <div className="home-media"></div>
                  <div className="home-content">
                    <div className="home-data container grid">
                      <h1 className="home-title">
                        {hometitle1}
                        <br /> {hometitle2} <span>{hometitle3}</span>
                      </h1>
                      <p className="home-description">
                        {homedescription1}
                      </p>
                      <div className="home-button">
                        <a href={bookingLink} className="button" target="_blank">
                          {homebuttontitle1} <RiInformationLine className="custom-svg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="box"
                  style={{
                    background: `url(${homeBgImg2}) no-repeat`,
                  }}
                >
                  <div className="home-shadow" />
                  <video
                    src=""
                    className="home-video"
                    autoPlay=""
                    muted=""
                    loop=""
                  />
                  <div className="home-media"></div>
                  <div className="home-content">
                    <div className="home-data container grid">
                      <h1 className="home-title">
                        {hometitle1}
                        <br /> {hometitle2} <span>{hometitle3}</span>
                      </h1>
                      <p className="home-description">
                        {homedescription1}
                      </p>
                      <div className="home-button">
                        <a href={bookingLink} className="button" target="_blank">
                          {homebuttontitle1} <RiInformationLine className="custom-svg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="box"
                  style={{ background: `url(${homeBgImg3}) no-repeat` }}
                >
                  <div className="home-shadow" />
                  <video
                    src=""
                    className="home-video"
                    autoPlay=""
                    muted=""
                    loop=""
                  />
                  <div className="home-media"></div>
                  <div className="home-content">
                    <div className="home-data container grid">
                      <h1 className="home-title">
                        {hometitle1}
                        <br /> {hometitle2} <span>{hometitle3}</span>
                      </h1>
                      <p className="home-description">
                        {homedescription1}
                      </p>
                      <div className="home-button">
                        <a href={bookingLink} className="button" target="_blank">
                          {homebuttontitle1} <RiInformationLine className="custom-svg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
    </Swiper>
  );
}