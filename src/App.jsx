import { AppProvider } from './context/context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import Router from './routes/router.js';

function App() {
  return (
    <AppProvider>
      <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}>
        <Router />
      </Auth0Provider>
    </AppProvider>
  );
}

export default App;