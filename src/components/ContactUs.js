import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me
            </p>
          </div>
          {/* <form
            action="mailto:your_email@example.com"
            method="post"
            enctype="text/plain"
          >
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="2" cols="10" />
            <label for="submit" />
            <input type="submit" value="Send" />
          </form> */}
        </div>
      </section>
    );
  }
}
