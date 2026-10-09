import { Link, useParams } from "react-router-dom";
import { posts } from "../data/content";
import usePageTitle from "../hooks/usePageTitle";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);
  usePageTitle(post ? `${post.title} | SRK Zenithvision` : "Page not found | SRK Zenithvision");

  if (!post) return <NotFound />;

  const more = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <header className="page-hero">
        <div className="wrap narrow">
          <p className="crumb">
            <Link to="/">Home</Link> / <Link to="/blogs">Blogs</Link>
          </p>
          <p className="meta">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="deck">
            {post.date} · {post.read} · Zenith Studio
          </p>
        </div>
      </header>

      <article className="section section-tight">
        <div className="wrap narrow prose">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="section section-tight">
        <div className="wrap">
          <p className="kicker">Keep reading</p>
          <div className="post-grid">
            {more.map((item) => (
              <Link className="post-card" key={item.slug} to={`/blogs/${item.slug}`}>
                <p className="meta">{item.category}</p>
                <h2>{item.title}</h2>
                <p>{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
