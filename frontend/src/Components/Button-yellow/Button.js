
import React from 'react'
import { Button } from "bootstrap";
const Buttony = ({ children }) => {
  return (
    <div>
         <button type="reset"  className="btn btn-warning">{children}</button>
    </div>
  )
}

export default Buttony
