import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "./blog-data";
import ButtonLink from "../ui/ButtonLink";

type BlogPostCardProps = {
  post: BlogPost;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 sm:py-8 border-b border-[rgba(15,15,15,0.08)] last:border-b-0 group">
      <Link
        href={`/blog/${post.slug}`}
        className="block w-full sm:w-48 md:w-56 shrink-0 rounded-lg overflow-hidden bg-[rgba(15,15,15,0.04)] aspect-[16/10] sm:aspect-square"
      >
        <Image
          src={post.image}
          alt={post.title}
          width={224}
          height={224}
          className="w-full h-full object-cover hover:opacity-95 transition-opacity"
        />
      </Link>
      <div className="min-w-0 flex-1">
        <p className="text-xs sm:text-sm md:text-base font-semibold support-blue syne-font">
          {post.category} · {post.date}
        </p>
        <Link href={`/blog/${post.slug}`}>
          <h5 className="mt-1 text-base md:text-lg xl:text-xl font-bold group-hover:text-[#8B1E2D] line-clamp-2">
            {post.title}
          </h5>
        </Link>
        <p className="mt-2 text-xs sm:text-sm md:text-base primary-black line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs primary-black font-medium">
              #{tag}
            </span>
          ))}
        </div>
        <ButtonLink href={`/blog/${post.slug}`} className="block w-fit mt-4 md:mt-6 lg:mt-8">Read More</ButtonLink>
      </div>
    </article>
  );
}
