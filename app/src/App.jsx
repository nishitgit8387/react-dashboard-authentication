import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transaction from "./pages/Transaction/Transaction.jsx";
import Support from "./pages/Support/Support.jsx";
import Signup from "./pages/Auth/Signup/Signup.jsx";
import Signin from "./pages/Auth/Signin/Signin.jsx";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify.jsx";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword.jsx";
import ForgotPasswordSent from "./pages/Auth/ForgotPasswordSent/ForgotPasswordSent.jsx";
import ResetPasswordSuccess from "./pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess.jsx";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";
import AlredySigninRoute from "./components/Auth/AlredySigninRoute.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/transactions",
      element: (
        <ProtectedRoute>
          <Transaction />
        </ProtectedRoute>
      ),
    },
    {
      path: "/support",
      element: (
        <ProtectedRoute>
          <Support />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlredySigninRoute>
          <Signup />
        </AlredySigninRoute>
      ),
    },
    {
      path: "/signin",
      element: (
        <AlredySigninRoute>
          <Signin />
        </AlredySigninRoute>
      ),
    },
    {
      path: "/register-email-verify/:email",
      element: (
        <AlredySigninRoute>
          <RegisterEmailVerify />
        </AlredySigninRoute>
      ),
    },
    {
      path: "/email-verify/:token",
      element: (
        <AlredySigninRoute>
          <RegisterSuccess />
        </AlredySigninRoute>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <AlredySigninRoute>
          <ForgotPassword />
        </AlredySigninRoute>
      ),
    },
    {
      path: "/forgot-success/:email",
      element: (
        <AlredySigninRoute>
          <ForgotPasswordSent />
        </AlredySigninRoute>
      ),
    },
    {
      path: "/reset-success",
      element: (
        <AlredySigninRoute>
          <ResetPasswordSuccess />
        </AlredySigninRoute>
      ),
    },
    {
      path: "/forgot-password-verify/:token",
      element: (
        <AlredySigninRoute>
          <ResetPassword />
        </AlredySigninRoute>
      ),
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
