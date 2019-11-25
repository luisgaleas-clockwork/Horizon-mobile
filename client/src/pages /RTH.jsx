import React from 'react'

const RTH = (props) => {
	return (
		<div className="video_content_container">
			<div className="video_container">
				<video controls>
					<source src="../video/anime.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	)
}

export default RTH