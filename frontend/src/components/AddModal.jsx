import axios from 'axios';
import React, { useState } from 'react';
import { UseSweetAlert } from '../context/sweetContext';

function AddModal({ isOpen, setOpen, fetchMaterial }) {
    const [design, setDesign] = useState('');
    const [quantite, setQuantite] = useState(1);
    const [etat, setEtat] = useState('Mauvais');
    const { showLoading, close, fire} = UseSweetAlert();


    const resetForm = () => {
        setDesign("");
        setQuantite(1)
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        resetForm();
        if (!design || !quantite || !etat) {
            console.log("Complétez tous les champs.");
            return;
        }

        if (isNaN(quantite) || parseInt(quantite) <= 0) {
            console.log("La quantité doit être un nombre positif.");
            return;
        }

        try {
            showLoading('Ajout en cours...');

            const response = await axios.post('http://127.0.0.1:8000/api/add', {
                design,
                quantite,
                etat,
            });

            fetchMaterial();
            close();
            fire({
                icon: 'success',
                title: 'Ajout réussi!',
            });

            setOpen(false);

            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
            close();
        }
    };
    
    return (
        <div onClick={(e) => {
            if (e.target === e.currentTarget) {
                setOpen(false);
                // ${isOpen ? 'flex' : 'hidden'}
            }
        }} className={`w-full h-full bg-black/20 fixed top-0 left-0  p-10 items-center justify-center flex   ${isOpen ? 'flex' : 'hidden'}`} >
            <form onSubmit={handleSubmit} className='bg-white rounded-md lg:min-w-[400px] md:min-w-[300px] min-w-full   w-full p-5 space-y-4'>
                <div className='flex  justify-between flex-col space-y-2'>
                    <label htmlFor="design">Designation:</label>
                    <input className="rounded-md border-gray-300" type="text" id="design" name="design" value={design} onChange={(e) => setDesign(e.target.value)} />
                </div>
                <div className='flex  justify-between flex-col space-y-2'>
                    <label htmlFor="quantite">Quantite:</label>
                    <input className="rounded-md border-gray-300" type="number" id="quantite" name="quantite" value={quantite} onChange={(e) => setQuantite(e.target.value)} min={1} />
                </div>
                <div className='flex  justify-between flex-col space-y-2'>
                    <label htmlFor="etat">Etat:</label>
                    <select id="etat" name="etat" value={etat} onChange={(e) => setEtat(e.target.value)} className='mb-5 border-gray-300 rounded-md'>
                        <option value="Mauvais">Mauvais</option>
                        <option value="Bon">Bon</option>
                        <option value="Abimé">Abimé</option>
                    </select>
                    <button className='bg-[#6E77EE] hover:bg-[#4852dc] transition-all p-2 mt-5 text-white' type='submit'>Enregistrer</button>
                </div>
            </form>
        </div>
    );
}

export default AddModal;
