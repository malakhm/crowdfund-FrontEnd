import React from 'react'
import { Button } from "bootstrap";
const Buttony = ({ children }) => {
  return (
    <div>
         <button type="submit"  class="btn btn-warning">{children}</button>
    </div>
  )
}

export default Buttony