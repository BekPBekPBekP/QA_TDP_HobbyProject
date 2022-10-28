import axios from "axios";
import { useNavigate } from "react-router-dom";
import CatForm from "./CatForm";


function UpdateCat({ currentCat }) {

    const navigate = useNavigate();

    const handleUpdate = (e, newData) => {
        e.preventDefault();
        axios.patch("http://localhost:3011/bcotya/replace/" + currentCat._id, newData)
            .then(() => navigate("/bcotya/getAll"))
            .catch((err) => console.log(err.message));
    };

    return <CatForm handleSubmit={handleUpdate} currentCat={currentCat} />;
}

export default UpdateCat;