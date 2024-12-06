import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function AppNavbar() {
    const { token, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        setToken(null);
        navigate("/login");
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Sigma School</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* me-auto pushes the content to the left side of the navbar */}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {/* Home link that uses React Router's Link component as={Link} tells Bootstrap to use React Router's Link instead of a default anchor tag */}
                        {!token && (
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            // Conditional rendering when user is NOT logged in
                        )}
                        {token && (
                            <>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                                <Button variant="outline-danger" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </>
                            // Conditional rendering when user IS logged in
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}