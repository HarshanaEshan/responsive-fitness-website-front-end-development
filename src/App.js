import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Blob from './components/Blob/Blob';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Others from './components/Others/Others';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Hero/>
      <Reasons/>
      <Programs/>
      <Plans/>
      <Testimonials/>
      {/* <Others/> */}
      <Footer/>
      
    </>
  );
}

export default App;
