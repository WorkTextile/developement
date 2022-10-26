import { useNavigate } from "react-router-dom";

export const PasswordResetSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="content-container">
            <h1>Success!</h1>
            <p> 
                Your Password has been reset now please login with your new password,
            </p>
            <button onClick={() => navigate.push('/login')}>Login</button>
        </div>
    )
}