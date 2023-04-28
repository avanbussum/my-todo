import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Dropdown() {
    return (
        <div className="relative w-8 lg:max-w-sm">
            <IoMdArrowDropdown/>
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
        </div>
    );
}