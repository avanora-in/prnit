import { notFound } from "next/navigation";
import { blogPosts } from "@/components/blog/blog-data";
import BlogPostContent from "@/components/blog/BlogPostContent";
import { siteConfig } from "@/lib/seo/entity";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, getOrganizationSchema, getBlogPostingSchema } from "@/lib/seo/schema";

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

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const organizationSchema = getOrganizationSchema();
  const blogPostingSchema = getBlogPostingSchema({
    headline: post.title,
    description: post.excerpt,
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    image: `${siteConfig.siteUrl}/og-image.jpg`,
  });

  return (
    <>
      <JsonLd data={[organizationSchema, blogPostingSchema, breadcrumbSchema]} />
      <BlogPostContent post={post} relatedPosts={relatedPosts} />
    </>
  );
}
