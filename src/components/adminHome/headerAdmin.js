import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap"

const HeaderAdmin = ({OpenSidebar}) => {
    const navigate = useNavigate()
    return (
        <header className='header'>
            <div className='menu-icon'>
                <i className="fa-solid fa-align-justify icon" onClick={OpenSidebar}></i>
            </div>
            <div className='header-left'>
                <i className="fa-solid fa-magnifying-glass icon"></i>
            </div>
            <div className='header-right'>
                {localStorage.getItem("token") ?

                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        className="rounded-circle"
                                        height="25"
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy"
                                    />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="admin/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        localStorage.clear()
                                        navigate('/')
                                    }}>Log out</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown> : <Button variant="primary" onClick={() => {
                                navigate("/login")
                            }}>Login</Button>
                        }
            </div>
        </header>
    )
}

export default HeaderAdmin