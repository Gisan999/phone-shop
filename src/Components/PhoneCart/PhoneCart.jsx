/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const PhoneCart = ({ card }) => {
    // console.log(card)
    const {image, phone_name, price, brand_name, id, rating} = card;
    return (
        <div>
            <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className=" h-72 w-80 object-cover"
                    />
                </div>
                <div className="px-6 pt-3">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                           {brand_name}
                        </p>
                      
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                           Price: ${price}
                        </p>
                    </div>
                    <p className=" font-sans text-base font-medium  text-blue-gray-900 ">
                           {phone_name}
                        </p>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {rating}
                    </p>
                </div>
                <div className="p-6 pt-4">
                  <Link to={`/phones/${id}`}>
                  <button
                        className="block text-white w-full select-none rounded-lg bg-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                       See Details
                    </button>
                  </Link>
                </div>
            </div>
        </div>
    );
};

export default PhoneCart;