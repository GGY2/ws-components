import React from "react";
import './Comments.css';
import { Card } from 'react-bootstrap';

const userComments = [
    {
        name: 'Jasper Fenix',
        description: 'By the way lorem ipsum lorem ipsum By the way lorem ipsum lorem ipsum By the way lorem ipsum lorem ipsum...',
        id: 1
    },
    {
        name: 'Frank Spenser',
        description: 'By the way lorem ipsum lorem ipsum By the way lorem ipsum lorem ipsum By the way lorem ipsum lorem ipsum...',
        id: 2
    },
    {
        name: 'Colin Hathaway',
        description: 'By the way lorem ipsum lorem ipsum By the way lorem ipsum lorem ipsum By the way lorem ipsum lorem ipsum...',
        id: 3
    },
    {
        name: 'Brian Summers',
        description: 'By the way lorem ipsum lorem ipsum By the way lorem ipsum lorem ipsum By the way lorem ipsum lorem ipsum...',
        id: 4
    },
    {
        name: 'Cooper Hawks',
        description: 'By the way lorem ipsum lorem ipsum By the way lorem ipsum lorem ipsum By the way lorem ipsum lorem ipsum...',
        id: 5
    }
];

const Comments = () => {
    return(
        userComments.map((comment) => {
            return(
            <Card key={comment.id} style={{marginBottom:'20px', backgroundColor:'#a3ff08', border:'none'}}>
                <Card.Body>
                    <Card.Title>{comment.name}</Card.Title>
                    {comment.description}
                </Card.Body>
            </Card>
            );
        })
    )
        
};

export default Comments;