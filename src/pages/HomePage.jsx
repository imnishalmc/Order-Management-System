import Button from "../components/Button";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";


import { useEffect, useState } from "react";

function HomePage() {
  const [food, setFood] = useState([])
  console.log(food, "yo food ho")
  //use state bhitra chai backend bata jun format ma data aako tei 
  //format ma rakhna parcha, ahilay response the obj ho tara tesko key data jun array format ma xa that why empty array rakhni 

  const fetchFood = async () => {
    const response = await axios.get("http://localhost:5000/order/booking")
    setFood(response.data.datas)//yeti garesi sabai data haru food ma basyo,  and have to show the data in the browser
  }

  useEffect(() => {
    fetchFood()
  }, [])
  return (

    <>

      <Navbar />
      <div className=" flex-wrap justify-center gap-10 p- bg-gray-300 min-h-screen" >
        {/* 
        {
          //nisha is the iteative varible 
          //yo code le chai browser ma dekhaauxa ani yo case ma hamlay 
          //map function use garem to display it in the browser because yo ma multiple 
          //data haru aako xa but yuata matrai object ko xa bhaney direct ganri
          food.map((nisha) => {
            return (
              <>
                <Card key={nisha.id} haha={nisha} />
              </>
            )
          }) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 bg-gray-300 min-h-screen">
          {food.map((nisha) => (
            <Card key={nisha.id} haha={nisha} />
          ))}
        </div>
        
        
        
        


      </div>
    </>
  );
}
export default HomePage;
