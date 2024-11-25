import React from "react";
import "./blog.scss";
import BlogHeroBanner from "./blogherobanner";
import BlogDetails from "./blogdetails";
import categoryApi from "../../categoryApi/categoryApi";

function Blog() {
    const blogPosts = categoryApi.find(category => category.category === "BLOG").blogPosts;
    return (
        <>
            <BlogHeroBanner />
            <div className="container">
                <div className="blog-details">
                    <div className="blog-grid">
                        {blogPosts.map((post) => (
                            <div className="blog-item" key={post.id}>
                                <img src={post.img} alt={post.title} />
                                <div className="blog-info">
                                    <div className="date">{post.date}</div>
                                    <div className="categories">
                                        {post.category && post.category.split(" · ").map((cat, index) => (
                                            <span key={index}>{cat}</span>
                                        ))}
                                    </div>
                                    <h2>{post.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <BlogDetails />
        </>
    );
}

export default Blog;
