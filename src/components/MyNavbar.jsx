import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  // const {cart , totalQuantity} =useSelector((state)=> state.allcart)

  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(getCartTotal());
  //   console.log(totalQuantity);
  // },[cart])

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center border p-2 mt-3 rounded-full backdrop-blur-xl shadow-sm ">
          <Link>
          <div>Navbar</div>
          </Link>
          <Link to="/">
          <div>All Product</div>
          </Link>
          <Link to="/Addcart">
          <div>Cart : 0 </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
