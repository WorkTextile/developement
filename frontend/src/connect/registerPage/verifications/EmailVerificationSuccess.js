import { useNavigate } from "react-router-dom";

export const EmailVerificationSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="content-container">
            <h1>Success!</h1>
            <p> 
                Thanks for verifying your email,
                now you can use all app features !
            </p>
            <button onClick={() => navigate.push('/')}>Go to home page</button>
        </div>
    )
}