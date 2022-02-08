import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
                    </a> */}
                    <a class="navbar-brand" href="#">Hackathon Name</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <a class="nav-link active px-3" aria-current="page" href="#">Home</a>
                            <a class="nav-link px-3" href="#">About</a>
                            <a class="nav-link px-3" href="#">Domains</a>
                            <a class="nav-link px-3" href="#">Timeline</a>
                            <a class="nav-link px-3" href="#">Rounds</a>
                            <a class="nav-link px-3" href="#">Prizes</a>
                            <a class="nav-link px-3" href="#">Register Here</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
