import React, {useState} from 'react'
import axios from "axios";

function CloudinaryConfig() {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImage = e => {
        const files = e.target.files[0];
        const formData = new FormData();
        formData.append("upload_preset", "queue pay");
        formData.append("file", files);
        setLoading(true);

        axios.post("llkddldkldkldkkld", formData)
        .then(res => setImage(res.data.secure_url))
        .then(setLoading(false))
        .catch(err => console.log(err));
    }




    return (
        <div>
            <input type="file" onChange={uploadImage} />
            {loading ? <h1>Loading...</h1>: <img className="settings-image" src={image} />}
        </div>
    )
}

export default CloudinaryConfig
