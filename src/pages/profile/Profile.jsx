import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex flex-col md:flex-row w-full h-full mt-[50px] gap-[40px]">
        <div className="flex flex-col w-full md:w-[300px] p-4 bg-white border rounded-lg shadow-md">
          <h2 className="font-semibold text-xl mb-6">Profile Navigation</h2>
          <div className="flex flex-col gap-4">
            <NavLink
              to="accountdetail"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "text-[#46A358]" : "text-black"
                } hover:text-[#46A358] transition-all`
              }
            >
              <FaUser className="mr-2" />
              Account Detail
            </NavLink>
            <NavLink
              to="product"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "text-[#46A358]" : "text-black"
                } hover:text-[#46A358] transition-all`
              }
            >
              <FaShoppingBag className="mr-2" />
              Product
            </NavLink>

            <Button onClick={handleLogout}>Log Out</Button>
          </div>
        </div>

        <div className="w-full p-6 bg-white border rounded-lg shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
