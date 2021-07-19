import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  return <section className="hero">
    <div className="hero-center">
      <article className="hero-info">
        <h1>Payments infracture for the internet</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <button className="btn">Start Now</button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} className="phone-img" alt="phone" />
      </article>
    </div>
  </section>
}

export default Hero
