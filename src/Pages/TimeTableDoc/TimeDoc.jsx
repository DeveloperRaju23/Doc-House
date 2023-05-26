import React from 'react';

const TimeDoc = () => {

    return (
        <div className='container pb-32'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-3'>
                    <div className='time_doc'>
                        <h3 className='text-2xl pb-3'>Opening Hours</h3>
                        <p className='text-xl'>Open 9.00 am to 5.00pm Everyday</p>
                    </div>
                    <div className='time_doc_2nd'>
                        <h3 className='text-2xl pb-3'>Our Locations</h3>
                        <p className='text-xl'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                    </div>
                    <div className='time_doc'>
                        <h3 className='text-2xl pb-3'>Contact Us</h3>
                        <p className='text-xl'>+88 01750 00 00 00 <br />
                        +88 01750 00 00 00</p>
                    </div>
                </div>
        </div>
    );
};

export default TimeDoc;