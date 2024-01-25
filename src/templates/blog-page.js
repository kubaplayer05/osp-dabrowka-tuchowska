import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";

import {
    container,
    sectionTitle,
    pages,
    next,
} from "../components/blog/blog.module.css";
import Layout from "../layout/layout";
import PostCard from "../components/postCard/post-card";

const BlogPage = ({ pageContext }) => {
    const { posts, pageInfo } = pageContext;
    return (
        <Layout>
            <section className={container}>
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
                        <Link className={next}
                              to={`/page/${pageInfo.currentPage + 1}`}>
                            Następna strona
                        </Link>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default BlogPage;
