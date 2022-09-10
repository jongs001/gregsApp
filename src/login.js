import React from 'react';
import {Link} from 'react-router-dom'
import Header from './header'

function Login(signOut){
    return (
        <div class="cover-container d-flex h-100  mx-auto flex-column bg-light" >
            <Header />
            <main role="main" class="inner cover">
            <h3 class="cover-heading">Please Select Account Type:</h3>
            <div class="cover-container d-flex h-100 p-3 flex-column  btn-group justify-content-center mx-auto btn-block m-2 span2" >
                <Link  class="btn-lg btn-secondary btn-block m-1"   to="/customer">Customer</Link>
                <Link  class="btn-lg btn-secondary  btn-block m-1"   to="/drivers">Driver</Link>
            </div>
            </main>
        </div>
    );

}

export default Login;