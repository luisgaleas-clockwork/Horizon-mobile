import React from 'react'

const Form = (props) => {
    const { getInfo, submit } = props
    return (
        <main className="form-main">
            <section className="form-bg">
                <form className="needs-validation form-container" method="POST">
                    <h1>Give us feedback</h1>
                    <input type="text" name="first_name" placeholder="First name" onChange={getInfo} required />
                    <input type="text" name="last_name" placeholder="Last name" onChange={getInfo} required />
                    <input type="email" name="email" placeholder="Email" id="validationCustom022" placeholder="Email" onChange={getInfo} required />
                    <textarea name="contact_comment" placeholder="Give us Feedback" onChange={getInfo}></textarea>
                    <button type="submit" onClick={submit}>Submit</button>
                </form>
            </section>
        </main>
    )
}
export default Form