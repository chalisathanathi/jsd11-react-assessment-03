import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="p-4 shadow-md bg-teal-500">
            <ul className="flex justify-end items-center gap-5 font-medium text-white mx-10">
                <li className="hover:text-teal-800"><Link to="/">Home</Link></li>
                <li className="hover:text-teal-800"><Link to="/owner">Owner</Link></li>
            </ul>
        </nav>
    );
}