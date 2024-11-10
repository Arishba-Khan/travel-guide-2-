import Link from "next/link";
import React from "react";
import "./navbar.css"; // Importing the custom CSS file for this component

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <a className="logo">
          <span className="logo-text">Journey Journal</span>
        </a>
        <nav className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="#reason" className="nav-link">Reason</Link>
          <Link href="#view" className="nav-link">View Point</Link>
          <Link href="#contact" className="nav-link">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
