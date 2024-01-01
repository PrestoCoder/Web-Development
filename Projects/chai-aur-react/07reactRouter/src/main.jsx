import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import ContactUs from './components/ContactUs/ContactUs'
import About from './components/About/About'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

/* Routes
  Basically, because React creates SPA, when we click on a link that need to take us to say our profile page,
  what we could do is swap the main component (activeOutlet) with profile page, and change the URL manually to /Profile.

  Router helps us do that.

  Note:- Page loads occur when we click on anchor tag that redirects to a different page.
  Or if enter url manually in browser.

  Otherwise, AJAX doesn't load page. Also, anchor can be stopped using preventDefauly().
*/

/*
  Below, we create a Browser Router. The parent element, that is, by default, this element will be displayed at path '/'
  All child elements will be at path '/' + childPath.
  Using children property, we can keep doing this nesting.

*/

// 1st method
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:'',
//         element: <Home />
//       },
//       {
//         path:'ContactUs',
//         element: <ContactUs />
//       },
//       {
//         path:'About',
//         element: <About />
//       },
//     ]
//   }
// ])


//2nd method

/*
  This is more intuitive in terms of visualizing the routes.
*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home />}/>
      <Route path = 'About' element = {<About />}/>
      <Route path = 'ContactUs' element = {<ContactUs />}/>
      // But how this useful?
      // This will be useful when we have somewhere in the code, Link to User/userid where
      // userid will be dynamically generated.
      <Route path = 'User/:userid' element = {<User />}/>
      <Route 
        path = 'Github' 
        element = {<Github />}
        loader = {githubInfoLoader}  
      />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
