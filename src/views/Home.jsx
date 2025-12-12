import { useState } from "react";
import Button from "../components/Button";
import User from "./User";
import Admin from "./Admin";

export default function Home () {

    const [view, setView] = useState("")
    const [pageView, setPageView] = useState("")

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mt-8">Generation Thailand</h1>
            <h1 className="text-4xl font-bold mt-4 mb-8">
            {pageView ? `${pageView}` : "React - Assessment"}</h1>
            <div className="flex justify-center items-center gap-4">
            <Button onClick={()=>{setView("user"), setPageView("Home - User View")}}>User Home View</Button>
            <Button onClick={()=>{setView("admin"), setPageView("Home - Admin View")}}>Admin Home View</Button>
            </div>
            {view === "user" && <User />}
            {view === "admin" && <Admin />}
        </div>
    );
}