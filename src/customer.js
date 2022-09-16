import React from 'react';
import Header from './header';

function Customer(){
    return (
        <div class="cover-container d-flex h-100  mx-auto flex-column bg-light">
           
           <Header />
            <main role="main" class="inner cover">
                <h1 class="cover-heading">Welcome to the Customer's Profile Page</h1>
                <p class="lead">Under Construction!</p>
                <a class="btn btn-primary mr-1" href="https://nuber-auth.auth.us-east-1.amazoncognito.com/logout?client_id=47igshm19nqog74vhqf3dkglhd&logout_uri=https://main.dlhg8804ua3jk.amplifyapp.com/">
                    Sign out
                </a>  
            </main>

            
        </div>

    );
}

export default Customer;