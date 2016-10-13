import React from 'react'


export default function (props) {
	return(
			<div id="figure-detail">
				<h1>{props.figure.name}</h1>
				<p><em>{props.figure.tagline}</em></p>
				<p>{props.figure.bio}</p>
					<img width="300" src={props.figure.image} />
				<h3>Resources</h3>
				<ul>
					{props.figure.links.map((link) => {
						return(
							<li key={link.id}>
								<a href={link.url} target="_blank">{link.title}</a>
							</li>
							)
					})}
				</ul>
			</div>
	)
}
