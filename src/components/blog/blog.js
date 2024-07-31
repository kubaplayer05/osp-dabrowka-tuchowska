import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import PostCard from "../postCard/post-card";
import {
    container,
    sectionTitle,
    pages,
    next,
} from "./blog.module.css";

const Blog = () => {
    const data = useStaticQuery(graphql`
        query BlogQuery {
            allWpPost(sort: { date: DESC }, limit: 5) {
                nodes {
                    date(formatString: "DD/MM/YYYY")
                    excerpt
                    id
                    slug
                    title
                }
                pageInfo {
                    currentPage
                    hasNextPage
                    hasPreviousPage
                }
            }
        }
    `);

    const posts = data.allWpPost.nodes;
    const { pageInfo } = data.allWpPost;

    return (
        <div className={container}>
            <h2 className={sectionTitle}>Aktualności</h2>

            {posts.map((post) => {
                return <PostCard data={post} key={post.id} />;
            })}

            <div className={pages}>
                {pageInfo.hasPreviousPage && (
                    <Link to={`/page/${pageInfo.currentPage - 1}`}>
                        Poprzednia strona
                    </Link>
                )}

                {pageInfo.hasNextPage && (
                    <Link className={next} to={`/page/${pageInfo.currentPage + 1}`}>
                        Następna strona
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Blog;
