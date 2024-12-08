import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    "https://i.ibb.co.com/F4hry4p/sports-camp-bestbest3.webp",
    "https://i.ibb.co.com/fvCdDcS/best1.jpg",
    "https://i.ibb.co.com/7XZczYQ/markus-spiske-ABUg-Ga-ASVi-Q-unsplash.jpg",
    "https://i.ibb.co.com/2YngHjX/saif71-com-IHYo-Os-Wkuf-Q-unsplash.jpg",
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto my-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
