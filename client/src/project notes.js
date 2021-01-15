/* Steps to using React Router

1. npm install & npm start at the root of the directory
2. in a separate terminal you must npm install & npm start to 
        in the *CLIENT* folder. You will be using two servers.
        **Use two separate terminals and keep track of which terminal is rendering which server.
3. npm install react-router-dom --save 
        in the App.js file
        check in package.json it's there
        Then import  { BrowserRouter  as Router, Link, NavLink } from 'react-router-dom';
        import Route from 'react-router-dom/Route';
4. Wrap the main App in the <Router> tags in the entire return statement on the index.js page. FIRST CODING STEP

5. Build the routes on the App.js page ***MAKE SURE TO DO ALL PROPER IMPORTING OF COMPONENTS/DEPENDENCIES/ETC.
    <Route path="/" exact={true} render={                     //the exact is a parameter, this allows you only to see one of those routes at a time
        ()=> {
            return (<h1>Welcome Home</h1>);
        }
    }/>
    <Route path="/name_of_component/:" exact strict  component={name_of_component}             //exact strict makes it so the path only works specifically with /about/
       **So this is rendering this component
       **exact strict won't work with the attached parameters

    ****path="/" is the default path
6. To create a Link it has a parameter 'to'
    <Link to='/'>Home</Link>
7. NavLink allows you to provide specific styles
    <NavLink to ='/' activeStyle={color: 'green'}>Home</NavLink>
        **what color is the active color?
*/


