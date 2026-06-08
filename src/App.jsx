import UserNotRegisteredError from '@/components/UserNotRegistered';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/home';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {
  const basePath = import.meta.env.BASE_URL || '/';

  return (
    <AuthProvider>
      <Router basename={basePath}>
        <ScrollToTop />
        <AuthenticatedApp />
      </Router>
    </AuthProvider>
  )
}

export default App