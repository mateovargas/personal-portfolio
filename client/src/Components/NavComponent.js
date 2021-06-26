import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BsCodeSlash } from 'react-icons/bs';
import { BiPen } from 'react-icons/bi';
import { AiOutlineLink, AiFillHome } from 'react-icons/ai';

const NavComponent = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand href="/"><h1 className="logo">Mateo Vargas</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/"><AiFillHome></AiFillHome>Home</Nav.Link>
                        <Nav.Link href="/projects"><BsCodeSlash></BsCodeSlash>Projects</Nav.Link>
                        <Nav.Link href="/references"><BiPen></BiPen>References</Nav.Link>
                        <Nav.Link href="/links"><AiOutlineLink></AiOutlineLink>Links</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavComponent;
