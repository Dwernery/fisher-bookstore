import React, { Component } from "react";
import "./Books.css";
import { BookDisplay }  from "./BookDisplay.js";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "React",
                    author: "John Doe",
                    isbn: "978-19473484731"
                },
                {
                    id: 4, 
                    title: "Deccelerate",
                    author: "Haylee Campbell",
                    isbn: "978-1234548331"
                },
                {
                    id: 5,
                    title: "Node",
                    author: "Amber Rudy",
                    isbn: "978-2423523"
                },
                {
                    id: 6,
                    title: "Coding",
                    author: "Me",
                    isbn: "978-1942753131"
                },
                {
                    id: 7,
                    title: "Hello World",
                    author: "Nicole Thero",
                    isbn: "978-1942712331"
                },
                {
                    id: 8,
                    title: "Final One",
                    author: "Andrew Pla",
                    isbn: "978-1942788332"
                }
            ]
        };
    }
    render() {
    return (
        <div className="Books">
            <div className = "lander">
                <BookDisplay books={this.state.books} />
            </div>
        </div>
    );
}
}
