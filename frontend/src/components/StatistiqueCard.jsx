import React from 'react'

function StatistiqueCard() {
    return (
        <div
            className='bg-[#6E77EE] p-3 text-white rounded-md  shadow-md min-h-[70px] flex-col items-center flex'>
            <div className='w-full mb-4'>
                <h2 className='text-xl font-bold '>Statistique </h2>
            </div>
            <div className='w-full flex space-x-4'>
                <p className=''>Minimum:   <span className='font-bold  ml-2'> 32</span></p>
                <p className=''>Maximum:   <span className='font-semibold ml-2'> 32</span></p>
                <p className=''>Total :   <span className='font-semibold ml-2'> 32</span></p>
            </div>
        </div>
    );
}

export default StatistiqueCard