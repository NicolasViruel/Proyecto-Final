import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import logo from '../../assets/img/logo/Imagen1.png'
import facebook from '../../assets/img/social-icons/facebook-logo.webp'
import google from '../../assets/img/social-icons/google-logo.png';



const Registro = ({ show, handleClose }) => {
    const [username, setUsername] = useState('')
    const [usermail, setUsermail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setuser] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await registerUser({
                username,
                usermail,
                password
            })
            setuser(user),
                setUsername(''),
                setUsermail(''),
                setPassword('')
            console.log(user)
        } catch (error) {

        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Image src={logo} alt="logo" width="40" />
                        Register
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                value={username}
                                maxLength={50}
                                placeholder="Enter name"
                                onChange={({ target }) => setUsername(target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={usermail}
                                name='usermail'
                                maxLength={50}
                                placeholder="Enter email"
                                onChange={({ target }) => setUsermail(target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                name="password"
                                maxLength={30}
                                placeholder="Password"
                                onChange={({ target }) => setPassword(target.value)}
                            />
                        </Form.Group>
                        <div className='d-grid gap-2'>
                            <Button variant="warning" type="submit">
                                Sign in
                            </Button>
                        </div>
                    </Form>
                    <div className="container my-3 w-100">
                        <div className="row text-center">
                            <h3 className="col-12">Sign in with</h3>
                        </div>
                        <div className="row justify-content-center">
                            <div className="d-flex">
                                <Button variant="outline-info" className=" w-100 my-1 mx-2">
                                    <a
                                        href="https://www.facebook.com/login/"
                                        className="text-decoration-none text-dark"
                                        target="_blank"
                                    >
                                        <div className=" row align-content-center">
                                            <div className="col-2 d-none d-md-block">
                                                <Image src={facebook} className="mx-3" width="30" alt="facebook" />
                                            </div>
                                            <div className="col-12 col-md-10 text-center font-weight-bolder">
                                                Facebook
                                            </div>
                                        </div>
                                    </a>
                                </Button>
                                <Button variant="outline-warning" className=" w-100 my-1 mx-2">
                                    <a
                                        href="https://www.google.com/"
                                        className="text-decoration-none text-dark"
                                        target="_blank"
                                    >
                                        <div className=" row align-content-center">
                                            <div className="col-2 d-none d-md-block">
                                                <Image src={google} className="mx-3" width="30" alt="google" />
                                            </div>
                                            <div className="col-12 col-md-10 text-center font-weight-bolder">
                                                Google
                                            </div>
                                        </div>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Registro
