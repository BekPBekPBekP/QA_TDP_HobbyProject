import axios from "axios";
import { useState, useEffect } from "react";

const handleUpdate = (id, newData) => {
    axios.patch("http://localhost:3011/bcotya/replace/:id", { newData})
        .then((response) => {
            return response.data;
        })
        .catch((err) => console.log(err.message));
    console.log("ID:", id);

}


export default handleUpdate;