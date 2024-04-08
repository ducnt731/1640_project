import React, { useEffect } from "react";
import AdminHome from "../components/adminHome/adminHome"
import LayoutAdmin from "../layouts/layoutAdmin"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Admin = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('role') != "admin") {
            toast.error("You must be admin to render this site!")
            navigate('/')
        }
    }, [])
    return(
        <LayoutAdmin>
            <AdminHome/>
        </LayoutAdmin>
    )
}

export default Admin