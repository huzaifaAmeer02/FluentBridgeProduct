import {Link} from "react-router-dom";

const Login = () => {
    return(
        <div>
            <div>
                <h1>Login</h1>
                <form action="">
                <div>
                    <input type="email" />
                    <label htmlFor="">Your Email</label>
                </div>
                <div>
                    <input type="email" />
                    <label htmlFor="">Your Email</label>
                </div>
                <div>
                    <div>
                        <input type="checkbox"  name="" id=""/>
                        <label htmlFor="Remember Me"></label>
                    </div>        
                    <span>Forgot Password?</span>
                </div>
                <button type="submit"> Login </button>
                <div>
                    <span>New Here? <Link to= 'Register'> Create an Account</Link></span>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;