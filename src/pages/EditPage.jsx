import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { data, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function EditPage() {
 const navigate= useNavigate()
    const { id } = useParams();
    const [food, setFood] = useState({});

    const fetchFood = async () => {
        const response = await axios.get("http://localhost:5000/order/booking/" + id);
        setFood(response.data.meroOrder);
        console.log(response.data)
    }
    useEffect(() => {
        fetchFood()
    }, [])
    const handelChange = (event) => {
        let { name, value } = event.target;
        setFood({
            ...food,
            [name]: value
        })
    };
console.log(food,"edit ko food")

    const editOrder = async (event) => {
        event.preventDefault()
        const response = await axios.patch("http://localhost:5000/order/booking/" + id, food)
        if (response.status == 200) {
            alert("edited sucessfully")
                navigate("/home")
        } else {
            alert("something went wrong")
        }

    }
    return (
        <>
            <Navbar />
            <form onSubmit={editOrder}>
                <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
                    <div className="mt-10 text-center font-bold">Here we goooo</div>
                    <div className="mt-3 text-center text-4xl font-bold">Edit Order</div>
                    <div className="p-10">
                        <div className="flex gap-4">
                            <input type="text" onChange={handelChange} value={food.C_id} name="C_id" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5" placeholder="Customer id *" />
                            <input type="order" onChange={handelChange} name="C_name" value={food.C_name} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5" placeholder="Customer name *" />
                        </div>
                        <div className="flex gap-4">
                            <input type="text" onChange={handelChange} name="C_order" value={food.C_order} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5" placeholder="customer order *" />
                            <input type="price" onChange={handelChange} name="C_price" value={food.C_price} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm  m-5" placeholder="price*" />
                        </div>

                        <div className="flex gap-">
                            <input type="text" onChange={handelChange} name="C_address" value={food.C_address} className="w-full rounded-md border border-slate-300 bg-white px-5 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 m-3" placeholder="customer address *" />
                        </div>

                        <div className="text-center">
                            <button className="px-8 py-4  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg m-4"
                            >
                                Confirm Edits
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}

export default EditPage;