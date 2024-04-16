import React, { useEffect, useState } from "react";
import MyTable from "../components/MyTable";
import MyStatistiqueCard from "../components/StateMaterialCard";
import StatistiqueCard from "../components/StatistiqueCard";
import axios from "axios";
import { FaPlus, FaSearch } from "react-icons/fa";
import AddModal from "../components/AddModal";
function Home() {
  const [materiels, setMateriels] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const fetchMaterial = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/");
      setMateriels(res.data.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchMaterial();
  }, []);

  const handleAddButtonClick = () => {
    setIsAddModalOpen(true);
    setIsClicked(true);
  };

  const handleModalClose = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div className="sm:mt-0 mt-20 h-screen w-full flex items-center justify-center  flex-col">
      <div className="w-full p-5 mt-10">
        <div className="flex items-center space-x-3">
          <input type="text" className="border-gray-300 rounded-md" />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1  w-full sm:grid-cols-3">
        <AddModal
          isOpen={isAddModalOpen}
          setOpen={handleModalClose}
          fetchMaterial={fetchMaterial}
        />
        <div className=" col-span-2 p-5 ">
          <MyTable data={materiels} fetchMaterial={fetchMaterial} />
        </div>
        <div className="col-span-1 p-5 space-y-2">
          <StatistiqueCard />
          <MyStatistiqueCard />
        </div>
      </div>
      <div
        className={`fixed bottom-5 text-white flex items-center justify-center right-3 p-3 w-[65px] h-[65px] rounded-full transition-all transform ${
          isClicked ? "shadow-inner" : "shadow-lg"
        } bg-[#6E77EE] p-3 rounded-full`}
      >
        <button onClick={handleAddButtonClick}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default Home;
