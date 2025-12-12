import DataAdmin from "../components/DataAdmin";
import { useState } from "react";
import axios from "axios";

export default function Admin (){

    const url = "https://67eca027aa794fb3222e43e2.mockapi.io/members";
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        position: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData ((prev) => ({
            ...prev, [name]: value,
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(url, formData);
            console.log(formData, response.data);
            setFormData({
                name: "",
                lastname: "",
                position: "",
            });
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            console.log("save finished （＾∀＾●）ﾉｼ");
            setLoading(false);
        }
    }

    if (loading) {
        return <div className="font-semibold text-xl mt-10">Loading data (´。＿。｀)</div>
    }

    if (error) {
        <div>Error: {error.className} (⊙x⊙;)</div>
    }

    return (
        <form onSubmit={handleSave} className="flex flex-col justify-start items-center">
            <div className="w-[60%]"><h5 className="font-bold text-xl mt-10">Create User Here</h5></div>
            <div className="flex justify-center items-center gap-5 mt-10">
                <input name="name" type="text" className="border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" value={(formData.name)} onChange={handleChange} disabled={loading} />
                <input name="lastname" type="text" className="border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last name" value={formData.lastname} onChange={handleChange} disabled={loading} />
                <input name="position" type="text" className="border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Position" value={formData.position} onChange={handleChange} disabled={loading} />
                <button type="submit" className="bg-teal-300 px-6 py-1 rounded-3xl text-teal-700 font-bold hover:bg-teal-800 hover:text-white transition duration-300 ease-in-out" disabled={loading} >{loading ? "Saving. . ." : "Save"}</button>
            </div>
            <DataAdmin />
        </form>
    );
}