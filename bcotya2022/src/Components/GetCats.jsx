import axios from "axios";
import { useState, useEffect } from "react";
import handleUpdate from "./UpdateCats";
import { Navigate, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GetCat({ setCurrentCat }) {
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
            <Card id="nomination" className="mx-auto" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        {cats.map((currentCat) => {
                            return (
                                <div key={currentCat._id}>
                                    <p>{currentCat.name}</p>
                                    <p>{currentCat.age}</p>
                                    <p>{currentCat.breed}</p>
                                    <p>{currentCat.nomination}</p>
                                    <Button variant="danger" onClick={() => handleDelete(currentCat._id)}>Delete Entry</Button>
                                    <Button variant="info" onClick={() => {
                                        setCurrentCat(currentCat);
                                        navigate("/bcotya/updateCat");
                                    }}>Update Entry</Button>

                                </div>
                            )
                        })}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    );
}

export default GetCat;