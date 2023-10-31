/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Phone = () => {
const [phone, setPhone] = useState({});

    const {id} = useParams();
    console.log(id);

    const phones = useLoaderData();
    // console.log(phones)

    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === id)
       setPhone(findPhone)
    },[id, phones])
   
    console.log(phone)
    const {brand_name, color} = phone;
    return (
        <div className="max-w-screen-xl mx-auto mt-12">
            <h2>here is your phone</h2>
           <h3>{brand_name}</h3>
           <h4 className={`text-xl font-bold text-${color}-400`}>my name is gisann</h4>
        </div>
    );
};

export default Phone;