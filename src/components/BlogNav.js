// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import PCicon from "./assets/PCicon.jpg";

const BlogNav = () => {
	return (
		<div>
			<Navbar style={{
				backgroundColor:"#3f47cc"
			}}>
				<img
					src={PCicon}
					height='50'
					alt='PC Icon'
					loading='lazy'
				/>
				<Navbar.Brand href="#home" style={{color:"white", marginLeft:"10px"}}>The Fragrant Vagrant</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
					<Nav>
						<Nav.Link href="#home" style={{color:"white"}}>
							Home
						</Nav.Link>
						<Nav.Link href="#about" style={{color:"white"}}>
							About
						</Nav.Link>
						<Nav.Link href="#services" style={{color:"white"}}>
							Services
						</Nav.Link>
						<Nav.Link href="#contact" style={{color:"white"}}>
							Contact
						</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="ml-auto" />
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default BlogNav;
