import React from 'react';

const Greeting = ({currentUser, logout}) => (
	<div>
		<h1>Welcome to Front End Auth!</h1>


		<button onClick={logout}>Log Out</button>
	</div>
);

export default Greeting;
