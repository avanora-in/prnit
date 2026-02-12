import Image from "next/image";
import { blog_image_1, blog_image_2, blog_image_3 } from "@/public/assets";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";

const posts = [
  {
    date: "APR, 2024",
    title: "Why Every Business Needs a Professional Website",
    excerpt:
      "A strong online presence is essential in today’s digital world. A well-designed website helps showcase your brand, build trust, and connect with customers more effectively...",
    image: blog_image_1,
    slug: "why-every-business-needs-a-professional-website",
  },
  {
    date: "MAY, 2024",
    title: "How Web Development Drives Business Growth",
    excerpt:
      "Modern web development goes beyond visuals. It improves performance, user experience, and scalability, helping businesses attract more visitors and convert them into loyal customers...",
    image: blog_image_2,
    slug: "how-web-development-drives-business-growth",
  },
  {
    date: "JUN, 2024",
    title: "Building a Digital Identity for Your Brand",
    excerpt:
      "Your website is the face of your brand online. Learn how thoughtful design and smart development strategies can strengthen your digital identity and leave a lasting impression...",
    image: blog_image_3,
    slug: "building-a-digital-identity-for-your-brand",
  },
];


export default function BlogSection() {
  return (
    <section
      id="blog"
      className="w-full secondary-background py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 sm:gap-10 md:gap-12 px-4 sm:px-5 md:flex-row md:px-6">
        <aside className="md:sticky top-20 sm:top-24 md:top-28 md:self-start flex-1 mb-6 md:mb-0">
          <div className="space-y-6">
            <SectionLabel>
              Blog &amp; News
            </SectionLabel>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black primary-black leading-normal">
              Featured News And Insights
            </h2>
            <ButtonLink href="/blog" className="block w-fit">Explore More</ButtonLink>
          </div>
        </aside>
        <div className="flex-[2] space-y-8 sm:space-y-9 md:space-y-10">
          {posts.map((post, index) => (
            <article
              key={`${post.title}-${index}`}
              className="flex flex-col gap-4 sm:gap-5 md:gap-6 border-b neutral-grey-border pb-8 sm:pb-9 md:pb-10 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 md:flex-row">
                <Image src={post.image} alt={post.title} width={380} height={260} className="w-full min-h-[200px] sm:min-h-[240px] md:min-h-100 h-full object-cover rounded-xl sm:rounded-2xl col-span-1" />
                <div className="flex flex-1 flex-col justify-between gap-4 sm:gap-5 md:gap-6 col-span-1">
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base md:text-lg font-semibold primary-black syne-font">
                      {post.date}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="text-lg sm:text-xl md:text-2xl font-black hover:text-[#8b1e2d]">
                      <h3 className="text-xl md:text-2xl xl:text-3xl font-black hover:text-[#8b1e2d] leading-normal">
                        {post.title}
                      </h3>
                    </Link>
                    <ButtonLink href={`/blog/${post.slug}`} className="block w-fit mt-6">
                      Discover
                    </ButtonLink>
                  </div>
                  <p className="hidden lg:block text-sm sm:text-base md:text-lg primary-black">
                    {post.excerpt}
                  </p>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

