

// Higher Order Component (HOC) - A component (HOC) that renders another component.
// Reuse code

import React from 'react';
import ReactDOM from 'react-dom/client';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin ? <p>This is private info. Please don't share!</p> : null}
            <WrappedComponent {...props} /> 
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in to view the info</p> }
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);



// // Create a root container
const root = ReactDOM.createRoot(document.getElementById('app'));

// Render your component
root.render(<AuthInfo isAuthenticated={true} info="some info" />);