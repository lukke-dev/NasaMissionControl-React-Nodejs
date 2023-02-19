import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  Arwes,
  SoundsProvider,
  ThemeProvider,
  createSounds,
  createTheme,
} from 'arwes';

import Layout from './pages/Layout';
import './App.css';

import { theme, resources, sounds } from './utils';

const App = () => {
  return <ThemeProvider theme={createTheme(theme)}>
    <SoundsProvider sounds={createSounds(sounds)}>
      <Arwes animate background={resources.background.large} pattern={resources.pattern}>
        {anim => (
          <Router>
            <Layout show={anim.entered} />
          </Router>
        )}
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>;
};

export default App;
