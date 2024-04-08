import axios from './customize-axios'

const fetchAllUser = () => {
    return axios.get("/all-user")
}

const addNewAccount = (userData) => {
    return axios.post("/create-user", userData)
}

const editAccount = (userData) => {
    return axios.put("/update-user", {userData})
}

const deleteAccount = (_id) => {
    return axios.delete(`/delete-user/${_id}`)
}

const fetchAllFaculty = () => {
    return axios.get("/all-faculty")
}

const addNewFaculty = (userData) => {
    return axios.post("/create-faculty", userData)
}

const editFaculty = (userData) => {
    return axios.put("/update-faculty", userData)
}

const deleteFaculty = (userId) => {
    return axios.delete(`/delete-faculty/${userId}`);
}

const fetchAllEvent = () => {
    return axios.get("/all-event")
}

const fetchAllCountEvent = () => {
    return axios.get("/count-event")
}

const addNewEvent = (userData) => {
    return axios.post("/create-event", userData)
}

const editEvent = (userData) => {
    return axios.put("/update-event", userData)
}

const deleteEvent = (eventId) => {
    return axios.delete(`/delete-event/${eventId}`);
}

const loginApi = (email, password) => {
    return axios.post("/login", { email, password })
}

export { 
    fetchAllUser,
    addNewAccount, 
    editAccount, 
    deleteAccount, 
    fetchAllFaculty, 
    addNewFaculty, 
    deleteFaculty, 
    editFaculty,
    fetchAllEvent,
    addNewEvent,
    fetchAllCountEvent,
    editEvent,
    deleteEvent,
    loginApi
}