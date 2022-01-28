import React, { useRef } from "react";
import Image from "next/image";
import googleLogo from "../assets/googleLogo.png";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import ProfilePic from "../assets/profilePic.jpg";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src={googleLogo}
          alt="Google Logo"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form
          action=""
          className="flex flex-grow items-center px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl"
        >
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-7 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex " />
          <button hidden type="submit" className="" onClick={search}>
            Search
          </button>
        </form>
        <Avatar url={ProfilePic} className="ml-auto" />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
