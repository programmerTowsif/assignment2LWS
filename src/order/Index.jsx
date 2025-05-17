import React, { useState } from "react";
import Input from "./Input";
import Items from "./Items";
import Button from "./Button";
// react icons
import { FaPizzaSlice } from "react-icons/fa6";
import { GiRoastChicken } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
 

import { FaPlus } from "react-icons/fa";
// import { userList } from "../../data";
 


// data
const ListOfFood = [
  {
    FoodName: "Hamburger",
    amount: 3444,
    IconForFood: FaPizzaSlice,
    plusIcons: FaPlus,
    foodItem :0
  },
  {
    FoodName: "Chicken",
    amount: 3300,
    IconForFood: GiRoastChicken,
    plusIcons: FaPlus,
    foodItem :0
  },
  {
    FoodName: "Burger",
    amount: 500,
    IconForFood: FaHamburger,
    plusIcons: FaPlus,
    foodItem :0
  },
];
 
 
export default function Index() {
  const [items, setItems] = useState(ListOfFood);

  const totalAmoutn = items.reduce((sum, item) =>(  sum + item.amount * item.foodItem), 0);

  return (
   
    
      <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>

        {/* <!-- Customer Name Input --> */}
        <Input />

        {/* <!-- Choose Items --> */}
        
        <Items items={items} setItems={setItems} />

        {/* <!-- Place Order Button --> */}
        <Button totalAmount={totalAmoutn} />
      </div>
    
  );
}
