// import { useState } from "react";
// import axios from "axios";
import Button from "./Button";

export default function InputBar({name, placeholder, id}) {
    return (
            <div>
                <input className="border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name={name} placeholder={placeholder} id={id} />
            </div>
    );
}