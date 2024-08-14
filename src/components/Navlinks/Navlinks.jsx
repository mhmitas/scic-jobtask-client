import { NavLink } from "react-router-dom";

export const navlinks = <>
    <NavLink className={({ isActive }) => `py-1 px-3 rounded-md hover:bg-info hover:bg-opacity-15 ${isActive ? 'bg-primary bg-opacity-20' : ''}`} to={"/"}>Home</NavLink>
</>