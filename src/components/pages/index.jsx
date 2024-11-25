import React from "react";
import "./pages.scss";
import categoryApi from "../../categoryApi/categoryApi";
import { Link } from "react-router-dom";

const Pages = () => {
    const blogPosts = categoryApi[2].subPages;
    return (
        <div className="container">
            <div className="page-grid">
                {blogPosts.map((post) => (
                    <Link to={post.path}>
                        <div key={post.id} className="page-card">
                            <div
                                className="page-image"
                                style={{
                                    backgroundImage: `url(${post.image})`,
                                }}
                            >
                                <div className="page-overlay">
                                    <p className="page-category">
                                        {post.category}
                                    </p>
                                    <h2 className="page-title">{post.name}</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Pages;
