export default function Button({children, onClick}) {
    return(
        <div>
            <button onClick={onClick} className="bg-teal-300 px-6 py-1 rounded-3xl text-teal-700 font-bold hover:bg-teal-800 hover:text-white transition duration-300 ease-in-out">{children}</button>
        </div>
    );
}