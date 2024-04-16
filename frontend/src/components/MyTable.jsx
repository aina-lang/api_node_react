import React, { useEffect, useState } from 'react'
import { TbTrashXFilled } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2"
import EditModal from './EditModal';
import axios from 'axios';
import { UseSweetAlert } from '../context/sweetContext';


function MyTable({ data,fetchMaterial }) {

    const { showLoading, close, fire} = UseSweetAlert();
    const [openEditModal, setOpenEditModal] = useState(false);
    const [materialToEdit, setMaterialToEdit] = useState(null);

    const openEditModalWithMaterial = (material) => {
        setMaterialToEdit(material);
        setOpenEditModal(true);
    };


    const deleteBtnClicked = async (index) => {
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to delete this item?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    showLoading('Modification en cours...');
    
                    console.log(index);
                    const response = await axios.delete(`http://127.0.0.1:8000/api/${index}`);
    
                    fetchMaterial();
                    close();
                    fire({
                        icon: 'success',
                        title: 'Modification réussie!',
                    });
    
                   
                    console.log('Success:', response.data);
                } catch (error) {
                    console.error('Error:', error);
                    close();
                }
            }
        });
    };
    


    return (
        <>
            <table className='w-full h-auto bg-white shadow-md mb-10 rounded-md overflow-hidden'>
                <thead className='bg-[#6E77EE] text-white'>
                    <tr>
                        <th className='p-3 border-gray-200 border-r-[1px]'>
                            Designation
                        </th>
                        <th className='border-gray-200 border-r-[1px]'>
                            Etat
                        </th>
                        <th className='border-gray-200 border-r-[1px]'>
                            Quantite
                        </th>
                        <th className='border-gray-200 border-r-[1px]'>
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((d, index) => {

                        return <tr className='text-center text-gray-800' style={{ backgroundColor: index % 2 == 0 ? "#B7BAC3" : "#E4E4E4" }} key={index}>
                            <td className='p-4 border-gray-200 border-r-[1px] font-bold'>{d.design}</td>
                            <td className='border-gray-200 border-r-[1px]'>
                                {d.etat === 'Bon' && <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                    <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                                    {d.etat}
                                </span>}
                                {d.etat === 'Mauvais' && <span className="inline-flex items-center bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">
                                    <span className="w-2 h-2 me-1 bg-orange-500 rounded-full"></span>
                                    {d.etat}
                                </span>}
                                {d.etat === 'Abimé' && <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                    <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                                    {d.etat}
                                </span>}
                            </td>
                            <td className='border-gray-200 border-r-[1px]'>
                                {d.quantite}
                            </td>
                            <td className='border-gray-200 border-r-[1px]  items-center space-x-4 justify-center'>
                                <button onClick={() => deleteBtnClicked(d.id)}>
                                    <TbTrashXFilled color='gray' />
                                </button>
                                <button onClick={()=>{openEditModalWithMaterial(d)}}>
                                    <CiEdit color='blue'/>
                                </button>
                            </td>
                        </tr>;
                    })}
                </tbody>
            </table>

            {openEditModal && (
                <EditModal isOpen={openEditModal} setOpen={setOpenEditModal} fetchMaterial={fetchMaterial} material={materialToEdit} />
            )}

            <nav aria-label="mt-10">
                <ul class="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MyTable