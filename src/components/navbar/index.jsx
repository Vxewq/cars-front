import "./style.scss";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);  // Change this value based on when you want to trigger the style change
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="navbar-container">
        
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a className="logo" href="/">
        <img src="/logo.png" alt="" />
      </a>
      <Button variant="text"  className="flex flex-row align-middle justify-center"onClick={openDrawer}><Hamburger color="white" size={20} toggled={open} /></Button>

      <React.Fragment>
        <Drawer open={open} onClose={closeDrawer} className="drawer p-4">
          <ul>
            <li>
              <Link to={'/avaible-cars'}>Cars</Link>
            </li>
            <li>
              <div className="buttons">
                <Button className="order" variant="outlined">
                  Order
                </Button>
              </div>
            </li>
          </ul>
        </Drawer>
      </React.Fragment>
    </div>
    </div>
  );
}
