import { data } from "autoprefixer";
import React from "react";
import { FaCaretDown,FaUser } from "react-icons/fa";

const NaveLinksss = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "About",
    link: "/",
  },
  {
    id: 1,
    name: "Contact",
    link: "/",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/#",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#",
  },
  {
    id: 3,
    name: "Grains",
    link: "/#",
  },
];

const NavBar = () => {
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3">
          {/* logo section */}
          <div className="font-bold text-3xl">Logo</div>
          {/* NavLinks Section */}
          <div>
            <ul className="sm:flex items-center gap-10">
              {NaveLinksss.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inlineblock
                                         hover:text-primary
                                          text-xl font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* simple dropdown and links */}
              <li className="cursor-pointer group  ">
                <a
                  href="#"
                  className="inlineblock
                                         hover:text-primary
                                          text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    DropDown
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                {/* Dropdown section */}
                <div
                  className="absolute z-[9999] 
                hidden
                group-hover:block
                 w-[200px] bg-white text-black shadow-md p-2"
                >
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={data.id}>
                        <a
                          href={link}
                          className="

                           inline-block w-full
                                                    rounded-md p-2
                                         hover:bg-primary/20
                                          text-xl "
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Dropdown section  end*/}

              </li>

              {/* login button section start */}
               <li>
                <button className="flex items-center gap-2 bg-secondary text-xl
                    rounded-md duration-300
                 h-[40px] text-white px-5 py-2 hover:scale-105">
                    <FaUser/>
                    My Account

                </button>

               </li>


               {/* login button section end */}

              {/* simple dropdown and links */}
            </ul>
          </div>
          {/* NavLinks Section  End*/}
        </div>
      </div>
    </>
  );
};

export default NavBar;
