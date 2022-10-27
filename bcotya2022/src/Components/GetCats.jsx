import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import handleUpdate from "./UpdateCats";

function GetCat({setCurrentCat}) {
    const [cats, setCats] = useState([]);


    useEffect(() => {
        const showCats = async () => {
            const res = await axios.get("http://localhost:3011/bcotya/getAll");
            setCats(res.data);
        };

        showCats();

    });

    const handleDelete = (id) => {
        axios.delete("http://localhost:3011/bcotya/delete/" + id,)
        .then((response) => {
            return response.data;
        })
        .catch((err) => console.log(err.message));
        console.log("ID:", id);
    }
    return (
        <>
            {cats.map((currentCat) => {
                return (
                <div key= {currentCat._id}>
                    <p>{currentCat.name}</p>
                    <p>{currentCat.age}</p>
                    <p>{currentCat.breed}</p>
                    <p>{currentCat.nomination}</p>
                    <button onClick={() => handleDelete(currentCat._id)}>Delete Entry</button>
                    <button onClick={() => setCurrentCat(currentCat)}>Update Entry</button>
                </div>
            )})}
        </>
    );
}

export default GetCat;