import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { PETS } from "./data";

import React from "react";

function PetCard(props) {
  return (
    <Card style={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt={props.type}
        height="140"
        image={props.photo}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          Name: {props.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Race: {props.race}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Type: {props.type}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Sex: {props.sex}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Location: {props.location}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {props.isAdopted === false ? (
            <span className="text-white font-bold bg-green-600 rounded px-2 py-1">
              Available
            </span>
          ) : (
            <span className="text-white font-bold bg-red-600 rounded px-2 py-1">
              Adopted
            </span>
          )}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          iure eaque ducimus voluptates. Alias unde nostrum neque consequatur
          nulla.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button
          size="small"
          color="success"
          variant="contained"
          disabled={props.isAdopted === false ? false : true}
          onClick={props.handlePetAdoption}
        >
          Adopt Pet
        </Button>
      </CardActions>
    </Card>
  );
}

export default PetCard;
