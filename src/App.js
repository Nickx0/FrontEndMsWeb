import ScroolToTop from './hooks/ScrollToTop.js'
import RouteDocument  from "./routes";
import Meta from "./views/components/Meta"
function App() {
  return (
    <>
    {/*<ScroolToTop />*/}
    <Meta description="Pagina Web Dedicada a Hina Misora." title="404"/>
    <RouteDocument />
    </>
  );
}
export default App;
