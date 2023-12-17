import React, { useState, useEffect } from "react";

const dummyBlogs = [
  {
    id: 1,
    username: "coreyschafer",
    title: "Be Present",
    content: "Turning away from the ledge...",
    category: "Entertainment",
    date: "2017-06-01",
    likes: 24,
    comments: [{ username: "Jane", content: "Good One" }, { username: "Bob", content: "Loved It!" }],
  },
  // Add more dummy blog objects here
];

const BlogPage = () => {
  const [blogs, setBlogs] = useState(dummyBlogs);
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [username, setUsername] = useState("User123"); // Replace with actual username after authentication
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Business");
  const [sortBy, setSortBy] = useState("asc");

  const handleCreateBlog = () => {
    const newBlog = {
      id: blogs.length + 1,
      username,
      title,
      content,
      category,
      date: new Date().toISOString().split("T")[0], // Assuming backend handles date
      likes: 0,
      comments: [],
    };
    setBlogs([...blogs, newBlog]);
    closeModal();
  };

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setTitle("");
    setContent("");
    setCategory("Business");
    setShowModal(false);
  };

  return (
    <div>
      {/* Search bar */}
      <input type="text" placeholder="Search by title" />
      {/* Filter and sort controls */}
      <select>
        <option value="Business">Business</option>
        <option value="Tech">Tech</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {/* Create Blog button */}
      <button onClick={() => setShowModal(true)}>Create Blog</button>
      {/* List of BlogPosts */}
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          {/* Edit and Delete buttons */}
          {username === blog.username && (
            <div>
              <button onClick={() => openModal(blog)}>Edit</button>
              <button>Delete</button>
            </div>
          )}
          {/* Like and Comment buttons */}
          <div>
            <button>Like ({blog.likes})</button>
            <button>Comment ({blog.comments.length})</button>
          </div>
        </div>
      ))}
      {/* Blog creation/editing modal */}
      {showModal && (
        <div>
          <h3>{selectedBlog ? "Edit Blog" : "Create Blog"}</h3>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Business">Business</option>
            <option value="Tech">Tech</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <button onClick={handleCreateBlog}>
            {selectedBlog ? "Save Changes" : "Post Blog"}
          </button>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
