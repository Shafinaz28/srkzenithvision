import { Link } from "react-router-dom";
import { posts } from "../data/content";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";

export default function Blogs() {
  usePageTitle("Journal | SRK Zenithvision");

  return (
    <>
      <PageHero
        crumb={
          <p className="crumb">
            <Link to="/">Home</Link> / Blogs
          </p>
        }
        kicker="Journal"
        title="Notes from"
        accent="the work."
        text="Short writing on systems, measurement, and creative. No trend list. No recycled advice."
      />

      <section className="section section-tight">
        <div className="wrap post-grid">
          {posts.map((post) => (
            <Link className="post-card" key={post.slug} to={`/blogs/${post.slug}`}>
              <p className="meta">{post.category}</p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="text-link">
                {post.date} · {post.read}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
