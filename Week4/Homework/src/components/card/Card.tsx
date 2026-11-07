import { Link } from "react-router";

interface CardProps {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export default function Card({
  id,
  title,
  content,
  author,
  createdAt,
}: CardProps) {
  return (
    <Link
      to={`/posts/${id}`}
      className="block rounded-lg border border-line-strong bg-surface p-4 transition-colors duration-200 hover:border-primary-hover hover:bg-elevated"
    >
      <article className="flex flex-col gap-2">
        <h2 className="text-title-md">{title}</h2>
        <p className="line-clamp-2 text-caption text-fg-muted">{content}</p>
        <div className="flex items-center gap-2 text-caption">
          <span className="text-primary">{author}</span>
          <span className="text-fg-muted">{createdAt}</span>
        </div>
      </article>
    </Link>
  );
}
