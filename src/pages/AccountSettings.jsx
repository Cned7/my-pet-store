import React, { useState } from "react";
import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../components/context/UserContextProvider";
import { Button } from "@mui/material";

function AccountSettings() {
  const { user, setUser } = useContext(UserContext);
  const [value, setValue] = useState({
    name: "",
    age: " ",
  });

  const updateUserName = () => {
    setUser(value);
    setValue({ name: "", age: "" });
  };

  return (
    <section className="container mx-auto" style={{ height: "100vh" }}>
      <h1 className="text-2xl font-semibold text-green-800 text-center mt-20">
        Change Account Settings
      </h1>
      <h2 className="text-xl font-semibold text-green-800 text-center mt-10">
        My Name: {user.name}
      </h2>
      <h2 className="text-xl font-semibold text-green-800 text-center">
        My Age: {user.age}
      </h2>
      <div className="flex flex-col gap-5 mt-10" style={{ maxWidth: 380 }}>
        <input
          value={value.name}
          placeholder={user.name}
          type="text"
          onChange={(event) => setValue({ ...value, name: event.target.value })}
          className="outline-none bg-green-300 rounded p-2"
        />
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={updateUserName}
        >
          Update Details
        </Button>
      </div>
      <div className="flex flex-col gap-5 mt-10" style={{ maxWidth: 380 }}>
        <input
          value={value.age}
          placeholder={user.age}
          type="number"
          onChange={(event) => setValue({ ...value, age: event.target.value })}
          className="outline-none bg-green-300 rounded p-2"
        />
      </div>
      <Link to={".."}>Back</Link>
    </section>
  );
}

export default AccountSettings;
