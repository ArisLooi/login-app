import { Container } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Profile() {
    // Access the token from AuthContext
    const { token } = useContext(AuthContext);

    return (
        <Container>
            <h1 className="my-3">Profile Page</h1>
            <p>Welcome to your profile!</p>

        </Container>
    )
}