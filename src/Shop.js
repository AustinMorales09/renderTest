import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch pets data from API
    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('https://render-backend-test-2sgf.onrender.com/pets'); // Replace with your API URL
                setPets(response.data);
                console.log(response.data)
                setLoading(false);
            } catch (error) {
                setError('Error fetching pets data');
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    if (loading) {
        return <p>Loading pets...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Pets List</h1>
            <ul>
                {pets.map((pet) => (
                    <li key={pet._id}>
                        <h3>{pet.name}</h3>
                        <img src={pet.imageURL} alt="" />
                        <p>Category: {pet.category}</p>
                        <p>Age: {pet.age}</p>
                    </li>
                ))}
            </ul>
            <h1>Some more text</h1>
        </div>
    );
};

export default Shop;
