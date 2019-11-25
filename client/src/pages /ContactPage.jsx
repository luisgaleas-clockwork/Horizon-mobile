import React from 'react'
import Form from '../Components/Contact/ContactForm'
import Comment from '../Components/Contact/Comment'

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            contact: [],
            first_name: "",
            last_name: "",
            email: "",
            contact_comment: ""
        }
    }

    getInfo = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }
    submitInfo = (e) => {
        e.preventDefault()
        fetch('api/comment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                contact_comment: this.state.contact_comment
            })
        })
    }

    componentDidMount() {
        fetch("/api/contacts")
            .then((response) => {
                console.log('response - ', response);
                return response.json();
            }
            ).then((jsonData) => {
                console.log(jsonData.data)
                return jsonData.data;
            }
            ).then((jsonStr) => {
                this.setState({ contact: jsonStr });
                console.log(this.state)
            }).catch((e) => console.log('error - ', e));
    }

    render() {
        console.log(`this.state -`, this.state)
        return (
            <div className="contact-main">
                <Form getInfo={this.getInfo} submit={this.submitInfo} />
                <h2>Customer Feedback</h2>
                <div className="comment_section">
                    {this.state.contact.map((info) => {
                        return <Comment state={info} />
                    })}
                </div>
            </div>
        )
    }
}

export default Contact