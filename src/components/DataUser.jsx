import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function DataUser () {
    const url = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        console.log("useEffect started o(*￣▽￣*)ブ");

        const fetchData = async () => {

            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setLoading(false);
                console.log("useEffect finished （；´д｀）ゞ");
            }
        };
        fetchData();
    }, []);

    console.log(data);

    if (loading) {
        return <div className="font-semibold text-xl mt-10">Loading data (´。＿。｀)</div>
    }

    if (error) {
        <div>Error: {error.className} (⊙x⊙;)</div>
    }

    return (
        <div className="flex justify-center items-center mt-10">
        <table className="text-center">
            <thead>
            <tr>
                <th className="border text-lg font-semibold px-30 py-4 bg-teal-600 text-white">Name</th>
                <th className="border text-lg font-semibold px-30 py-4 bg-teal-600 text-white">Lastname</th>
                <th className="border text-lg font-semibold px-30 py-4 bg-teal-600 text-white">Position</th>
                {/* <th className="border text-lg font-semibold px-30 py-4 bg-teal-600 text-white">Action</th> */}
            </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                        <tr>
                            <td className="border px-30 py-4">{item.name}</td>
                            <td className="border px-30 py-4">{item.lastname}</td>
                            <td className="border px-30 py-4">{item.position}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
    )
}
