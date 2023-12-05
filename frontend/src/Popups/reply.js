import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { useSpring, animated } from '@react-spring/web';

import Buttony from '../Components/Button-yellow/Button.js';
import { FaReplyAll } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

import '../Popups/Styles/Edit.css'
import './Styles/Delete.css'
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

 const ReplyPopper = ()=> {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  }
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'spring-popper' : undefined;

  return (
    <div>
     <FaReplyAll className='reply-message-icon text-warning w-25' aria-describedby={id} type="button" onClick={handleClick} >edit</FaReplyAll>
      
      <Popper id={id} open={open} anchorEl={anchorEl} transition className='Delete-Popper-main'>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box sx={{ border: 1, p: 1, bgcolor: '#333333' }}>
             <p className='p-class-main-container'>Reply to the Message: </p>
            <div className='button-container-main container d-flex'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <form className='form-popup d-flex flex-column '>
                    
                   
                    <label for="message">
                    <textarea id='message' name="message" placeholder='Message here...'/>

                    </label>
                    <div className='button-container-main container d-flex'>
     
            <Buttony><b>Submit</b></Buttony>
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
}

export default ReplyPopper