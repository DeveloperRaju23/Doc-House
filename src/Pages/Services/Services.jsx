import React from 'react';
import servicesImg from "../../assets/services/Rectangle 20078.png"
import ServicesTabs from './ServicesTabs';
const Services = () => {
    return (
        <div className='container pt-32 pb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div>
                    <img className='object-cover' src={servicesImg} alt="" />
                </div>
                <div>
                    <h3 className='text-[#0A0808] pb-5 text-xl lg:text-4xl font-bold'>Our Services</h3>
                    <p className='text-[#3B3A3A] text-lg pb-8 lg:me-12 me-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div>
                        <ServicesTabs></ServicesTabs>
                        <img src="https://i.ibb.co/8NMZJyP/Rectangle-10.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-[#0A0808] pt-5 pb-5 text-xl lg:text-4xl font-bold'>Electro  Gastrology Therapy</h3>
                        <p className='text-[#3B3A3A] text-lg pb-4 lg:me-12 me-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                        <p className='text-[#3B3A3A] text-lg  lg:me-12 me-4'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <button className='primary_btn'>More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;