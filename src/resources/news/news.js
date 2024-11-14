import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../security"; // Import the getToken function
import "./news.css";
import Header from "../../header";

function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            const token = getToken(); // Get the token from localStorage
            const headers = { 'Authorization': `Bearer ${token}` };

            try {
                const response = await axios.get("http://localhost:8080/news", { headers });
                setNews(response.data);
            } catch (error) {
                setError("Failed to fetch news");
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <p>Loading news...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Header />
            <div className="news-container">
                <h2>Latest Blockchain News</h2>
                {news.map((article, index) => (
                    <div key={index} className="news-article">
                        <h3 className="news-title">
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.title}
                            </a>
                        </h3>
                        <p className="news-author">By {article.author || "Unknown"}</p>
                        <p className="news-description">{article.description}</p>
                        <p className="news-source">
                            Source: {article.source.name} | Published at:{" "}
                            {new Date(article.publishedAt).toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
