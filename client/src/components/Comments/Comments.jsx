// import Swiper core and required modules
import { Navigation,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImQuotesLeft } from "react-icons/im";
// Import Swiper styles
import './Comments.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Comments = () => {
  return (

    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="card comments-card">
          <div className="card-body">
          <ImQuotesLeft className='quote-icon'/>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card comments-card">
          <div className="card-body">
          <ImQuotesLeft className='quote-icon'/>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card comments-card" >
          <div className="card-body">
          <ImQuotesLeft className='quote-icon'/>
          <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card comments-card">
          <div className="card-body">
          <ImQuotesLeft className='quote-icon'/>
          <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Comments;
