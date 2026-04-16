import { notFound } from "next/navigation";
import { blogPosts } from "@/components/blog/blog-data";
import BlogPostContent from "@/components/blog/BlogPostContent";
import { siteConfig } from "@/lib/seo/entity";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | PRNIT Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  // Get related posts (same category or random)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .filter((p) => p.category === post.category)
    .slice(0, 3);

  // If not enough related posts by category, fill with others
  if (relatedPosts.length < 3) {
    const otherPosts = blogPosts
      .filter((p) => p.id !== post.id && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.organizationName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.organizationName,
    },
    mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
    image: `${siteConfig.siteUrl}/og-image.jpg`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostContent post={post} relatedPosts={relatedPosts} />
    </>
  );
}
