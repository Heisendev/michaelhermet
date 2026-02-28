import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Markdown from 'react-markdown'
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const post = blogPosts.find((p) => p.slug === slug);
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    if (post) {
      fetch(`/posts/${i18n.language}/${post.slug}.md`)
        .then((response) => response.text())
        .then((text) => setMarkdownContent(text));
    }
  }, [post, i18n.language]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <main className="bg-background text-foreground min-h-screen">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
            {i18n.language === "fr" ? post.titles.fr : post.titles.en}
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted mb-12">
            <img
              src={post.image}
              alt=""
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-md max-w-none
            prose-headings:font-display prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-hr
            prose-code:text-primary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-xl
            prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
            prose-li:text-muted-foreground article
          "
        >
            <Markdown>{markdownContent}</Markdown>
        </motion.div>
      </article>
    </main>
  );
};

export default BlogPost;