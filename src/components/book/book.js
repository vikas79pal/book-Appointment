import React, { useState } from "react"
import "./book.css"
import axios from "axios"


const Book = () => {

    const [ user, setUser] = useState({
        name: "",
        email:"",
        phone:"",
        date: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, phone, date } = user
        if( name && email && phone && date){
             axios.post("http://localhost:8080/book", user)
            alert("posted")
            .then( res => console.log(res))
            
        } else {
            alert("invlid input")
        }

         
    }

    return (
        <div className="register">
            {console.log("User",user)}
        
        <h1>Book Appointment</h1>
        <input type="text" name="name"  value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
        <input type="text" name="email"  value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
        <input type="tel"  name="phone" value={user.phone} placeholder="Your Phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={ handleChange }></input>
        <input type="date" name="date" value={user.date} placeholder="Your Date" onChange={ handleChange }></input>
        <div className="button" onClick={register} >Register</div>
        
        
    </div>
    
    )
}

export default Book
