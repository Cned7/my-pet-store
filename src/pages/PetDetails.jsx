import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { PETS } from "../components/data";
import { Button, CardMedia } from "@mui/material";

function PetDetails() {
  let params = useParams();
  const [petInfo, setPetInfo] = useState(null);

  const getPetInfo = () => {
    let result = PETS.find((item) => item.id === Number(params.petId));
    if (result === undefined) {
      setPetInfo("Sorry, Pet info not found");
    } else {
      setPetInfo(result);
    }
  };

  useEffect(() => {
    getPetInfo();
  }, []);

  if (petInfo === null) {
    return (
      <div className="mx-auto">
        <h2 className="text-red-700 text-xl font-semibold">Loading Pet info</h2>
      </div>
    );
  }

  return (
    <section className="container mx-auto mt-20" style={{ height: "100vh" }}>
      <h1 className="text-2xl font-semibold text-green-800 mt-20 mb-5">
        {petInfo.type}
      </h1>
      <div
        className="bg-green-600 text-white rounded shadow shadow-green-300 mb-5"
        style={{ maxWidth: 380 }}
      >
        <CardMedia
          component="img"
          alt={petInfo.type}
          height="140"
          image={petInfo.photo}
        />
        <p className="p-3">{petInfo.description}</p>
      </div>
      <Link to={".."}>
        <Button size="small" color="success" variant="contained">
          Back
        </Button>
      </Link>
    </section>
  );
}

export default PetDetails;
