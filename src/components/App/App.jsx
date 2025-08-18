import  Header  from "../Header/Header";
  import  Hero  from "../Hero/Hero";
   import  About  from "../About/About";
//  import  Skills  from "../Skills/Skills";
//  import  Projects  from "../Projects/Projects";
//  import  Contact  from "../Contact/Contact";
//  import  Footer  from "../Footer/Footer";
import "../App/App.css";

 function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        {/* <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App