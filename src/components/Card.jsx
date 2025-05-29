import { Link } from "react-router-dom";
import bhoklagyo from './bhoklagyo.jpeg';

function Card({ haha }) {
  return (
    <>
      <Link to={`/singlepage/${haha.id}`}>
     <div className=" bg-lime-50 flex  items-center justify-center min-h-screen bg-white-50 p-4">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm transition hover:shadow-2xl">
    {/* Food Image */}
    <div className="relative">
      <img
        src={bhoklagyo}
        alt="Food Image"
        className="w-full h-52 object-contain"
      />
      
    </div>

    {/* Content */}
    <div className="p-5">
      {/* Restaurant Name */}
      <p className="text-sm text-gray-500 font-medium">{haha.C_name}</p>

      {/* Food Name */}
      <h2 className="text-xl font-semibold text-gray-900 mt-1">
        {haha.C_order}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2">{haha.C_address}</p>

      {/* Orders and Quantity */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-md text-gray-900 font-semibold">
          Rs.{haha.C_price}
        </p>
        <div className="flex items-center space-x-2">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-md flex items-center justify-center text-lg font-bold">
            −
          </button>
          <span className="text-gray-800 font-medium">1</span>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-md flex items-center justify-center text-lg font-bold">
            +
          </button>
        </div>
      </div>

      {/* Order Button */}
      <button className="mt-5 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 rounded-lg shadow-md transition">
        View Order
      </button>
    </div>
  </div>
</div>


    </Link >
    </>
  )
}
export default Card;


  // <div className="flex items-center justify-center min-h-screen bg-grey-100 p-4">
  //         <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm transition hover:shadow-2xl">
  //           <img
  //             src={bhoklagyo}
  //             alt="Food Image"
  //             className="w-full h-52 object-cover rounded-t-xl"
  //           />



  //         </div>
  //         {/* Content */}
  //         <div className="p-5">
  //           {/* Restaurant Name */}
  //           <p className="text-sm text-gray-500 font-medium">{haha.C_name}</p>
  //           {/* Food Name */}
  //           <h2 className="text-xl font-semibold text-gray-900 mt-1">{haha.C_order}</h2>
  //           {/* Description */}
  //           <p className="text-gray-600 text-sm mt-2">{haha.C_address}</p>
  //           {/* Orders and Quantity */}
  //           <div className="flex items-center justify-between mt-4">
  //             <p className="text-md text-gray-900 font-semibold">Rs.{haha.C_price}</p>
  //             <div className="flex items-center space-x-2">
  //               <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-md flex items-center justify-center text-lg font-bold">−</button>
  //               <span className="text-gray-800 font-medium">1</span>
  //               <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-md flex items-center justify-center text-lg font-bold">+</button>
  //             </div>
  //           </div>
  //           {/* Order Button */}
  //           <button className="mt-5 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 rounded-lg shadow-md transition">
  //             View Order
  //           </button>
  //         </div>
  //       </div>
  //     </div>