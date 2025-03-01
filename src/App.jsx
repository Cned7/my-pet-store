import React, { useState } from "react";
import "./index.css";
import PetList from "./components/PetList";
import { PETS } from "./components/data";
import {
  Select,
  OutlinedInput,
  FormControl,
  InputLabel,
  useTheme,
  MenuItem,
} from "@mui/material";

function getStyles(option, selectedOption, theme) {
  return {
    fontWeight:
      selectedOption === option
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

function App() {
  const [myPetStore, setMyPetStore] = useState(PETS);
  const theme = useTheme();
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handlePetAdoption = (pet_id) => {
    const updatedPets = myPetStore.map((pet) =>
      pet.id === pet_id ? { ...pet, isAdopted: true } : pet
    );
    setMyPetStore(updatedPets);
  };

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

  const locations = [
    "Lagos, Nigeria",
    "Abuja, Nigeria",
    "Jos, Nigeria",
    "Port-Harcourt, Nigeria",
    "Kano, Nigeria",
    "Owerri, Nigeria",
  ];

  // Refactored filtering logic using switch
  const filteredPets = myPetStore.filter((pet) => {
    let matchesType = true;
    let matchesLocation = true;

    switch (true) {
      case selectedType !== "" && pet.type === selectedType:
        matchesType = true;
        break;
      case selectedType !== "" && pet.type !== selectedType:
        matchesType = false;
        break;
      default:
        matchesType = selectedType === "";
    }

    switch (true) {
      case selectedLocation !== "" &&
        pet.location.trim().toLowerCase() ===
          selectedLocation.trim().toLowerCase():
        matchesLocation = true;
        break;
      case selectedLocation !== "" &&
        pet.location.trim().toLowerCase() !==
          selectedLocation.trim().toLowerCase():
        matchesLocation = false;
        break;
      default:
        matchesLocation = selectedLocation === "";
    }

    return matchesType && matchesLocation;
  });

  return (
    <div className="mt-10 mx-auto">
      <h1 className="md:text-2xl lg:text-4xl text-purple-950 text-center font-bold mb-5">
        CNED PET STORES
      </h1>

      {/* Dropdown Filters */}
      <div className=" mx-auto container flex flex-wrap gap-4 mb-6 justify-center lg:justify-end">
        {/* Pet Type Filter */}
        <FormControl sx={{ width: 250 }}>
          <InputLabel id="pet-type-label">Pet Type</InputLabel>
          <Select
            labelId="pet-type-label"
            id="pet-type-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            input={<OutlinedInput label="Pet Type" />}
            MenuProps={MenuProps}
          >
            <MenuItem value="">
              <em>All Types</em>
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

        {/* Location Filter */}
        <FormControl sx={{ width: 250 }}>
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            id="location-select"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            input={<OutlinedInput label="Location" />}
            MenuProps={MenuProps}
          >
            <MenuItem value="">
              <em>All Locations</em>
            </MenuItem>
            {locations.map((loc) => (
              <MenuItem
                key={loc}
                value={loc}
                style={getStyles(loc, selectedLocation, theme)}
              >
                {loc}
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

      {/* Display filtered pets */}
      <ul className="mt-4 text-center">
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
