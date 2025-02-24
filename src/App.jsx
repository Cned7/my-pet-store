import React, { useState } from "react";
import "./index.css"; // Custom styles
import PetList from "./components/PetList"; // Pet list component
import { PETS } from "./components/data"; // Pet data array

// MUI components
import {
  Select,
  OutlinedInput,
  FormControl,
  InputLabel,
  useTheme,
  MenuItem,
} from "@mui/material";

// Function to apply custom styles to menu items
function getStyles(type, selectedType, theme) {
  return {
    fontWeight:
      selectedType === type
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

function App() {
  const [myPetStore, setMyPetStore] = useState(PETS); // Main pet data
  const theme = useTheme(); // MUI theme
  const [selectedType, setSelectedType] = useState(""); // For dropdown selection

  // Handle pet adoption (update isAdopted flag)
  const handlePetAdoption = (pet_id) => {
    const updatedPets = myPetStore.map((pet) =>
      pet.id === pet_id ? { ...pet, isAdopted: true } : pet
    );
    setMyPetStore(updatedPets);
  };

  // Dropdown menu props for MUI select
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // Pet types for dropdown
  const types = [
    "Alaskan Malamute",
    "Tibetan Mastiff",
    "German Shepherd",
    "Rhodesian Ridgeback",
    "Shiba Inu",
    "Border Collie",
    "Kangal Shepherd",
    "Labrador Retriever",
    "French Bulldog",
    "Boerboel",
  ];

  // Filter pets based on selected type
  const filteredPets = selectedType
    ? myPetStore.filter((pet) => pet.type === selectedType)
    : myPetStore;

  return (
    <div className="mt-10 mx-auto">
      <h1 className="md:text-2xl lg:text-4xl text-purple-950 text-center font-bold mb-5">
        CNED PET STORES
      </h1>

      {/* Dropdown filter */}
      <div className="container mx-auto bg-purple-500">
        <FormControl sx={{ m: 2, width: 285, float: "right" }}>
          <InputLabel id="single-select-label">Pet Type</InputLabel>
          <Select
            labelId="single-select-label"
            id="single-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            input={<OutlinedInput label="Pet Type" />}
            MenuProps={MenuProps}
          >
            <MenuItem value="">
              <em>All Pets</em>
            </MenuItem>
            {types.map((type) => (
              <MenuItem
                key={type}
                value={type}
                style={getStyles(type, selectedType, theme)}
              >
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Pet List Component */}
      <PetList
        handlePetAdoption={handlePetAdoption}
        petsToDisplay={filteredPets}
      />

      {/* Display filtered pets directly */}
      <ul>
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <li key={pet.id}>{pet.isAdopted ? "(Adopted)" : ""}</li>
          ))
        ) : (
          <li>No pets found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
