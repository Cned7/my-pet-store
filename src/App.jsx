import React from "react";
import { useState } from "react";
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

function getStyles(type, petType, theme) {
  return {
    fontWeight: petType.includes(type)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

function App() {
  const [myPetStore, setMyPetStore] = useState(PETS);
  const theme = useTheme();
  const [petType, setPetType] = React.useState([]);

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

  // To handle pet type filering

  const handlePetTypeFilter = (event) => {
    const {
      target: { value },
    } = event;
    setPetType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="mt-10 mx-auto">
      <h1 className="md:text-2xl lg:text-4xl text-purple-950 text-center font-bold mb-5">
        CNED PET STORES
      </h1>
      <div className="container mx-auto bg-purple-500">
        <FormControl sx={{ m: 2, width: 285, float: "right" }}>
          <InputLabel id="demo-multiple-name-label">Pet Type</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={petType}
            onChange={handlePetTypeFilter}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {types.map((type) => (
              <MenuItem
                key={type}
                value={type}
                style={getStyles(type, petType, theme)}
              >
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <PetList
        handlePetAdoption={handlePetAdoption}
        petsToDisplay={myPetStore}
      />
    </div>
  );
}

export default App;
