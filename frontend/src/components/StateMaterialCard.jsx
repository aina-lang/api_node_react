import React from 'react'

function MyStatistiqueCard({ }) {
    return (
        <div
            className='bg-white p-3 text-white rounded-md  shadow-md min-h-[70px] flex-col items-center flex'>
            <div className='w-full mb-4'>
                <h2 className='text-xl font-bold text-gray-800'>Etat </h2>
            </div>
            <div className='w-full flex space-x-4'>
                <p className='text-green-400'>Bon:   <span className='font-bold  ml-2'> 32</span></p>
                <p className='text-orange-400'>Mauvais:   <span className='font-semibold ml-2'> 32</span></p>
                <p className='text-red-500'>Abime :   <span className='font-semibold ml-2'> 32</span></p>
            </div>
        </div>
    )
}

export default MyStatistiqueCard