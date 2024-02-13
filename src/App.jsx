import { AppProvider } from './context/context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import Router from './routes/router.jsx';

function App() {
  return (
    <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}>
      <AppProvider>
        <Router />
      </AppProvider>
    </Auth0Provider>
  );
}

export default App;