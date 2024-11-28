// src/services/petService.js

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {                      // Create the service function that will make a fetch call to the API.
    try {
        const res = await fetch(BASE_URL);        // Fetch call.
        return res.json();                           // .json() method to parse the response.
    } catch(err) {
        console.log(err);
    }
}

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',        // We're sending JSON data, so we attach a Content-Type header and specify that the data being sent is type 'application/json'.
            },
            body: JSON.stringify(formData),                // The formData, converted to JSON, is sent as the body. This will be received on the backend as req.body
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

const updatePet = async (formData, petId) => {
    try {
        const res = await fetch(`${BASE_URL}/${petId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',        // We're sending JSON data, so we attach a Content-Type header and specify that the data being sent is type 'application/json'.
            },
            body: JSON.stringify(formData),                // The formData, converted to JSON, is sent as the body. This will be received on the backend as req.body
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

export { 
    index, 
    create,
    updatePet
}
