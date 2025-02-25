import React, {useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@mantine/core";
import { X, Menu} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="h-16 p-4 sticky top-0 z-50 bg-white backdrop-blur-md opacity-80">
      <div className="flex items-center justify-between mx-6">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold"
        >
          NEWSAI
        </motion.h1>

        <ul className="md:flex hidden gap-4">
          {["Home", "Categories", "Channels", "About"].map((item) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
              key={item}
              className="text-gray-700"
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex space-x-4 items-center justify-center">
          <Link to='/login' className='hidden md:block'>
            <Button variant="white">Login</Button>
          </Link>
          <Link to='/register' className="hidden md:block"> 
            <Button variant="white">Register</Button>
          </Link>
          <button onClick={handleClick} className="">{isOpen ? <X/> : <Menu/>}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
