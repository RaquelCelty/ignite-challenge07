import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderItem } from './SliderItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", flex: "1", height: "100%", color: "" }}
    >
      <SwiperSlide>
        <SliderItem
          title='Europa'
          description='O continente mais antigo.'
          link='europa'
          imageUrl="/images/continents/europe.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          title='América do Sul'
          description='O continente mais alegre.'
          link='america-do-sul'
          imageUrl="/images/continents/south-america.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          title='África'
          description='O continente mais cultural'
          link='africa'
          imageUrl="/images/continents/africa.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          title='Ásia'
          description='O continente mais populoso'
          link='asia'
          imageUrl="/images/continents/asia.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          title='Oceania'
          description='O continente é o menor continente'
          link='oceania'
          imageUrl="/images/continents/oceania.png"
        />
      </SwiperSlide>


    </Swiper>
  );
}
