import "./App.css";

function App() {
	return (
		<div className="App" data-testid="app">
			<div data-testid="timer">
				Timer:
				{/* Add timer here, refer to image in prolblem statement*/}
			</div>
			<div>
				{/* Below is the input tag for title */}
				<input placeholder="Enter post title" data-testid="title-input" />
				<br />
				{/* Below is the textarea tag for body */}
				<textarea
					placeholder="Enter post body"
					data-testid="post-input"
				></textarea>
				<br />
				<button data-testid="add-post-button">Add Post</button>
			</div>

			<hr />
			<h1>Posts</h1>
			<div data-testid="posts-container">
				{/* map your posts with the Post Component and pass the required props */}
			</div>
		</div>
	);
}

export default App;
