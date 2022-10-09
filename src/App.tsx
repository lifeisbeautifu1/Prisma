import {
  Navbar,
  Hero,
  Carousel,
  Data,
  Stack,
  Client,
  Features,
  Question,
  Optimize,
  Sponsors,
  Footer,
} from './components';

function App() {
  return (
    <div className='font-primary selection:bg-slate-800/90 selection:text-white'>
      <Navbar />
      <Hero />
      <Carousel />
      <Data />
      <Stack />
      <Client />
      <Features />
      <Question />
      <Optimize />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
