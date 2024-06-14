// Post1.js

import { Card } from "react-bootstrap";

const Post1 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src=
				"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg"
				width={10}
				height={250}
			/>
			<Card.Body>
				<Card.Title>JAVASCRIPT</Card.Title>
				<Card.Text>
					I can manipulate the card text by adding text to a new \
					page. I can't wait to see what happens next.
				</Card.Text>
				<a href="#" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	);
};

export default Post1;
