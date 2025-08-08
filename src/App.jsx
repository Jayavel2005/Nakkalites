import React from 'react'
import Navbar from './components/Navbar'
import "bootstrap-icons/font/bootstrap-icons.css"
import Title from './components/Title'
import Testimonial from './components/Testimonial'
import Promotion from './components/Promotion'
import Contact from './components/Contact'
import YoutubeVideos from './components/YoutubeVideos'


const App = () => {
  return (
    <div>
      <Navbar />
      <main className='border md:px-10 px-3'>
        <Title title="About Us" subTitle="Our Story & Vision" />
        <Title title="Events" subTitle="Live & Exclusive Moments" />
        <Title title="Streaming Platforms" subTitle="Watch Nakkalites Everywhere" />
        <Title title="Nakkalites App" subTitle="Entertainment, Anytime, Anywhere" />
        <Promotion />
        <div className='mb-15'>
          <YoutubeVideos />
        </div>
        <Title title="What Fans Say" subTitle="Real voices from our community" />

        <Testimonial />
        <Title title="Get in Touch" subTitle="We'd love to hear from you!" />
        <Contact />
      </main>

    </div>
  )
}

export default App
