// { ICONS } ==========================================================
import { AiOutlineLeft } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaChevronCircleDown } from "react-icons/fa";
import {
  IoNewspaperOutline,
  IoImageSharp,
  IoConstructOutline,
  IoCellularOutline,
  IoFileTrayFullSharp,
  IoPersonOutline,
  IoSettingsOutline,
  IoBan,
} from "react-icons/io5";

import { useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", icon: <MdDashboard /> },
    { title: "Pages", icon: <IoNewspaperOutline /> },
    { title: "Media", spacing: true, icon: <IoImageSharp /> },
    {
      title: "Projects",
      icon: <IoConstructOutline />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics", icon: <IoCellularOutline /> },
    { title: "Inbox", icon: <IoFileTrayFullSharp /> },
    { title: "Profile", spacing: true, icon: <IoPersonOutline /> },
    { title: "Settings", icon: <IoSettingsOutline /> },
    { title: "Logout", icon: <IoBan /> },
  ];

  return (
    <div
      className={`bg-blue-300 h-screen p-5 pt-8 ${
        open ? "w-52" : "w-24"
      } duration-300 relative`}
    >
      <AiOutlineLeft
        className={`bg-white text-dark-purple text-3xl
       rounded-full absolute -right-3 top-9 border-4
       cursor-pointer duration-300 ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Wijaya_Karya.svg"
          className={`w-15 h-10 text-4xl 
        rounded cursor-pointer block float-left mr-2 duration-500 ${
          open && "rotate-[360deg]"
        }`}
        />
        <h1
          className={`text-black origin-left font-bold font-medium duration-300 text-2xl ${
            !open && "scale-0"
          }`}
        >
          Wijaya Karya
        </h1>
      </div>

      <div
        className={`flex items-center rounded-md
        bg-slate-200 mt-6 px-4 ${!open ? "px-1 " : "px-4"}  py-2`}
      >
        <FaSearch
          className={`text-blue text-lg block
        float-left cursor-pointer ${open && "mr-2"}`}
        />

        <input
          type={"search"}
          placeholder="Search"
          className={`text-base bg-transparent w-full text-blue
          focus:outline-none duration-300 ${!open && "scale-0"}`}
        />
      </div>

      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <>
            <li
              key={index}
              className={`text-blue-500 tet-sm flex
            items-center gap-x-4 cursor-pointer p-2
            hover:bg-slate-200 rounded-md ${menu.spacing ? "mt-9" : "mt-2"} `}
            >
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <MdDashboard />}
              </span>
              <span
                className={`text-base font-medium flex-1 duration-200
              ${!open && "hidden"}`}
              >
                {menu.title}
              </span>
              {menu.submenu && open && (
                <FaChevronCircleDown
                  className={`duration-300 text-lg ${
                    submenuOpen && "rotate-180"
                  }`}
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                />
              )}
            </li>

            {menu.submenu && submenuOpen && open && (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li
                    key={index}
                    className="text-blue-500 text-sm flex
                  items-center gap-x-4 cursor-pointer p-2 px-5
                  hover:bg-slate-200 rounded-md"
                  >
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};
