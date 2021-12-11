import './App.css';
import profilePic from './profile.jpg'
import Education from './components/Education';
import Experience from './components/Experience';
import Navigation from './components/Navigation';
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <Navigation pic={profilePic} />
      <section> 
        <Skills />
        <Education />
        <Experience />
      </section>
    </div>
  );
}

export default App;