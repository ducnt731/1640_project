import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { editAccount, fetchAllFaculty } from '../../service/userService';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const EditAccount = (props) => {
    const {show, handleClose, handleAccountEdit, dataEditAccount} = props
    const [showImage,setShowImage]=useState()
    const [selectedFile, setSelectedFile] = useState(null);
    const [userData, setUserData] = useState(dataEditAccount)
    console.log(userData);
    const [listFaculty, setListFaculty] = useState([])

    const getAllFaculty = async () =>{
        let res = await fetchAllFaculty()
        if (res) {
            setListFaculty(res.data)
        }
    }
    useEffect(() => {
        getAllFaculty()
    }, [])

    useEffect(() => {
        if (dataEditAccount) {
            setUserData(dataEditAccount)
        }
    }, [dataEditAccount])

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserData({...userData,[name]:value})
    }
    const handleImage=(file)=>{
        const reader=new FileReader()
        reader.readAsDataURL(file.target.files[0])
        reader.onload = function () {
            setShowImage(reader.result)
            setUserData({...userData, userData:file.target.files[0]})
            
        };
        
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body-add">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={userData.name}  onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' value={userData.email} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" disabled className="form-control" value={userData.password}/>
                    </div>
                    <select className="form-select" value={userData.faculty}  name='faculty' onChange={handleChange}>
                        {listFaculty&&listFaculty.map((faculty)=>{
                            return  <option key={faculty._id} value={faculty._id}>{faculty.faculty_name}</option>
                        })}
                    </select>
                    <br/>
                    <select className="form-select" value={userData.role} name='role' onChange={handleChange}>
                        <option value={"student"}>Student</option>
                        <option value={"admin"}>Admin</option>
                        <option value={"marketing manage"}>Marketing Manage</option>
                        <option value={"marketing coordinator"}>Marketing Coordinator</option>
                    </select>
                
                    <div className="mb-3">
                        <h1  className="form-label">Image</h1>
                        <label htmlFor="formFile" value={userData.image} style={{width:"100px", height:"100px",borderRadius:"10px",overflow:"hidden",objectFit:'cover',objectPosition:"center"}} className='  d-flex align-items-center justify-content-center border'>
                            {showImage?<img src={showImage} alt=''/>:"+"}
                        </label>
                        <input className="form-control d-none" type="file" id="formFile" name='image' onChange={handleImage}/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={ async ()=>{
                // handleAccountEdit(userData)
                try {
                    const response = await editAccount(userData);
                    if (response) {
                        handleClose()
                        toast.success("Edit success")
                    }
                } catch (error) {
                    toast.error("Edit error")
                }
            }}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditAccount