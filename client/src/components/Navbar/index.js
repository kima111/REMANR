import React, { useState, useContext, useEffect, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom';
import API from '../../utils/API'
import { Modal, Button, Form, Navbar, Nav } from 'react-bootstrap';
import { UserContext } from '../../UserContext';

export default function MainNavbar() {

    //Used for both Login and Registration
    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const { isAdmin, setIsAdmin } = useContext(UserContext);
    const { setUserInfo } = useContext(UserContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //Login

    var [showLogin, setShowLogin] = useState(false);
    const history = useHistory();
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);


    const login = event => {
        event.preventDefault();
        API.authenticateUser({
            username: username,
            password: password
        }).then(
            function (response) {
                console.log(response.data.loggedIn)
                if (response.data.role === "user") {
                    setLoggedIn(true)
                    setUserInfo(response.data)
                    history.push('/Welcome')
                    setShowLogin(false)

                }
                else if (response.data.role === "administrator"){
                    setIsAdmin(true)
                    setLoggedIn(true)
                    setUserInfo(response.data)
                    history.push('/Welcome')
                    setShowLogin(false)
                }
                else if (response === null) {
                    setErrorMessage('username or password incorrect')
                    setShowLogin(true);
                }
                else {
                    setErrorMessage('username or password incorrect')
                    setShowLogin(true);
                }
            }
        )

    }
    // const enterFunction = useCallback((event) => {
    //     if (event.keyCode === 13) {

    //     }
    // }, []);

    // useEffect(() => {

    //     document.addEventListener("keydown", enterFunction, false);

    //     return () => {

    //         document.removeEventListener("keydown", enterFunction, false);

    //     };
    // }, [showLogin]);


    //Logout
    const logout = event => {
        event.preventDefault();
        history.push('/SignOut')
        setLoggedIn(false);
        setIsAdmin(false);
    }

    //Registration
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const register = event => {
        event.preventDefault();
        API.registerUser({
            firstName,
            lastName,
            username,
            password,
            email
        }).then(
            function (response) {
                console.log(response)
                if (response.data.registered === true) {
                    setLoggedIn(true)
                    setUserInfo(response.data)
                    history.push('/Welcome')
                    setShowRegister(false)

                }
                else if (response === null) {
                    setShowRegister(true);
                }
                else {
                    setShowRegister(true);
                }
            }
        )

    }

    return (

        <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">MEANR</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                    {isLoggedIn ? <Nav.Link as={Link} to="/Forum">Forum</Nav.Link> : ''}
                    {isLoggedIn ? <Nav.Link as={Link} to="/SubmitPayment">Submit Payment</Nav.Link> : ''}
                    {isAdmin? <Nav.Link as={Link} to="/SubmitForum">Submit Forum</Nav.Link> : ''}
                    {isAdmin? <Nav.Link as={Link} to="/SubmitTextMessage">Submit Text Message</Nav.Link> : ''}
                    {isAdmin? <Nav.Link as={Link} to="/SubmitEmail">Submit Email</Nav.Link> : ''}
                    {isAdmin? <Nav.Link as={Link} to="/UserDirectory">User Directory</Nav.Link> : ''}
                </Nav>
                <br/>
                <Form inline>
                    {isLoggedIn ? '' : <Button type="button" variant="outline-primary" onClick={handleShowLogin}>Login</Button>}
                    &nbsp;&nbsp;
                    {isLoggedIn ? <Button variant="outline-primary" onClick={logout}>Logout</Button>: ''}
                    &nbsp;&nbsp;
                    {isLoggedIn ? '' : <Button variant="outline-primary" onClick={handleShowRegister}>Register</Button>}
                </Form>
                </Navbar.Collapse>
            </Navbar>


            <Modal show={showLogin} onHide={handleCloseLogin}>
                

            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" value={username} onChange={event => setUsername(event.target.value)}  />
                            <Form.Text className="text-muted">
                                {errorMessage}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={password} onChange={event => setPassword(event.target.value)} />
                            <Form.Text className="text-muted">
                                {errorMessage}
                            </Form.Text>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={login}>
                        Submit
                    </Button>
                </Modal.Footer>
                </Form>
           
            </Modal>
            <Modal show={showRegister} onHide={handleCloseRegister}>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="firstname" placeholder="First Name" aria-label="First Name" value={firstName} onChange={event => setFirstName(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="lastname" placeholder="Last Name" aria-label="Last Name" value={lastName} onChange={event => setLastName(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="userName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="username" placeholder="Username" aria-label="Username" value={username} onChange={event => setUsername(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Email" value={email} onChange={event => setEmail(event.target.value)}  />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={password} onChange={event => setPassword(event.target.value)} />
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={register}>
                        Register
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal>
            
        </div>
    )
}
