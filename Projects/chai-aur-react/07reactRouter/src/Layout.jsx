import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

/*
    The Outlet is the activeOutlet that will be changed based on the current route.
    Header and Footer will remain same, AJAX operations can still happen everywhere.

    In main.jsx, the Layout is by default displayed. But what is outlet then? 
    Outlet is actually home by default, because the route for home is ''.

    Also, the Outlet can be replaced (using route) by another layout like component,
    which again has react router 'outlet' component.

*/

export default function Layout() {
     return(
        <>
            <Header />
            <Outlet />
            {/*Placeholder for child routes.*/}
            <Footer />
        </>
     )
}