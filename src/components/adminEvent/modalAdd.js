import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {formatDate} from "../../service/formatDate"

const ModalAdd = (props) => {

    const { show, handleClose, handleAddNewEvent } = props
    const [data, setData] = useState({
        "event_name": "",
        "first_closure_date": "",
        "final_closure_date": "",
    })
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>New Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body-add">
                <div className="mb-3">
                        <label className="form-label">Event's Name</label>
                        <input 
                            type="text"
                            className="form-control" required
                            name="event_name"
                            value={data.event_name && data.event_name} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date start</label>
                        <input 
                            type="date" 
                            className="form-control"
                            name="first_closure_date"
                            value={data.first_closure_date && formatDate(new Date(data.first_closure_date))} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Deadline of event</label>
                        <input 
                            type="date" 
                            className="form-control"
                            name="final_closure_date"
                            value={data.final_closure_date && formatDate(new Date(data.final_closure_date))} 
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={() => handleAddNewEvent(data)}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAdd