import React, { useEffect, useState } from "react";
import { fetchAllFaculty, addNewFaculty, deleteFaculty, editFaculty } from "../../service/userService";
import Table from 'react-bootstrap/Table';
import AddFaculty from "./addFaculty";
import { toast } from "react-toastify";
import DeleteFaculty from "./deleteFaculty";
import EditFaculty from "./editFaculty";


const Faculty = () =>{

    const [isShowModalAdd, setIsShowModalAdd] = useState(0)
    const [isShowModalEdit, setIsShowModalEdit] = useState(false)
    const [isShowModalDelete, setIsShowModalDelete] = useState(false)
    const [dataEdit, setDataEdit] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [totalAccounts, setTotalFaculty] = useState(0)
    const [listAccount, setListAccount] = useState([])

    const handleClose = () => {
        setIsShowModalAdd(false)
        setIsShowModalEdit(false)
        setIsShowModalDelete(false)
    }
    const handleAddNew = async (account) => {
        try {
            const response = await addNewFaculty(account);
            if (response) {
                await getAllFaculty()
                setIsShowModalAdd(!isShowModalAdd)
                toast.success("Create success!")
            }
        } catch (error) {
            toast.error("Create fail")
        }
    }
    const handleEdit = (accountEdit) => {
        setDataEdit(accountEdit)
        setIsShowModalEdit(true)
    }
    const handleDelete = (accountDelete) => {
        setIsShowModalDelete(true)
        setDataDelete(accountDelete)
    }
    const handleEditFromModal = async (dataEdit) => {
        console.log(dataEdit)
        const id = dataEdit._id
        let newData = dataEdit
        delete newData.__v
        delete newData._id
        newData = { ...newData, id }
        try {
            const response = await editFaculty(newData);
            if (response) {
                await getAllFaculty()
                setIsShowModalEdit(!isShowModalEdit)
                toast.success("Edit success!")
            }
        } catch (error) {
            toast.error("Edit error")
        }
    }

    // const handleDeleteFromModal = (user) =>{
    //     let cloneListAccount = [...listAccount]
    //     cloneListAccount = cloneListAccount.filter(item => item._id !== user._id)
    //     setListAccount(cloneListAccount)
    // }
    const handleDeleteFromModal = async (user) => {
        try {
            const response = await deleteFaculty(user._id);
            if (response) {
                await getAllFaculty()
                setIsShowModalDelete(!isShowModalDelete)
                toast.success("Delete successful!!!")
            }
        } catch (error) {
            toast.error("Delete error")
        }
    }
    const getAllFaculty = async () =>{
        let res = await fetchAllFaculty()
        if (res) {
            setTotalFaculty(res.total)
            setListAccount(res.data)
            // setTotalPages(res.total_pages)
        }
    }
    useEffect(() => {
        getAllFaculty()
    }, [])

    return(
        <>
        <div className="account-container">
            <div className="account-list">
                <div className="button-account">
                    <h3>All Faculty</h3>
                    <button
                    className="btn btn-primary"
                    onClick={() => setIsShowModalAdd(true)}
                    >Add new</button>
                </div>
                <div className="table-account">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th style={{textAlign: "center"}}>Faculty</th>
                            <th style={{textAlign: "center"}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listAccount && listAccount.length > 0 &&
                                listAccount.map((item, index) => {
                                    return(
                                        <tr key={`faculty-${index}`}>
                                            <td style={{textAlign: "center"}}>{item.faculty_name}</td>
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
        <AddFaculty
            show={isShowModalAdd}
            handleClose={handleClose}
            handleAddNewFaculty={handleAddNew}
        />
        <DeleteFaculty
            show = {isShowModalDelete}
            handleClose = {handleClose}
            dataUserDelete = {dataDelete}
            handleAccountDelete = {handleDeleteFromModal}
        />
        <EditFaculty
            show={isShowModalEdit}
            dataEditAccount={dataEdit}
            handleClose={handleClose}
            handleAccountEdit={handleEditFromModal}
        />
        </>
    )
}

export default Faculty