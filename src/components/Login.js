import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { saveProfile } from '../redux/slice/authSlice';
import { clearLoginStatus, loginUser } from '../redux/slice/userSlice';
import { USER_RESPONSE_DATA } from './Consts';
import "../css/UserStyle.css"

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userStoreData = useSelector((state) => state.user);

    const [email, setEmail] = useState(USER_RESPONSE_DATA.email);
    const [password, setPassword] = useState('');
    const [parentId,setParentId]= useState(USER_RESPONSE_DATA.parentId);
    const [role,setRole]=useState(USER_RESPONSE_DATA.role);

    useEffect(() => {
        if (userStoreData.loginStatus && !userStoreData.errorMessage) {
            dispatch(clearLoginStatus())
            dispatch(saveProfile({
                ...userStoreData.profile
            }))
            navigate('/dashboard')
        }
    }, [userStoreData]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleParentIdChange=(e)=>{
        setParentId(e.target.value);
    }
    const handleRoleChange=(e)=>{
        setRole(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({
            email: email,
            password: password
        }));
    };
    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>ParentId</label>
                    <input
                        type="password"
                        value={parentId}
                        onChange={handleParentIdChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <input
                        type="password"
                        value={role}
                        onChange={handleRoleChange}
                        required
                    />
                </div>
                {userStoreData.isLoginLoading ?
                    <div className='loading-class' >
                        <CircularProgress />
                    </div>
                    :
                    <button type="submit">Login</button>
                }
                <br /><br />
                {userStoreData.errorMessage ?
                    <div >
                        {userStoreData.errorMessage}
                    </div>
                    : null}
                <br /><br />
            </form>
        </div>
    );
};

export default Login;
