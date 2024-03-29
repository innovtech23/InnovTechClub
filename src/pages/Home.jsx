import Nav from '../components/Nav'
import Header from '../components/Header'
import UpcomingEvent from '../components/UpcomingEvent'
import Footer from '../components/Footer'
import CellCard from '../components/CellCard'
import CounterCard from '../components/CounterCard'
import EventTimeline from '../components/EventTimeline'
import ContactForm from '../components/ContactForm'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import Loader from '../components/Loader'

const Home = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    loading ? <Loader /> :
    <>
      <Nav home="true"/>
      <Header>
        <h1>FSTM InnovTechClub</h1>
        <h2>Join us in shaping the future of technology and innovation.</h2>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <ScrollLink to="about" smooth={true} duration={500} className="btn-get-started scrollto">Get Started</ScrollLink>&nbsp;&nbsp;
          <Link to="/architecture" className="btn-get-started bg-warning">Architecture</Link>
        </div>
      </Header>
      <UpcomingEvent title="Upcoming soon!" url="/architecture">Get ready to join us at the FSTM InnovTechClub's upcoming general assembly!</UpcomingEvent>

      <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">

        <section id="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <p>
                  At InnovTech, we are a dynamic and forward-thinking club dedicated to fostering innovation and embracing the limitless
                  possibilities of technology. Our club serves as a vibrant hub for technology enthusiasts, entrepreneurs, and visionaries
                  who share a common passion for exploring groundbreaking solutions and driving positive change through technology.
                </p>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  InnovTech offers a range of engaging activities and initiatives designed to empower our members and equip them with the
                  tools they need to thrive in the ever-evolving landscape of technology. From inspiring guest speakers and
                  thought-provoking workshops to hackathons and networking events, we offer diverse opportunities for personal and
                  professional growth.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="counter-container d-flex justify-content-between">
          <div class="container">
            <div class="row">
              <CounterCard title="Members" icon="fa fa-group" colored="true">50</CounterCard>
              <CounterCard title="Events" icon="fa fa-solid fa-calendar">4</CounterCard>
              <CounterCard title="Projects" icon="fa fa-solid fa-list">0</CounterCard>
              <CounterCard title="Awards" icon="fa fa-solid fa-trophy">1</CounterCard>
            </div>
          </div>
        </section>

        <section id="cells">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Cells</h2>
              <p>Our club is structured around multiple specialized cells, each dedicated to a unique focus and purpose.</p>
            </div>
            <div className="container row justify-content-between">
              <CellCard name="Software Cell" img="/img/software-development-specialist.jpg" url="/software">
                The Software Cell focuses on crafting innovative software solutions. It's a collaborative hub where members explore
                emerging tech, creating applications for real-world challenges while nurturing creativity and technical expertise in
                software development.
              </CellCard>
              <CellCard name="Data Cell" img="/img/data-science-2.jpg" url="/data">
                The Data Cell harnesses data's potential, delving into analysis and insights from diverse datasets. Members explore data
                science, machine learning, and analytics to interpret trends, make informed decisions, and create impactful solutions.
                From visualization to predictive modeling, it thrives in data-driven innovation.
              </CellCard>
            </div>
          </div>
        </section>

        <section id="events">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Events</h2>
              <p>Explore our events and activities.</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="main-timeline2">
                  <EventTimeline url="https://www.instagram.com/p/C19LPvQIb3E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" title="Agile Methodologies Training" icon="fa fa-code" date="January 13, 2024">
                    Unlock the world of Agile Methodologies with Rachid BAAZIZ. Discover agility, Scrum & Kanban using Jira Software.
                  </EventTimeline>
                  <EventTimeline url="https://www.instagram.com/reel/C1K4jPErLLK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" title="Club's General Assembly" icon="fa fa-globe" date="December 20, 2023">
                    Join us for our upcoming General Assembly, a pivotal gathering for discussions on future club endeavors and initiatives.
                  </EventTimeline>
                  <EventTimeline url="https://www.instagram.com/p/Cvji_GNIOw1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" title="OOP Workshop" icon="fa fa-solid fa-code" date="August 06, 2023">
                    Explore the principles and practical applications of Object-Oriented Programming (OOP) through an engaging and
                    informative workshop with Walid AHDOUF.
                  </EventTimeline>
                  <EventTimeline url="https://www.instagram.com/p/CvigRvtIoiw/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" title="Club Commencement" icon="fa fa-solid fa-hourglass-start" date="August 06, 2023">
                    This event marks the inception of our club.
                  </EventTimeline>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Projects</h2>
              <p>Discover our latest innovative projects.</p>
            </div>

          </div>
        </section>

        <section id="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Contact</h2>
              <p>Get in touch with us</p>
            </div>
            <div className="row">
              <div className="col-lg-5 mr-lg-5 col-12">
                <iframe
                  src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.0987050372382!2d-7.355924089677819!3d33.70639473580322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b6d37fd56af5%3A0x5e62c736d5933ac1!2sFaculty%20of%20Sciences%20and%20technologies%20Mohammedia!5e0!3m2!1sen!2sma!4v1700500877843!5m2!1sen!2sma'}
                  width="420" height="300"
                  allowFullScreen=''
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy='no-referrer-when-downgrade'
                  data-aos="fade-right"
                >
                </iframe>
              </div>
              <div className="col-lg-6 col-12">
                <div className="contact-form" data-aos="fade-down">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  )
}

export default Home