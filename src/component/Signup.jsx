import React from 'react'
import { useState } from 'react'
import'./signup.css'

const Signup = () => {
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function validateform() {
        if (firstname.length == 0) {
            alert('first name cant be empty')
            return
        }
        else if (password.length < 8) {
            alert('password must be atleast 8 char')
            return
        }
        let countuppercase = 0
        let countlowercase = 0
        // let countdigit = 0
        let countspecialchar = 0
        for (let i = 0; i < password.length; i++) {
            const specialchar = ['!', '@', "#"]
            if (specialchar.includes(password[i])) {
                countspecialchar++
            }
            else {
                if (password[i] == password[i].toUpperCase()) {
                    countuppercase++
                }
                if (password[i] == password[i].toLowerCase()) {
                    countlowercase++
                }
            }
        }
        if (countlowercase==0) {
            alert('atleast one lower case')
            return
        }
        if (countuppercase==0) {
            alert('atleast one upper case')
            return
        }
        if (countspecialchar==0) {
            alert('atleast one special char')
            return
        }
    }

    return (
        <div className='main'>
            <form action="">
                <label htmlFor="">
                    <strong>Name:</strong>
                </label>
                <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                <br />
                <label htmlFor="">
                    <strong>Email:</strong>
                </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor="">
                    <strong>Password:</strong>
                </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type='submit' onClick={()=> validateform()}>submit</button>
            </form>
        </div>
    )
}

export default Signup;