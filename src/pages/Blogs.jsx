import { useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/content";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";

const categories = ["All", ...new Set(posts.map((post) => post.category))];

function ArticleCard({ post, featured = false, index }) {
  return (
    <Link
      className={featured ? "journal-card journal-card-featured" : "journal-card"}
      to={`/blogs/${post.slug}`}
    >
      <div className="journal-card-topline">
        <span className="journal-category">{post.category}</span>
        <span className="journal-index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      {post.image && (
        <img className="journal-card-image" src={post.image} alt={post.imageAlt} loading="lazy" />
      )}
      <h2>{post.title}</h2>
      <p className="journal-excerpt">{post.excerpt}</p>
      <span className="journal-card-footer">
        <span>{post.date} <i aria-hidden="true">·</i> {post.read}</span>
        <span className="journal-arrow" aria-hidden="true">↗</span>
      </span>
    </Link>
  );
}

export default function Blogs() {
  usePageTitle("Journal | SRK Zenithvision");
  const [category, setCategory] = useState(categories[0]);
  const visible = category === categories[0]
    ? posts
    : posts.filter((post) => post.category === category);
  const [featured, ...articles] = visible;

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
          <div className="journal-intro">
            <div>
              <p className="journal-eyebrow">Field notes & perspectives</p>
              <h2>Clear thinking.<br />Useful work.</h2>
            </div>
            <p>Practical perspectives for teams building demand, making better decisions, and creating work that lasts.</p>
          </div>

          <div className="filter-row journal-filters" role="group" aria-label="Filter journal articles">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "chip active" : "chip"}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {featured ? (
            <div className="journal-list">
              <ArticleCard post={featured} featured index={posts.indexOf(featured)} />
              {articles.length > 0 && (
                <div className="journal-grid">
                  {articles.map((post) => (
                    <ArticleCard key={post.slug} post={post} index={posts.indexOf(post)} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="journal-empty">No articles in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
