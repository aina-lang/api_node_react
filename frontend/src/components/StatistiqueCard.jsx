import React from 'react';

function StatistiqueCard({ materiels }) {
    // Initialisation des valeurs minimum et maximum
    let minQuantite = Number.MAX_SAFE_INTEGER;
    let maxQuantite = Number.MIN_SAFE_INTEGER;
    let minEtat = '';
    let maxEtat = '';

    // Objet pour stocker les sommes par état
    const sumByEtat = {
        Bon: 0,
        Mauvais: 0,
        Abimé: 0
    };

    // Parcours de tous les matériaux pour calculer la somme par état et trouver le minimum et le maximum
    materiels.forEach(mat => {
        sumByEtat[mat.etat] += mat.quantite;

        if (mat.quantite < minQuantite) {
            minQuantite = mat.quantite;
            minEtat = mat.etat;
        }
        if (mat.quantite > maxQuantite) {
            maxQuantite = mat.quantite;
            maxEtat = mat.etat;
        }
    });

    // Recherche du minimum et du maximum dans les sommes par état
    let minSum = Number.MAX_SAFE_INTEGER;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let minSumEtat = '';
    let maxSumEtat = '';
    for (const etat in sumByEtat) {
        if (sumByEtat[etat] < minSum) {
            minSum = sumByEtat[etat];
            minSumEtat = etat;
        }
        if (sumByEtat[etat] > maxSum) {
            maxSum = sumByEtat[etat];
            maxSumEtat = etat;
        }
    }

    return (
        <div className='bg-[#6E77EE] p-3 text-white rounded-md shadow-md min-h-[70px] flex-col items-center flex'>
            <div className='w-full mb-4'>
                <h2 className='text-xl font-bold'>Statistique </h2>
            </div>
            <div className='w-full flex space-x-4'>
                {/* <p className=''>Minimum: <span className='font-bold ml-2'>{minQuantite} ({minEtat})</span></p>
                <p className=''>Maximum: <span className='font-semibold ml-2'>{maxQuantite} ({maxEtat})</span></p>
                */}
                <p className=''>Minimum: <span className='font-bold ml-2'>{minSum} ({minSumEtat})</span></p>
                <p className=''>Maximum: <span className='font-semibold ml-2'>{maxSum} ({maxSumEtat})</span></p>
            </div>
        </div>
    );
}

export default StatistiqueCard;
