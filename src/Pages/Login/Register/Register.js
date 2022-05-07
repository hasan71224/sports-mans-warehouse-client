// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
// import useToken from '../../../hook/useToken';
import { async } from '@firebase/util';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // const [token] = useToken(user);
    const navigate = useNavigate();
    let loadingElement;
    const navigateLogin = event => {
        navigate('/login')
    }
    if(loading || updating){
       loadingElement = <div> <p>Loading...</p> </div>
    }
    // if (token) {
    //     navigate('/home')
    //     // console.log('user:', user);
    // }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        let agree = event.target.terms.checked;
        if (agree) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
            alert('Updated profile');
            navigate('/login');
        }
    }
    return (
        <div className="w-50 mx-auto">
            
                <title>Register - Sports Mans Warehouse</title>
           
            <h2 className='text-center mt-3 text-primary'>Pleas Register Now </h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check name='terms' type="checkbox" label="Accept warehouse Tramps and Condition" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Register
                </Button>
            </Form>
            {loadingElement}
            <p className='mt-3'>Already Have an Account? <span className='text-danger' style={{ cursor: "pointer" }} onClick={navigateLogin}>please Login</span> </p>
            {/* <SocialLogin></SocialLogin> */}
        </div>
    );
};

export default Register;