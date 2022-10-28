import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import handleUpdate from "./UpdateCats";
import { Navigate, useNavigate } from "react-router-dom";

function GetCat({setCurrentCat}) {
    const [cats, setCats] = useState([]);

    const navigate = useNavigate();


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
                    <button onClick={() => {
                        setCurrentCat(currentCat);
                        navigate("/bcotya/updateCat");
                    }}>Update Entry</button>
                </div>
            )})}
        </>
    );
}

export default GetCat;