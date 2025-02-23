import React from "react";
import { useState } from "react";
import "./index.css";
import PetList from "./components/PetList";
import { PETS } from "./components/data";
import { Select } from "@mui/material";

function App() {
  const [myPetStore, setMyPetStore] = useState(PETS);

  // To handle pets adoption

  const handlePetAdoption = (pet_id) => {
    let updatedPets = myPetStore.map((value) => {
      if (value.id === pet_id) {
        value.isAdopted = true;
      }
      return value;
    });

    setMyPetStore(updatedPets);
  };

  // To handle pet type filering 

  const handlePetTypeFilter = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="mt-10 mx-auto">
      <h1 className="md:text-2xl lg:text-4xl text-purple-950 text-center font-bold mb-5">
        CNED PET STORES
      </h1>
      <PetList
        handlePetAdoption={handlePetAdoption}
        petsToDisplay={myPetStore}
      />
    </div>
  );
}

export default App;
