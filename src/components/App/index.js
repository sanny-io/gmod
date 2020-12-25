import Landing from '../Landing';
import Projects from '../Projects';
import Footer from '../Footer';
import './styles.css';

export default function App() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow flex-shrink-0 bg-white">
        <Landing />
        <Projects />
      </div>
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}