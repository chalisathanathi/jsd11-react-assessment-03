// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

export default function DataTable () {
    return (
        <div className="flex justify-center items-center mt-10">
        <table className="text-center">
            <thead>
            <tr>
                <th className="border text-lg font-semibold px-10 py-1 bg-teal-600 text-white">Name</th>
                <th className="border text-lg font-semibold px-10 py-1 bg-teal-600 text-white">Lastname</th>
                <th className="border text-lg font-semibold px-10 py-1 bg-teal-600 text-white">Position</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border px-10 py-1">Alice</td>
                <td className="border px-10 py-1">Lalaland</td>
                <td className="border px-10 py-1">Cashier</td>
            </tr>
            <tr>
                <td className="border px-10 py-1">Beatrice</td>
                <td className="border px-10 py-1">Dreamland</td>
                <td className="border px-10 py-1">Waitress</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}
