import type { Post } from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import { Link } from "react-router";

interface CardProps {
  post: Post;
}

export default function Card({ post }: CardProps) {
  return (
    <Link
      to={`/posts/${post.id}`}
      className="block rounded-lg border border-line-strong bg-surface p-4 transition-colors duration-200 hover:border-primary-hover hover:bg-elevated"
    >
      <article className="flex flex-col gap-2">
        <h2 className="text-title-md">{post.title}</h2>
        <p className="line-clamp-2 text-caption text-fg-muted">
          {post.content}
        </p>
        <div className="flex items-center gap-2 text-caption">
          <span className="text-primary">{post.author}</span>
          <span className="text-fg-muted">{formatDate(post.createdAt)}</span>
        </div>
      </article>
    </Link>
  );
}
