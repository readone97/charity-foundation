import React from 'react';
import { UsersIcon, EyeIcon, FlagIcon,LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from './component/Navbar';



import { assets } from './assets/assets';
import './index.css'


const App = () => {
  return (
    <div className="font-Outline">
      {/* Navbar */}
        <Navbar />

      {/* Header Section */}
      <header id="home" className="bg-white-100 py-16">
        <div className="container mx-auto flex flex-col  md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-4xl font-bold text-teal-900 mb-6">MAKE A DIFFERENCE</h1>
            <p className="text-md justify mb-10">Welcome to Yarbaiwa Charity Foundation! Our mission is to uplift underserved communities through education, healthcare, and sustainable development. We believe in empowering individuals to create lasting change. Join us in making a difference, every contribution counts!</p>
            <a href="#donate" className="bg-teal-900 text-white py-2 px-4 rounded hover:bg-teal-950">Donate Now</a>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img src={assets.image1} alt="Charity" className="rounded shadow-lg" />
          </div>
        </div>
      </header>

      {/* Aims & Objectives Section */}
      <section id="aims" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8"></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <UsersIcon className="h-12 w-12 text-teal-900  mx-auto mb-4" /> 
              <h3 className="text-xl font-semibold text-teal-900  mb-4">Who We Are</h3>
          
              <p>Yarbaiwa Charity Foundation is dedicated to improving lives through impactful community initiatives </p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <EyeIcon className="h-12 w-12 text-teal-900 mx-auto mb-4" />
              <h3 className="text-xl text-teal-900  font-semibold mb-4">Our Mission</h3>
              <p>Our mission focuses on empowering individuals and sustaining development in underserved areas in Northern Nigeria.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <FlagIcon className="h-12 w-12 text-teal-900  mx-auto mb-4" />
              <h3 className="text-xl  text-teal-900 font-semibold mb-4">Our Vision</h3>
              <p>Promoting health and well-being of underserved communities by engaging and organizing various programs, including education , health care and  economic development, ensuring that every contribution creates lasting change .</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="activities" className="py-16 bg-gray-100">
      
        <div className="container mx-auto flex flex-col  md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
          <h3 className="text-3xl font-semibold text-teal-900  mb-4">Making A Difference Together</h3>
           
            <p className="text-md justify mb-10">We are a youth focus leadership development organization committed to raising future leaders that will transform the country; through interventions for young people,that bridges the gap in leadership, education, employability, and enterpreneurship. Join us in making a difference, every contribution counts!</p>
            <a href="#donate" className="bg-teal-900 text-white py-2 px-4 rounded hover:bg-teal-950">Donate Now</a>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img src={assets.image12} alt="Charity" className="rounded shadow-lg" />
          </div>
        </div>
        
      </section>
      {/**gallery */}
      
      <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-teal-900 mb-8">OUR IMPACT</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 perspective-3d">
          {[ assets.image3, assets.image4, assets.image5, assets.image6,assets.image7,assets.image8,assets.image9,assets.image10,assets.image11].map((image, index) => (
            <div key={index} className="group relative rounded overflow-hidden shadow-lg transform transition-transform duration-500 hover:rotate-y-12"
              style={{
                perspective: '1000px',
              }}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* About Us Section */}
      <section id="about" className="py-16">
      <div className="container mx-auto flex flex-col gap-20 md:flex-row items-center">
        <div>
        <h2 className="text-3xl font-semibold text-teal-900  mb-4">Get In Touch</h2>
        <p className="text-lg max-w-3xl mx-auto w-[555px]">We are a non-profit organization dedicated to improving the lives of people in need. Our team works tirelessly to provide food, education, and healthcare to vulnerable populations around the world.Together we can create a brighter future.</p>

        </div>
        
      <div className="flex flex-start flex-col gap-4">
        <div className='flex flex-row'>
        <LocationMarkerIcon className="h-6 w-6 text-teal-900 mr-2" />
        <p>Danbare layin gidan Mai unguwa Saifullahi</p>

        </div>
          <div className='flex flex-row'>
          <MailIcon className="h-6 w-6 text-teal-900 mr-2" />
          <p>yarbaiwacharityfoundation2024@gmail.com</p>

          </div>
        
      
          <div className='flex flex-row'>
          <PhoneIcon className="h-6 w-6 text-teal-900 mr-2" />
          <p>07039793804  08146740413  07038283185</p>

          </div>
       
      </div>
      
    </div>

     </section>
     

      {/* Footer Section */}
      <footer className="bg-teal-900 py-8">
      <div className="flex flex-start md: space-x-6 justify-center align-center">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 text-white hover:text-blue-800 transition-colors duration-200" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-white hover:text-blue-600 transition-colors duration-200" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-white hover:text-blue-900 transition-colors duration-200" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-white hover:text-pink-800 transition-colors duration-200" />
      </a>
    </div>

        <hr />
          <p className='flex text-white justify-center align-center mt-5'>© 2024 TechVille Solutions, lateefolayinka400@gmail.com. All rights reserved.</p>
        
      </footer>
    </div>
  );
};

export default App;
