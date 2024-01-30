import * as React from "react";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { useSpring, animated } from "@react-spring/web";
// import { FaDeleteLeft } from "react-icons/fa6";
// import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import Buttony from "../Components/Button-yellow/Button.js";
// import Buttonb from '../Components/Button-black/Button.js'
// import { MdEditDocument } from "react-icons/md";
import Button from "react-bootstrap/Button";

import "../Popups/Styles/Edit.css";
import "./Styles/Delete.css";
const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const CreatorEditPopper = ({ creator, cb }) => {
  // console.log("this is creator in edir popper: ", creator)
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [form_data, setFormData] = useState({ // we set the initial data here so they are automatically added in edit form
    username: creator.username,
    first_name: creator.first_name,
    last_name: creator.last_name,
    email: creator.email,
    gender: creator.gender,
    phone_number: creator.phone_number,
    dob: creator.dob,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "spring-popper" : undefined;

  const handleCreatorEdit = async (e, id, form_data) => {
    e.preventDefault();
    // console.log("this is form data in edir popper: ", form_data)
    try {
      await axios.put(`http://localhost:8100/api/users/${id}`, form_data);
    } catch (error) {
      console.log("error editing creator: ", error);
    } finally {
      cb();
    }
  };

  const handleChange = (change_event) => {
    change_event.preventDefault();
    // console.log("this is handle change in edir popper: ")
    const { name, value } = change_event.target;
    setFormData((prevData) => ({
      //seting form data through getting the latest data in the state, which is an object
      ...prevData, //spreading the object properties
      [name]: value, //updating the property with key equals the name of the form input, assigning its new value to the value of input element
    }));
    cb();
  };

  return (
    <div>
      <Button
        variant="warning"
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        edit
      </Button>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        className="Delete-Popper-main"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box sx={{ border: 1, p: 1, bgcolor: "#333333" }}>
              <p className="p-class-main-container">Edit Here </p>
              <div className="button-container-main container d-flex">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <button className="bg-dark" type="reset" onClick={handleClick}>-</button>
                  <form className="form-popup d-flex flex-column ">
                    <label htmlFor="username">
                      <input
                        type="text"
                        name="username"
                        value={form_data.username}
                        onChange={(change_event) => handleChange(change_event)}
                      />
                      {/* it is very important to put name as the right key for the creator data ; we use formdata in the value here so it is given in its newest state value that we change with every input in form */}
                    </label>
                    <label htmlFor="First Name">
                      <input
                        type="text"
                        name="first_name"
                        value={form_data.first_name}
                        onChange={(change_event) => handleChange(change_event)}
                      />
                    </label>

                    <label htmlFor="Last Name">
                      <input
                        type="text"
                        name="last_name"
                        value={form_data.last_name}
                        onChange={(change_event) => handleChange(change_event)}
                      />
                    </label>

                    <label htmlFor="Email">
                      <input
                        type="Email"
                        id="email"
                        name="email"
                        value={form_data.email}
                        onChange={(change_event) => handleChange(change_event)}
                      />
                    </label>
                    <label htmlFor="Gender">
                      <input
                        type="text"
                        name="gender"
                        id="gender"
                        value={form_data.gender}
                        onChange={(change_event) => handleChange(change_event)}
                      />
                    </label>
                    <label htmlFor="Phone">
                      <input
                        type="text"
                        name="phone_number"
                        value={form_data.phone_number}
                        onChange={(change_event) => handleChange(change_event)}
                      />
                    </label>
                    <label htmlFor="DOB">
                      <input
                        type="date"
                        name="dob"
                        value={form_data.dob.split("T")[0]}
                        onChange={(change_event) => handleChange(change_event)}
                      />
                    </label>
                    <div className="button-container-main container d-flex">
                      <button className="bg-warning"
                        type="submit"
                        onClick={(e) =>
                          handleCreatorEdit(e, creator.id, form_data)
                        }
                      >
                        <b>Submit</b>
                      </button>
                    </div>
                  </form>

                  {/* <TextField id="input-with-sx" label="With sx" variant="standard" error= "false" inputProps="300" /> */}
                </Box>
              </div>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default CreatorEditPopper;
