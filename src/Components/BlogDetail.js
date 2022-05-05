import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getPost() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`
      );

      if (!request.ok) {
        setNotFound(true);
        return;
      }

      const data = await request.json();

      document.title = data.title;
      setPost(data);
      setLoading(false);
    }
    getPost();
  });

  if (notFound) {
    return <div>Post not found</div>;
  }

  return (
    <section className="section">
      {loading ? (
        <i>Loading...</i>
      ) : (
        <article className="blog">
          <h1 className="blog-title">{post.title}</h1>
          <time className="blog-date">
            {new Date(post.publishedAt).toLocaleDateString}
          </time>
          <img src={post.imageUrl} alt={post.title} className="post-image" />
          <p className="blog-summary">{post.summary}</p>
          <p className="blog-source">
            Source:{" "}
            <a href={post.url} target="_blank" rel="noreferrer">
              {post.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}
