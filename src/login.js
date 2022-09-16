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
                <a  class="btn-lg btn-secondary btn-block m-1"   href="https://nuber-auth.auth.us-east-1.amazoncognito.com/login?client_id=47igshm19nqog74vhqf3dkglhd&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://dev8880.d1okzpojss46dn.amplifyapp.com/customer_page">Customer</a>
                <Link  class="btn-lg btn-secondary  btn-block m-1"   to="/drivers">Driver</Link>
            </div>
            </main>
        </div>
    );

}

export default Login;