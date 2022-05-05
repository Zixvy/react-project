import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getPost() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const data = await request.json();

      setPosts(data);
      setLoading(false);
    }
    getPost();
    document.title = "Blogs";
  }, []);

  return (
    <>
      <section className="section">
        <h1 className="section-title">Blog</h1>
        <p className="section-description">Here's my blog posts.</p>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="blog">
            {posts.map((post) => (
              <article className="post" key={post.id}>
                <h2 className="post-title">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <time className="post-date">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
