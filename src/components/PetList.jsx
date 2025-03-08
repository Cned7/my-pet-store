import { useState } from "react";
import PetCard from "./PetCard";

function PetList(props) {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16 p-2 md:p-4">
      <h2 className=" md:text-2xl text-purple-900 font-bold text-center mt-4 lg:mt-8">
        Our Array of Amazing Pets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {props.petsToDisplay.map((item) => {
          return (
            <PetCard
              key={item.id}
              name={item.name}
              photo={item.photo}
              race={item.race}
              type={item.type}
              sex={item.sex}
              location={item.location}
              isAdopted={item.isAdopted}
              handlePetAdoption={() => props.handlePetAdoption(item.id)}
              petId={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PetList;
