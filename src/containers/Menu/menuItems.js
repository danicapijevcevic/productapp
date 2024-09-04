import { ImProfile } from "react-icons/im";
import {
  CiUser,
  CiSettings,
  CiBoxList,
  CiShoppingCart,
  CiCircleQuestion,
  CiHome,
} from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { IoDocumentTextOutline } from "react-icons/io5";
export const menuItems = [
  { id: 1, path: '/', name: "Home", heading: false, img: <CiHome /> },
  {
    id: 2,
    path: "/user-profile",
    name: "User profile",
    heading: false,
    img: <CiUser />,
  },
  // {
  //   id: 3,
  //   path: "/settings",
  //   name: "Settings",
  //   heading: false,
  //   img: <CiSettings />,
  // },
  //{ id: 4, name: "Products", heading: true, img: <CiBoxList /> },
  // {
  //   id: 5,
  //   path: "/products-settings",
  //   name: "Products settings",
  //   heading: false,
  //   img: <VscSettings />,
  // },
  {
    id: 6,
    path: "/cart",
    name: "Cart",
    heading: false,
    img: <CiShoppingCart />,
  },
  {
    id: 7,
    path: '/privacy-policy',
    name: "Privacy Policy",
    heading: true,
    img: <IoDocumentTextOutline />,
  },
  { id: 8, path: '/faq', name: "FAQ", heading: true, img: <CiCircleQuestion /> },
];
