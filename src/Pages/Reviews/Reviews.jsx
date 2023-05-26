import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import "swiper/css/pagination";
const Reviews = () => {
    const [reviews , setReviews] = useState([])
    // const {name,title,desc,image} = review
    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className='container pb-14'>
           <div className='text-center '>
                    <h3 className='text-[#0A0808] font-bold text-4xl'>What Our Patients Says</h3>
                    <p className='text-[#3B3A3A] text-lg pt-4 pb-8 w-4/6 text-center mx-auto '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
           </div>
        <div>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
            clickable: true,
          }}
        breakpoints={
            {
                0:{
                    slidePrevClass : 1,
                    spaceBetween: 10,
                },
                480:{
                    slidePrevClass : 1,
                    spaceBetween: 10,
                },
                780:{
                    slidePrevClass : 2,
                    spaceBetween: 10,
                }
            }
        }
        modules={[FreeMode,Pagination]}
        className="mySwiper"
       
      >  {
        reviews.map(review => (
            <SwiperSlide className='grid grid-cols-1 md:grid-cols-2 border rounded-md'>
           <div className="py-14 px-8 cursor-pointer">
           {/* <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /> */}
          <div>
        <div className='flex items-center gap-4'>
        <img className="" src={review.image} alt="" />
           <div className='flex-col items-center'>
           <h4 className="">{review.name}</h4>
           <p>{review.title}</p>
           </div>
        </div>
           <span className="text-center text-[#444444] pb-2">{review.desc}</span>
          </div>
           </div>

         
            </SwiperSlide>
        ))
    }

       
      </Swiper>
        </div>
        </div>
    );
};

export default Reviews;