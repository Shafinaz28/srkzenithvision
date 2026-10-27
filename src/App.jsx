import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Industries from "./pages/Industries";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import Zenith from "./pages/Zenith";
import Contact from "./pages/Contact";
import Refer from "./pages/Refer";
import NotFound from "./pages/NotFound";

/**
 * Routes for the SRK Zenithvision site.
 *
 *   src/data/content.js    words, lists, and page copy
 *   src/components/        header, footer, buttons, shared blocks
 *   src/pages/             one file per page
 *   src/styles/global.css  colors and layout
 *
 * To add a page: create it in src/pages, import it here, and add a Route.
 * Run the site with: npm install, then npm run dev.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="industries" element={<Industries />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<BlogPost />} />
          <Route path="careers" element={<Careers />} />
          <Route path="the-zenith" element={<Zenith />} />
          <Route path="contact" element={<Contact />} />
          <Route path="refer" element={<Refer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
