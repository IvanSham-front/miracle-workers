import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination , Navigation } from 'swiper';
import racer from '../img/racer.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HintsBLock() {
    return (
        <section className="hints-block">
            <h2 className="title hints-block__title">ОНИ ДОЛЖНЫ ЧТО-ТО ЗНАТЬ</h2>
            <Swiper
                className='hints-block__content slider'
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                pagination={{ type: 'fraction',
                             modifierClass: 'counter slider__counter',
                            }}
                navigation
                
            >
                <SwiperSlide>
                    <div className="slider__image">
                        <img src={racer} alt="racer"/>
                    </div>

                    <p className='slider__text'>Для примера мы показали вам его лицо.  В первой серии он прячется в подвале 
                        за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — 
                        ему не терпится отдать вам промокод.
                    </p>

                    <div className='slider__cloud cloud1'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__image">
                        <img src={racer} alt="racer"/>
                    </div>

                    <p className='slider__text'>Для примера мы показали вам его лицо.  В первой серии он прячется в подвале 
                        за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — 
                        ему не терпится отдать вам промокод.
                    </p>
                    <div className='slider__cloud cloud1'></div>
                </SwiperSlide>
            </Swiper>



            <a href='#' className='search-promo hints-block__link'>
                <span className='search-promo__text'>Искать промокод</span>
                <div className='search-promo__arrow'></div>
            </a>
        </section>
    )
}