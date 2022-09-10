import React from 'react';
import Header from './header';

function About(){
    return (
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column bg-light">
           
           <Header />
            <main role="main" class="inner cover">
                <h1 class="cover-heading">Welcome to N&#252;ber</h1>
                <p class="lead">Like &#252;ber, only newer...</p>
                <p class="lead">Nüber is a crowd-sourced taxi service. We offer a personel transport service and aim to service a global user base.</p>
            </main>

            
        </div>

    );
}
export default About;