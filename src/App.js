import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import './mock/serverApi';
import { Provider } from 'react-redux';
import {store} from './stores/store';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <Routes />
            <Footer />
          </Provider>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
