import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout';
import { useNavigate } from 'react-router-dom';
import Input from "../../components/Inputs/Input";
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const SignUp=()=>{
    const [profilePic, setProfilePic]=useState(null);
    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [error,setError]=useState(null);
    
    const naviagte=useNavigate();

    return (
        <div>Signup</div>
    )
}

export default SignUp