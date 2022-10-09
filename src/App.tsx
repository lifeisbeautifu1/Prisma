import { Navbar, Hero, Carousel, Data, Stack, Client } from './components';

function App() {
  return (
    <div className="selection:bg-slate-800/90 selection:text-white">
      <Navbar />
      <Hero />
      <Carousel />
      <Data />
      <Stack />
      <Client />
    </div>
  );
}

export default App;
