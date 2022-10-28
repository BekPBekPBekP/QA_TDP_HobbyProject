import axios from "axios";
import CatForm from "./CatForm";


function CreateCat() {

    const submitForm = async (event, newCat) => {
        event.preventDefault();

        const res = await axios.post("http://localhost:3011/bcotya/createCat", newCat);

        console.log("Successfully created nomination", res.data);

    };

    return <CatForm handleSubmit={submitForm} />;

}

export default CreateCat;