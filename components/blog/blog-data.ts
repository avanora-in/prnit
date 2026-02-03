import { blog_image_1, blog_image_2, blog_image_3 } from "@/public/assets";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: typeof blog_image_1;
  category: string;
  tags: string[];
  date: string;
};

export type RecentComment = {
  id: string;
  author: string;
  postTitle: string;
  postSlug: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-every-business-needs-a-professional-website",
    title: "Why Every Business Needs a Professional Website",
    excerpt:
      "A strong online presence is essential in today's digital world. A well-designed website helps showcase your brand, build trust, and connect with customers more effectively.",
    image: blog_image_1,
    category: "Web Development",
    tags: ["Website", "Business", "Digital Marketing"],
    date: "APR, 2024",
  },
  {
    id: "2",
    slug: "how-web-development-drives-business-growth",
    title: "How Web Development Drives Business Growth",
    excerpt:
      "Modern web development goes beyond visuals. It improves performance, user experience, and scalability, helping businesses attract more visitors and convert them into loyal customers.",
    image: blog_image_2,
    category: "Growth",
    tags: ["Web Development", "UX", "Performance"],
    date: "MAY, 2024",
  },
  {
    id: "3",
    slug: "building-a-digital-identity-for-your-brand",
    title: "Building a Digital Identity for Your Brand",
    excerpt:
      "Your website is the face of your brand online. Learn how thoughtful design and smart development strategies can strengthen your digital identity and leave a lasting impression.",
    image: blog_image_3,
    category: "Branding",
    tags: ["Brand", "Design", "Identity"],
    date: "JUN, 2024",
  },
  {
    id: "4",
    slug: "ai-powered-automation-for-modern-businesses",
    title: "AI-Powered Automation for Modern Businesses",
    excerpt:
      "Discover how artificial intelligence is transforming business operations. From chatbots to predictive analytics, AI automation helps streamline workflows and boost productivity.",
    image: blog_image_1,
    category: "AI & Automation",
    tags: ["AI", "Automation", "Productivity"],
    date: "JUL, 2024",
  },
  {
    id: "5",
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration: Best Practices for 2024",
    excerpt:
      "Moving to the cloud? Learn the essential steps and best practices for a smooth migration. Avoid common pitfalls and ensure your business scales efficiently.",
    image: blog_image_2,
    category: "Cloud",
    tags: ["Cloud", "Migration", "DevOps"],
    date: "AUG, 2024",
  },
  {
    id: "6",
    slug: "mobile-first-design-strategies",
    title: "Mobile-First Design Strategies That Convert",
    excerpt:
      "With most users browsing on mobile, a mobile-first approach is no longer optional. Explore strategies to create responsive experiences that drive conversions.",
    image: blog_image_3,
    category: "Design",
    tags: ["Mobile", "Responsive", "UX"],
    date: "SEP, 2024",
  },
  {
    id: "7",
    slug: "ecommerce-security-essentials",
    title: "E-Commerce Security Essentials Every Store Needs",
    excerpt:
      "Protect your online store and customer data with these essential security measures. From SSL to PCI compliance, learn what it takes to build trust.",
    image: blog_image_1,
    category: "Security",
    tags: ["E-commerce", "Security", "Compliance"],
    date: "OCT, 2024",
  },
  {
    id: "8",
    slug: "api-integration-modern-apps",
    title: "API Integration for Modern Applications",
    excerpt:
      "APIs are the backbone of modern applications. Understand how to design, integrate, and maintain APIs that power seamless user experiences.",
    image: blog_image_2,
    category: "Development",
    tags: ["API", "Integration", "Development"],
    date: "NOV, 2024",
  },
  {
    id: "9",
    slug: "data-analytics-business-insights",
    title: "Data Analytics: Turning Data Into Business Insights",
    excerpt:
      "Leverage data analytics to make informed decisions. Learn how to collect, analyze, and visualize data to drive growth and optimize operations.",
    image: blog_image_3,
    category: "Data",
    tags: ["Analytics", "Data", "Insights"],
    date: "DEC, 2024",
  },
  {
    id: "10",
    slug: "cms-comparison-2024",
    title: "CMS Comparison: Choosing the Right Platform in 2024",
    excerpt:
      "Headless, traditional, or hybrid? Compare popular CMS platforms and find the right fit for your project requirements and team capabilities.",
    image: blog_image_1,
    category: "CMS",
    tags: ["CMS", "Headless", "Content"],
    date: "JAN, 2025",
  },
];

export const recentComments: RecentComment[] = [
  {
    id: "1",
    author: "Sarah Johnson",
    postTitle: "Why Every Business Needs a Professional Website",
    postSlug: "why-every-business-needs-a-professional-website",
    excerpt: "Great insights! We just launched our new site...",
  },
  {
    id: "2",
    author: "Michael Chen",
    postTitle: "How Web Development Drives Business Growth",
    postSlug: "how-web-development-drives-business-growth",
    excerpt: "The UX section was particularly helpful for our team.",
  },
  {
    id: "3",
    author: "Emily Davis",
    postTitle: "AI-Powered Automation for Modern Businesses",
    postSlug: "ai-powered-automation-for-modern-businesses",
    excerpt: "We implemented some of these strategies and saw 40% improvement!",
  },
  {
    id: "4",
    author: "James Wilson",
    postTitle: "Cloud Migration: Best Practices for 2024",
    postSlug: "cloud-migration-best-practices",
    excerpt: "Clear and actionable. Migration completed successfully.",
  },
  {
    id: "5",
    author: "Lisa Anderson",
    postTitle: "Mobile-First Design Strategies That Convert",
    postSlug: "mobile-first-design-strategies",
    excerpt: "Our conversion rate improved significantly after applying these tips.",
  },
];
