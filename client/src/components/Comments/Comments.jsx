// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './Comments.css'
import 'swiper/css';
import 'swiper/css/navigation';

const Comments = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="card comments-card" style={{ width: '21rem' }}>
          <div className="card-body">
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card comments-card" style={{ width: '21rem' }}>
          <div className="card-body">
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card comments-card" style={{ width: '21rem' }}>
          <div className="card-body">
          <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card comments-card" style={{ width: '21rem' }}>
          <div className="card-body">
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
