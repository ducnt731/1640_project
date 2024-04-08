import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import "../../style/manageAccounts.css"
import AddAccount from "./addAccount";
import EditAccount from "./editAccount";
import DeleteAccount from "./deleteAccount";
import { fetchAllUser,addNewAccount, deleteAccount, editAccount } from "../../service/userService"
import { toast } from 'react-toastify';
const Account = () => {
    const [isShowModalAdd, setIsShowModalAdd] = useState(0)
    const [isShowModalEdit, setIsShowModalEdit] = useState(false)
    const [isShowModalDelete, setIsShowModalDelete] = useState(false)
    const [dataEdit, setDataEdit] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [totalAccounts, setTotalAccounts] = useState(0)
    const [listAccount, setListAccount] = useState([])

    const handleClose = () => {
        setIsShowModalAdd(false)
        setIsShowModalEdit(false)
        setIsShowModalDelete(false)
    }

    const handleEdit = (accountEdit) => {
        setDataEdit(accountEdit)
        setIsShowModalEdit(true)
    }
    const handleDelete = (accountDelete) => {
        setIsShowModalDelete(true)
        setDataDelete(accountDelete)
    }
    const handleEditFromModal = async (userData) => {
        // const id = dataEdit._id
        // let newData = dataEdit
        // delete newData.__v
        // delete newData._id
        // newData = { ...newData, id }
        // try {
        //     const response = await editAccount(newData);
        //     if (response) {
        //         await getAllUser()
        //         setIsShowModalEdit(!isShowModalEdit)
        //         toast.success("Edit success!")
        //     }
        // } catch (error) {
        //     toast.error("Edit error")
        // }
        try {  
            let check=false
        console.log(userData.image);
            Object.keys(userData).map(key=>{
            if (userData[key]==''){
                check=true
            }
        })
        if(!check){
            const formData=new FormData()
            Object.keys(userData).map(key=>{
                formData.append(key,userData[key])
            })
            const res=await editAccount(formData);
            if(res){
                if(res.status!=200){
                    toast.success("Update sucessful!!!")
                    await getAllUser()
                    setIsShowModalEdit(!isShowModalEdit)
                }else{
                    console.log(userData);
                    await getAllUser()
                    setIsShowModalEdit(!isShowModalEdit)
                }
            }
        }else{
            toast.error('Please enter all field!')
        }
        } catch (error) {
            
        }
    }
    const handleDeleteFromModal = async (dataEdit) =>{
        try {
            const response = await deleteAccount(dataEdit._id);
            if (response) {
                await getAllUser()
                setIsShowModalDelete(!isShowModalDelete)
                toast.success("Delete successful!!!")
            }
        } catch (error) {
            toast.error("Delete error")
        }
    }
    const getAllUser = async () =>{
        let res = await fetchAllUser()
        if (res) {
            setTotalAccounts(res.total)
            setListAccount(res.data)
            // setTotalPages(res.total_pages)
        }
    }
    const handleAddAccount=async (userData)=>{
        try {  
            let check=false
            Object.keys(userData).map(key=>{
            if (userData[key]==''){
                check=true
            }
        })
        if(!check){
            const formData=new FormData()
            Object.keys(userData).map(key=>{
                formData.append(key,userData[key])
            })
            const res=await addNewAccount(formData);
            if(res){
                if(res.status!=200){
                    toast.success("Add sucessful!!!")
                    await getAllUser()
                    setIsShowModalAdd(!isShowModalAdd)
                }else{
                    await getAllUser()
                    setIsShowModalAdd(!isShowModalAdd)
                }
            }
        }else{
            toast.error('Please enter all field!')
        }
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getAllUser()
    }, [])

    return(
        <>
        <div className="account-container">
            <div className="account-list">
                <div className="button-account">
                    <h3>All Account</h3>
                    <button
                    className="btn btn-primary"
                    onClick={() => setIsShowModalAdd(true)}
                    >Add new</button>
                </div>
                <div className="table-account">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Faculty</th>
                            <th>Role</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listAccount && listAccount.length > 0 &&
                                listAccount.map((item, index) => {
                                    console.log(item);
                                    return(
                                        <tr key={`users-${index}`}>
                                            <td><img src={item.image} style={{width: "80px", display: "block", margin: "auto"}}/></td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.faculty?.faculty_name}</td>
                                            <td>{item.role}</td>
                                            <td>
                                                <div className="button-action">
                                                    <button className="btn btn-warning" onClick={() => handleEdit(item)}>Edit</button>
                                                    <button className="btn btn-danger" onClick={() => handleDelete(item)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        <AddAccount
            show = {isShowModalAdd}
            handleClose = {handleClose}
            handleAddNewAccount = {handleAddAccount}
        />
        <EditAccount
            show = {isShowModalEdit}
            dataEditAccount = {dataEdit}
            handleClose = {handleClose}
            handleAccountEdit = {handleEditFromModal}
        />
        <DeleteAccount
            show = {isShowModalDelete}
            handleClose = {handleClose}
            dataUserDelete = {dataDelete}
            handleAccountDelete = {handleDeleteFromModal}
        />
        </>
    )
}

export default Account