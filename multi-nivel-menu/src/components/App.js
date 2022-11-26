import { Routes, Route } from 'react-router-dom';
import Home from '../folders/Home';
import About from '../folders/About';
import WebDesign from '../folders/WebDesign';
import SEO from '../folders/SEO';
import Services from '../folders/Services';
import LayOut from './LayOut';
import Frontend from '../folders/Frontend';
import PHP from '../folders/PHP';
import Node from '../folders/Node';
import AboutWho from '../folders/AboutWho';
import OurValues from '../folders/OurValues';
import WebDev from '../folders/WebDev';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="node" element={<Node />} />
          <Route path="seo" element={<SEO />} />
          <Route path="php" element={<PHP />} />
          <Route path="who-we-are" element={<AboutWho />} />
          <Route path="our-values" element={<OurValues />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;