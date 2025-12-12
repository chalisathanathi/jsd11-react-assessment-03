import DataAdmin from "../components/DataAdmin";
import InputBar from "../components/InputBar";
import Button from "../components/Button";

export default function Admin () {
    return (
        <div>
            <h5 className="font-bold text-xl mt-10">Create User Here</h5>
            <div className="flex justify-center items-center gap-5 mt-10">
                <InputBar name="name" placeholder="Name" />
                <InputBar name="lastname" placeholder="Lastname" />
                <InputBar name="position" placeholder="Position"  />
                <Button>Save</Button>
            </div>
            <DataAdmin />
        </div>
    );
}