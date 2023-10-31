/* eslint-disable react/prop-types */

import PhoneCart from "../PhoneCart/PhoneCart";


// eslint-disable-next-line react/prop-types
const Phones = ({ phones }) => {
    // console.log(phones)
    return (
        <div>
            <h3 className="text-4xl font-bold text-center py-5">All Categories Phones: {phones.length}</h3>
            <div className="flex justify-center lg:justify-between">

                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 lg:gap-14">

                    {
                        phones?.map(phone => <PhoneCart key={phone.id} card={phone}></PhoneCart>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Phones;