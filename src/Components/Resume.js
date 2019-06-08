import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p style={{ textAlign: "justify" }}>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.title}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p style={{ textAlign: "justify" }}>{work.description}</p>
        </div>
      })

      var languages = this.props.data.languages.map(languages => {
        return (
          <div className="card" style={{ width: "10rem", marginRight: "20px", marginLeft: "20px" }} key={languages.name}>
            <img className="card-img-top" src={languages.image} alt={languages.img_description} style={{ height: "100px", width: "100px" }} />
            <div className="card-body">
              <h5 className="card-title" style={{ textAlign: "center" }}>{languages.name}</h5>
            </div>
          </div>
        );
      });
      var tools = this.props.data.tools.map(tools => {
        return (
          <div className="card" style={{ width: "10rem", marginRight: "20px", marginLeft: "20px" }} key={tools.name}>
            <img className="card-img-top" src={tools.image} alt={tools.img_description} style={{ height: "100px", width: "100px" }} />
            <div className="card-body">
              <h5 className="card-title" style={{ textAlign: "center" }}>{tools.name}</h5>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Favourites</span></h1>
          </div>

          <div className="nine columns main-col">

            <p style={{ textAlign: "justify" }}>{skillmessage}
            </p>
            <div className="bars">
              <ul className="skills">
              </ul>
            </div>
          </div>
          <div className="two columns header-col">
          </div>
          <div className="ten columns main-col tools-flex-container">
            {languages}
          </div>
          <div className="two columns header-col">
          </div>
          <div className="ten columns main-col tools-flex-container">
            {tools}
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
