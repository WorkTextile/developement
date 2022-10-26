import { PrivateRoute } from "../auth/PrivateRoute";
import SignUpPage from "../connect/registerPage/SignUpPage";
import { UserInfoPage } from "../dashboard/UserInfoPage";
import LogInPage from "../connect/loginPage/LogInPage";
import Main from "../connect/registerPage/components/Main";
import { ForgotPasswordPage } from '../connect/registerPage/password/ForgotPasswordPage';
import { PasswordResetLandingPage } from '../connect/registerPage/password/PasswordResetLandingPage';
import { EmailVerificationLandingPage } from '../connect/registerPage/verifications/EmailVerificationLandingPage';
import { PleaseVerifyEmailPage } from '../connect/registerPage/verifications/PleaseVerifyEmailPage';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


const Navigates = () => (
    <Router>
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <UserInfoPage />
                    </PrivateRoute>
                }
            />
            <Route path="/professional" element={<Main />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/verify-email/:verificationString" element={<EmailVerificationLandingPage />} />
            <Route path="/reset-password/:passwordResetCode" element={<PasswordResetLandingPage  />} />
            <Route path="/please-verify" element={<PleaseVerifyEmailPage />} />
        </Routes>
    </Router>
);

export default Navigates;