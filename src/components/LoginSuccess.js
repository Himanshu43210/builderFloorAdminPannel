import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { saveProfile } from '../redux/slice/authSlice';


const LoginSuccess = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const email = queryParams.get('email');
    const parentId= queryParams.get('p_id');
    const role= queryParams.get('role');
    dispatch(saveProfile({  name, email, parentId,role}));

    navigate('/dashboard')
  },);



};

export default LoginSuccess;