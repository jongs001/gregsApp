import React from 'react';
import {Link} from 'react-router-dom'
import Header from './header'

function Login(){
    return (
        <div class="cover-container d-flex h-100  mx-auto flex-column bg-light" >
            <Header />
            <main role="main" class="inner cover">
            <h3 class="cover-heading">Please Select Account Type:</h3>
            <div class="cover-container d-flex h-100 p-3 flex-column  btn-group justify-content-center mx-auto btn-block m-2 span2" >
                <a  class="btn-lg btn-secondary btn-block m-1"   href="https://nuber-auth.auth.us-east-1.amazoncognito.com/login?client_id=7pc6eokqc4kk06k243cnfc8964&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://main.dlhg8804ua3jk.amplifyapp.com/customer">Customer</a>
                <Link  class="btn-lg btn-secondary  btn-block m-1"   to="/drivers">Driver</Link>
            </div>
            </main>
        </div>
    );

}

export default Login;