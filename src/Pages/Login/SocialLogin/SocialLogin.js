import React from 'react';
import social from '../../../Images/social/social.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
// import useToken from '../../../hook/useToken';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const [token] = useToken(user)
    const navigate = useNavigate();
    let errorElement;
    let loadingElement;
    
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error) {
        errorElement = <div> <p className='text-danger'>Error: {error?.message}</p> </div>
    }
    if (loading) {
        loadingElement = <div> <p>Loading...</p> </div>
      }
      navigate('/')
    // if (token) {
    //     navigate(from, { replace: true });
    // }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mx-3 mt-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            {loadingElement}

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='w-50 btn btn-primary d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={social} alt="" />
                    <span className='px-3 mt-2'>Google SignIn</span>
                </button>   
            </div>
        </div>
    );
};

export default SocialLogin;