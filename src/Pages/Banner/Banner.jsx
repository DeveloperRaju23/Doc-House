import React from 'react';
import groupImg from "../../assets/banner/Group 34991.png"
const Banner = () => {
    return (
        <div className='primary_color pb-52'>
            <div className='container'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='pt-12 px-4'>
                        <h3 className='banner_title'>Your Best Medical Help Center</h3>
                        <p className='text-lg pt-3 text-[#F3F3F3] font-medium'>Lorem Ipsum is simply dummy text they are printing  typesetting has <br /> been the industry’s stardard.</p>
                        <button className='banner_btn mt-4'>All Service</button>
                        </div>
                        <div>
                        <img className='object-cover' src={groupImg} alt="" />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;