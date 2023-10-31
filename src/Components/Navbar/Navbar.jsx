import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="shadow-lg">

            <div className="max-w-screen-xl mx-auto ">

                <nav className="flex justify-between items-center">
                    <h4 className="text-3xl font-bold py-6">Phone Shop</h4>
                    <ul className="flex gap-5">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/favorites"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                }
                            >
                                Favorites
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>

                </nav>
            </div>

        </div>
    );
};

export default Navbar;