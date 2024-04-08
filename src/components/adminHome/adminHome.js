import React, { useState } from "react";
import "../../style/adminHome.css"

const AdminHome = () => {

    const [isShowLike, setIsShowLike] = useState(false)

    return(
        <div className="home-container">
            <div className="title">
                <h1>Welcome {localStorage.getItem("name")} to Admin Home</h1>
                <h4>Have a good day!</h4>
            </div>
            <div className="classify">
                <div className="top-classify">
                    <h5>Classify</h5>
                </div>
                <div className="bot-classify">
                    <select className="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="event">
                <div className="avatar">
                    <i className="fa-solid fa-circle-user"></i> Username
                </div>
                <div className="category">
                    <span>Title</span>
                    <span>Event</span>
                    <span>Create At</span>
                </div>
                <div className="event-body">
                    <div className="event-content">
                        <p>this is paragraph</p>
                        <p>this file upload</p>
                        <div className="like-icon">
                            <i className={isShowLike === true ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"}
                                onClick={() => setIsShowLike(!isShowLike)}
                            ></i> 
                            <div className="like-comment">Like</div> 
                            <i className="iconHome fa-regular fa-comment"></i>
                            <div className="like-comment">Comments</div>
                        </div>
                    </div>
                    <div className="event-comment">
                        <i className=" fa-solid fa-circle-user icon_event"></i>
                        <div className="comment mb-3">
                            <textarea className="form-control" placeholder="Write comment here..."></textarea>
                        </div>
                        <i className="fa-solid fa-paper-plane" style={{paddingTop: "15px"}}></i>
                    </div>
                    <i className="fa-solid fa-circle-user"></i> User name
                    <p style={{paddingLeft: "40px"}}>comment</p>
                </div>
            </div>
        </div>
    )
}

export default AdminHome