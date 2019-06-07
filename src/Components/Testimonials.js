import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Testimonials extends Component {
   render() {

      if (this.props.data) {
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return (
               <div key={testimonials.user}>
                  <blockquote>
                     <p style={{ textAlign: "justify" }}>{testimonials.text}</p>
                     <cite style={{ textAlign: "justify" }}>{testimonials.user}</cite>
                  </blockquote>
               </div>
            )
         })
      }

      return (
         <section id="testimonials">
            <div className="text-container">
               <div className="row">

                  <div className="two columns header-col">
                     <h1><span>Client Testimonials</span></h1>
                  </div>

                  <div className="ten columns flex-container">
                     <Carousel
                        showThumbs={false}
                        showStatus={false}>
                        {testimonials}
                     </Carousel>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Testimonials;
