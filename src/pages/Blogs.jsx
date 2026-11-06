import { Link } from "react-router-dom";
import { posts } from "../data/content";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";

function ArticleCard({ post }) {
  return (
    <Link className="journal-card" to={`/blogs/${post.slug}`}>
      <div className="journal-card-topline">
        <span className="journal-category">{post.category}</span>
        <span className="journal-index">{post.date}</span>
      </div>
      {post.image && (
        <img className="journal-card-image" src={post.image} alt={post.imageAlt} loading="lazy" />
      )}
      <h2>{post.title}</h2>
      <p className="journal-excerpt">{post.excerpt}</p>
      <span className="journal-card-footer">
        <span>{post.read}</span>
        <span className="journal-arrow" aria-hidden="true">↗</span>
      </span>
    </Link>
  );
}

export default function Blogs() {
  usePageTitle("Journal | SRK Zenithvision");

  return (
    <div className="blogs-page">
      <PageHero
        crumb={
          <p className="crumb">
            <Link to="/">Home</Link> / Journal
          </p>
        }
        kicker="The journal"
        title="Thinking behind"
        accent="the work."
        text="Ideas on growth, measurement, and creative systems—written from the work, not the sidelines."
      />

      <section className="journal-section">
        <div className="wrap">
          <div className="journal-grid">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
