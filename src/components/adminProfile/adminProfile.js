import React from "react";
import "../../style/adminProfile.css"

const AdminProfile = () =>  {
    return(
        <div className="profile-container">
            <div className="profile-form">
                <div className="profile-header">
                    <img className="image rounded-circle" src="https://th.bing.com/th/id/OIP.Rof32HGHSBxTTr_zkDS10AAAAA?w=307&h=167&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
                </div>
                <div className="profile-body">
                    <div>name</div>
                    <div>email</div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile