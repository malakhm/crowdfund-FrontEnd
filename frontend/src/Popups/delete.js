import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { useSpring, animated } from '@react-spring/web';
import { FaDeleteLeft } from "react-icons/fa6";
import Buttony from '../Components/Button-yellow/Button.js';
import Buttonb from '../Components/Button-black/Button.js'
import Button from 'react-bootstrap/Button';
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

 const DeletePopper = ()=> {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'spring-popper' : undefined;

  return (
    <div>
     <Button variant="danger" aria-describedby={id} onClick={handleClick} >delete</Button>
      
      
      <Popper id={id} open={open} anchorEl={anchorEl} transition className='Delete-Popper-main'>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box sx={{ border: 1, p: 1, bgcolor: '#333333' }}>
             <p className='p-class-main-container'>Are you sure you want to delete ?</p>
      
              <form  className='button-container-main container d-flex'>
                <Buttonb type="submit">No</Buttonb>
                <Buttony type="reset"><b>Yes</b></Buttony>
              </form>
            
     
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default DeletePopper