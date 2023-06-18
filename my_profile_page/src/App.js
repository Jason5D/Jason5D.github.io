import './App.css';
import Header from './Header.js';
import AboutMe from './AboutMe.js';
import CV from './CV.js';
import Render from './Render.js';
import Studyosaurus from './Studyosaurus.js';
import WiseWalletKitchen from './WiseWalletKitchen.js';
import SportsDay from './SportsDay.js';
import BookClub from './BookClub.js';
import PersonalPantry from './PersonalPantry.js';
import MineCleaner from './MineCleaner.js';
import Footer from './Footer.js';

export default function App() {
  return (
    <div className="grid-container">
      <Header />
      <AboutMe />
      <CV />
      <Render />
      <Studyosaurus />
      <WiseWalletKitchen />
      <SportsDay />
      <BookClub />
      <PersonalPantry />
      <MineCleaner />
      <Footer />
    </div>
  );
}