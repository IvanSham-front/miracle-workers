import 'normalize.css';
import CLouds from '../components/cloud';
import Header from '../components/header';
import HintsBLock from '../components/hints-block';
import LeftSideScroll from '../components/left-side-scroll';
import '../styles/styles.scss';

function App() {
  return (
    <div className='container'>
        <div className="fixed-container">
          <Header/>

          <HintsBLock/>

          <LeftSideScroll/>

          <a href="#" className="right-side-link">hd.kinopoisk.ru</a>
      </div>

      <CLouds/>
    </div>
    
  );
}

export default App;
