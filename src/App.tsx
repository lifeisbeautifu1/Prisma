import {
  Navbar,
  Hero,
  Carousel,
  Data,
  Stack,
  Client,
  Features,
} from './components';

function App() {
  return (
    <div className="selection:bg-slate-800/90 selection:text-white">
      <Navbar />
      <Hero />
      <Carousel />
      <Data />
      <Stack />
      <Client />
      <Features />
    </div>
  );
}

export default App;
