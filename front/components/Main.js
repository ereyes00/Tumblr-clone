//Import REACT Modules
import React from 'react';
import { Link } from 'react-router';
import SiteNavigation from './navigation/SiteNavigation.js';
import CreatePost from './create-post/Create-Post.js';

//Build Component
const Main = React.createClass({
	render() {
		return(
			<div>
				<h1>
					<Link to='/'>
						Tumblr Clone
					</Link>
				</h1>
				<SiteNavigation />
				{this.props.CreatePostContainer}
				{React.cloneElement(this.props.children, this.props, this.props.Home)}
			</div>
		)
	}
})

//Export Component
export default Main;