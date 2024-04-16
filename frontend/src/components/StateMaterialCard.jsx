import React from "react";

function MyStatistiqueCard({ materiels }) {
  let totalBon = 0;
  let totalMauvais = 0;
  let totalAbime = 0;

  materiels.forEach((mat) => {
    if (mat.etat === "Bon") {
      totalBon += mat.quantite;
    } else if (mat.etat === "Mauvais") {
      totalMauvais += mat.quantite;
    } else if (mat.etat === "Abimé") {
      totalAbime += mat.quantite;
    }
  });

  return (
    <div className="bg-white p-3 text-white rounded-md  shadow-md min-h-[70px] flex-col items-center flex">
      <div className="w-full mb-4">
        <h2 className="text-xl font-bold text-gray-800">Etat </h2>
      </div>
      <div className="w-full flex space-x-4">
        <p className="text-green-400">
          Bon: <span className="font-bold  ml-2"> {totalBon}</span>
        </p>
        <p className="text-orange-400">
          Mauvais: <span className="font-semibold ml-2">{totalMauvais}</span>
        </p>
        <p className="text-red-500">
          Abime : <span className="font-semibold ml-2"> {totalAbime}</span>
        </p>
      </div>
    </div>
  );
}

export default MyStatistiqueCard;
