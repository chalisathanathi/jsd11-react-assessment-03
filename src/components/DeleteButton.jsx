export default function DeleteButton({children, onClick}) {
    return(
        <div>
            <button onClick={onClick} className=" px-6 py-1 rounded-3xl text-teal-700 font-bold hover:text-red-400 transition duration-300 ease-in-out">{children}</button>
        </div>
    );
}