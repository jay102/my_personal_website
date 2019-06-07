import React, { Component } from 'react';
import axios from 'axios'

class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         contactName: "",
         contactEmail: "",
         contactSubject: "",
         contactMessage: "",
         success: false,
         error: false
      }
   }
   handleChange = e => {
      const name = e.target.name;
      this.setState({
         [name]: e.target.value
      })
   }
   handleSubmit = e => {
      e.preventDefault();
      document.getElementById('img').style.display = "inline-flex"
      this.sendMail()
   }
   sendMail = () => {
      let data = {
         subject: this.state.contactSubject,
         name: this.state.contactName,
         email: this.state.contactEmail,
         message: this.state.contactMessage
      }
      axios.post('http://jay.jaycodes.com/sendMail', data)
         .then(response => {
            console.log(response.data)
            if (response.Error) {
               console.log(response.Error)
               document.getElementById('error').style.display = "block"
               this.setState({ error: !this.state.error })
            } else {
               console.log("sent")
               document.getElementById('img').style.display = "none"
               document.getElementById('success').style.display = "block"
               this.setState(prevState => ({
                  contactName: "",
                  contactEmail: "",
                  contactSubject: "",
                  contactMessage: "",
                  success: !this.state.success
               }))
            }
         })
         .catch(err => {
            if (err.response) {
               console.log(err.response)
            }
         })
   }

   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         // var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form onSubmit={(e) => this.handleSubmit(e)}>
                     <fieldset>
                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" size="35" id="contactName" name="contactName" onChange={this.handleChange} value={this.state.contactName} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} value={this.state.contactEmail} />/>
                  </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} value={this.state.contactSubject} />/>
                  </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={this.handleChange} value={this.state.contactMessage}></textarea>
                        </div>

                        <div>
                           <button className="submit">Submit</button>
                           <span id="img" style={{ display: "none", marginLeft: "1.2rem" }}>
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>
                  <div id="success" className="alert alert-success" role="alert" style={{ textAlign: "center", color: "green", display: "none" }}><i className="fa fa-check"></i>
                     Your message was sent, thank you!
                  </div>
                  <div id="error" className="alert alert-danger" role="alert" style={{ textAlign: "center", color: "red", display: "none" }}>
                     An error occured!
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state}<br />
                        <span>{phone}</span><br />
                        <span style={{ color: "#3c9c4c" }}>{email}</span>
                     </p>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
