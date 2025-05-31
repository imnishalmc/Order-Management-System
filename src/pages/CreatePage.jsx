import axios from "axios";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreatePage() {
 const navigate=useNavigate()
  //using the usestate hook nd that onchange function ,event ko kura yo sabai nai chaione approach of accesing the datafrom the input field
  //     const [customerName, setCustomerName] = useState("")
  //    const[customerOrder, setCustomerOrder] = useState("")
  //     const[price,setPrice]= useState("")
  //     const[address,setAddress]= useState("")
  //     console.log(customerName,customerOrder,price,address)

  //so yo code from 7 to 8 ma chai hamlay every entity ko lagi usestate use garem jo ali jhyauu hunxa every time ko lagi so the next approach is (usestate bhitra nai object rakhni )yautai bhaada ma multiple input field rakhera garni jastai in object form ma

  //second approach (can add multiple input field in one state)

  const [orderDetails, setOrderDetails] = useState({
    C_id:"",
    C_name:"", 
    C_order:"", 
    C_price:"", 
    C_address:""
  });
  //yo chai object ma aauxa ani yo object ma chai sabai input field ko value aauxa
  //so mailay yo function  lai uta tala html tag bhitra use garey as we know tag bhitra function use garda tya sadhai event bhanni kura aauxa aba mailay tala call garey bhaney yo line 26 ma tyo event aauxa
  const handleChange = (event) => {
    let { name, value } = event.target;

    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

 

  //backend ma data  through the axios garda chai you have to pass the two thing \
  //1. url 2. data (data is the object that we are sending to the backend jun lai axios le json format ma lagxa )
  
 const submitOrder = async (event) => {
    event.preventDefault(); //preventing the default behaviour of the form submission,matlab yo garesi page load huni aafai wala kura hatxa ani form ko data pani aba url ma jadaina  
    console.log("form submit bhayo");
    const response = await axios.post("http://localhost:5000/order/booking",orderDetails);
    if(response.status==200){
      alert("Order Added sucessfully ")
      navigate("/home")
    }
    else{
      alert("Something went wrong")
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={submitOrder}>
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Here we goooo</div>
        <div className="mt-3 text-center text-4xl font-bold">Add Order</div>
        <div className="p-8">
          <div className="flex gap-4">
            <input
              type="text"
              onChange={handleChange}
              name="C_id"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
              placeholder="Customer id *"
            />
            <input
              type="name"
              onChange={handleChange}
              name="C_name"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
              placeholder="Customer name *"
            />
          </div>

          <div className="flex gap-4">
            <input
              onChange={handleChange}
              type="text"
              name="C_order"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
              placeholder="customer order*"
            />
            <input
              onChange={handleChange}
              type="text"
              name="C_price"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
              placeholder="price*"
            />
            
            <input
              onChange={handleChange}
              type="text"
              name="C_address"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
              placeholder="Paid/Unpaid *"
            />
          </div>

          <div className="text-center">
            <button
              onClick={submitOrder}
              className="px-8 py-4  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg m-10"
            >
              Add Orders
            </button>
          </div>
        </div>
      </div>
    
      </form>
    </>
  );
}
export default CreatePage;

{
  /* <div className>
    <textarea name="textarea" id="text" cols={30} rows={10} className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" defaultValue={""} placeholder="What our Custmer have to Say" />
</div> */
}
