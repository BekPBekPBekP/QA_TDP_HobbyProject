import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function CreateCat() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");
    const [nomination, setNomination] = useState("");


    const submitForm = async (event) => {
        event.preventDefault();
        const res = await axios.post("http://localhost:3011/bcotya/createCat", { name, age, breed, nomination, });

        console.log("Successfully created nomination", res.data);

    };

    return (

        <form onSubmit={submitForm}>
            <label htmlFor="name">
                Name of Cat:
                <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <br />
            <br />
            <label htmlFor="age">
                Age of Cat:
                <input type="text" id="age" value={age} onChange={(event) => setAge(event.target.value)} />
            </label>
            <br />
            <br />
            <label htmlFor="breed">
                Breed of Cat:
                <input type="text" id="breed" value={breed} onChange={(event) => setBreed(event.target.value)} />
            </label>
            <br />
            <br />
            <label htmlFor="nomination">
                Reason why you are nominating this cat as Best Cat of the Year:
                <input type="text" id="nomination" value={nomination} onChange={(event) => setNomination(event.target.value)} />
            </label>
            <br />
            <br />
            <button type="submit"> Submit my Cat! </button>
        </form>
    );

}

CreateCat.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    breed: PropTypes.string.isRequired,
    nomination: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired
};

export default CreateCat;