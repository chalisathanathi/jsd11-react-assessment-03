// import { useState } from "react";
// import axios from "axios";
import Button from "./Button";

export default function InputBar({name, placeholder}) {
    // const[formData, setFormData] = useState({
    //     name: "",
    //     lastname: "",
    //     position: "",
    // });

    // const [loading, setLoading] = useState(false);

    // const handleChange = (e) => {
    //     const {name, lastname, position, value} = e.target;
    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //         [lastname]: value,
    //         [position]: value,
    //     }));
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //         const response = await axios.post("", formData)
    //     } catch (error){
    //         console.error("Error creating user", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // }
    return (
            <div>
                <input className="border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name={name} placeholder={placeholder} />
            </div>
    );
}