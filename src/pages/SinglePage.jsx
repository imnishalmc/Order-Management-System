import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function SinglePage() {
  const navigate = useNavigate()
  // console.log(navigate,"yo navigate ho")
  const { id } = useParams()//useparams is also the hook that is used to get the id from the url, ani yeslay kahilay ni object laireturn garxa
  //ani yo {} yo bhaneko object lai destructure gareko ho 
  const [food, setFood] = useState({})//use state bhitra ko yo chiai first check uta inspect garera kun chai format ma data aairako xa ta 
  const fetchFood = async () => {
    const response = await axios.get("http://localhost:5000/order/booking/" + id)
    setFood(response.data.meroOrder)//response.data is compulsory to use, ani meroOrder chai backend bata aayeko key ho, jun chai object ma xa


  }
  useEffect(() => {
    fetchFood()
  }, [])

  const deleteBook = async () => {
    const response = await axios.delete("http://localhost:5000/order/booking/" + id)
    alert("delete bhayo hai ta")
    if (response.status == 200) {
      alert("Deleted Sucessfully")
      navigate("/home")//yo naviagte chai mathi useNavigate ma stire gareko varible ho 
    }
    else {
      alert("Something went wrong ! ")
    }
  }

  return (
    <>
      <Navbar />
      {/* <Button title="this is the single page button" /> */}
      {/* {/* <h1>{food.C_name}</h1> */}
<div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
  <div className="px-4 py-5 sm:px-6">
    <h3 className="text-lg leading-6 font-medium text-gray-900">
     Order Details
    </h3>
    
  </div>
 <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Customer Id
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
               <p>{food.id}</p>

        </dd>
      </div>

  <div className="border-t border-gray-200">
    <dl>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Full name
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <h1>{food.C_name}</h1>
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
        Ordered Item
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
           <h2>{food.C_order}</h2>
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
        Price
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <h3>{food.C_price}</h3>
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
     Address
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
         
      <p>{food.C_address}</p>
        </dd>
      </div>
     
    </dl>
  </div>
</div>
      <button onClick={deleteBook} class="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg m-7">
        Delete
      </button>
      <Link to={`editpage/${food.id}`}><button  class="px-4  py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
       Edit
      </button>
      </Link>
    </>
  )
}

export default SinglePage;


