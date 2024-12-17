// import Swiper core and required modules
import { Navigation,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImQuotesLeft } from "react-icons/im";
// Import Swiper styles
import './Comments.css';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const Comments = () => {
  return (

    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="card comments-card">
          <div className="card-body">
          <ImQuotesLeft className='quote-icon'/>
            <p className="card-text">Working with PeerLogics was a game-changer for our business. Their team provided innovative solutions that helped streamline our processes and enhance our digital presence. Highly recommended!</p>
            <p>– Sarah M., Business Owner</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card comments-card">
          <div className="card-body">
          <ImQuotesLeft className='quote-icon'/>
            <p className="card-text">PeerLogics delivered beyond our expectations. Their attention to detail, timely delivery, and technical expertise made the entire experience smooth and successful. Truly a pleasure to work with!</p>
            <p>– John K., Project Manager
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card comments-card" >
          <div className="card-body">
          <ImQuotesLeft className='quote-icon'/>
          <p className="card-text">From concept to execution, PeerLogics demonstrated professionalism and creativity. The solutions they implemented have had a direct impact on our growth. We couldn’t be happier!</p>
          <p>– Emily R., CEO</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card comments-card">
          <div className="card-body">
          <ImQuotesLeft className='quote-icon'/>
          <p className="card-text">The team at PeerLogics understood our vision perfectly and turned it into reality. Their seamless communication, innovative ideas, and technical skills made the entire project a success. We’re thrilled with the results!</p>
          <p>– David L., Operations Director</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Comments;
