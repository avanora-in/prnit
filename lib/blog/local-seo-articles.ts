import type { LongFormArticle } from "@/lib/blog/long-form-types";
import { article as softwareCompanyJaipur, slug as slugSoftwareJaipur } from "@/lib/blog/articles/software-development-company-jaipur";
import { article as appDevJaipur, slug as slugAppJaipur } from "@/lib/blog/articles/app-development-jaipur";
import { article as aiIndia, slug as slugAiIndia } from "@/lib/blog/articles/ai-development-company-india";
import { article as cloudJaipur, slug as slugCloudJaipur } from "@/lib/blog/articles/cloud-solutions-jaipur";

const bySlug: Record<string, LongFormArticle> = {
  [slugSoftwareJaipur]: softwareCompanyJaipur,
  [slugAppJaipur]: appDevJaipur,
  [slugAiIndia]: aiIndia,
  [slugCloudJaipur]: cloudJaipur,
};

export function getLongFormArticle(slug: string): LongFormArticle | undefined {
  return bySlug[slug];
}
