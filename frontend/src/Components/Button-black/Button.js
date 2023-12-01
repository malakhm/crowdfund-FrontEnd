import React from 'react'
import { Button } from "bootstrap";
const Buttonb = ({ children }) => {
  return (
    <div>
         <button type="submit"  class="btn btn-dark text-white">{children}</button>
    </div>
  )
}

export default Buttonb