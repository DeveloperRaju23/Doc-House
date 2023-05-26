import React from 'react';

const Contact = () => {
    return (
        <div className='container pb-14'>
            <div className='bg-[#07332F] py-28 rounded-lg'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 px-4 md:px-12 lg:px-24'>
                    <div className='text-[#FFFFFF]'>
                        <h4 className='text-4xl font-bold pb-5'>Contact With Us</h4>
                        <p className='text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                        <p className='pb-4 pt-4'>+88 01750 14 14 14</p>
                        <p>Dhanmondi, Dhaka, Bangladesh</p>
                    </div>
                    <div className='pe-10'>
                    <input type="text" placeholder="Name" className="contact_input  max-w-xs" />
                    <input type="text" placeholder="Email" className="contact_input max-w-xs" />
                    <input type="text" placeholder="Mobile Number" className="contact_input  max-w-xs" />
                    <input type="text" placeholder="Doctor Name" className="contact_input max-w-xs" />
                    <input type="" placeholder="Date" className="contact_input  max-w-xs" />
                    <input type="text" placeholder="Time" className="contact_input  max-w-xs" />
                    <button className='banner_btn w-full'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;