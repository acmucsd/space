import s from "./style.module.scss";

const Hero: React.FC = () => {

  return <>
    <div className = {s.heroContainer}>
      <img src="asset/hero_title.png" alt="hero" className = {s.heroTitle}/>
      <div className = {s.heroDescription}>
        <div className = {s.heroSubtitle}>StartuP: ACM&apos;s Career Expo</div>
        <div className = {s.heroInfo}>
          <div>Price Center West Ballroom</div>
          <div>November 15th, 2022 @ TBD</div>
          <button className = {s.registerButton}>Register Today!</button>
        </div>
        <img src="asset/space_planet.png" alt="planet" className = {s.heroPlanet}/>
      </div>
    </div>
  </>
}

export default Hero;