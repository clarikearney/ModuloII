import Navbar from './components/Navbar';
import Tarjetas from './components/Tarjetas';

function App() {
  return (
  <div id="wrapper">

    {/* Navbar */}
      <nav className="uk-navbar-container" uk-navbar="true" >
        <div className="uk-navbar-left">
          <Navbar/>
        </div>
      </nav>

    {/* Sección con tarjetas */}
        
          <Tarjetas/>
     
     {/* Footer */}
     <br/>
    <footer className="page-footer">
        <div className="container">
            <div className="uk-flex-middle" uk-grid="true" >
                <div className="uk-width-1-3@m uk-flex-first">
                  <h5>Práctica integradora modulo II - Clara Kearney</h5> 
                </div>
            </div>
        </div>
        <div className="footer-copyright">
        </div>
      </footer>



  </div>
  );
}

export default App;
