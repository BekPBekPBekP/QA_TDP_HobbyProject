import { useEffect } from "react";
import { useState } from "react";

function CatForm({handleSubmit, currentCat}){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");
    const [nomination, setNomination] = useState("");

    useEffect(() => {
        if (!currentCat) return;
        if (currentCat.name) setName(currentCat.name);
        if (currentCat.age) setAge(currentCat.age);
        if (currentCat.breed) setBreed(currentCat.breed);
        if (currentCat.nomination) setNomination(currentCat.nomination);
    }, [currentCat]);

    return (
        <form onSubmit={(e) => handleSubmit(e, {name, age, breed, nomination})}>
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
    )
}

export default CatForm;