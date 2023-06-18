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
      <Header className="grid-item1"/>
      <AboutMe className="grid-item2"/>
      <CV className="grid-item3"/>
      <Render className="grid-item4"/>
      <Studyosaurus className="grid-item5"/>
      <WiseWalletKitchen className="grid-item6"/>
      <SportsDay className="grid-item7"/>
      <BookClub className="grid-item8"/>
      <PersonalPantry className="grid-item9"/>
      <MineCleaner className="grid-item10"/>
      <Footer className="grid-item11"/>
    </div>
  );
}