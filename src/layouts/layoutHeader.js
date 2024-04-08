import React from "react";
import HeaderAdmin from "../components/adminHome/headerAdmin";

const LayoutHeader = ({children}) =>{
    return(
        <div>
            <HeaderAdmin/>
            {children}
        </div>
    )
}

export default LayoutHeader