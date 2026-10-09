import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import usePageMotion from "../hooks/usePageMotion";

/** Shared frame: header, page, footer. Scrolls to the top on each new page. */
export default function Layout() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  usePageMotion(mainRef, pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content" ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
