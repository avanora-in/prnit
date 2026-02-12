"use client";

import { useState } from "react";
import Image from "next/image";
import { contact_section_bg } from "@/public/assets";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      companyName: formData.get("companyName") as string,
      requirement: formData.get("requirement") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const contentType = res.headers.get("content-type");
      let data: { error?: string };
      try {
        data = contentType?.includes("application/json") ? await res.json() : {};
      } catch {
        data = { error: "Server error. Please try again later." };
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section
      id="contact"
      className="w-full relative overflow-hidden secondary-background py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Background Image */}
      <Image
        src={contact_section_bg}
        alt="Contact Section Background"
        fill
        priority
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-5 md:px-6 space-y-8">
        <div className="space-y-6">
          <SectionLabel>
            Contact Us
          </SectionLabel>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black primary-black leading-normal max-w-4xl">
              Custom Solutions, Expert Advice, and Precise Estimates for Your Needs
            </h2>
            <p className="text-base sm:text-base md:text-lg leading-normal primary-black">
              Share your details and we&apos;ll reach out to you soon.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="block mb-2 text-xs sm:text-sm font-medium text-heading">Full Name*</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                        <path d="M651.296 545.978C714.853 503.164 756.654 430.742 756.654 348.445C756.654 215.111 646.29 106.469 510.841 106.469C375.389 106.469 266.68 215.111 266.68 346.791C266.68 429.089 308.502 501.53 372.038 544.322C228.232 600.302 127.902 735.392 127.902 895.07H196.464C196.464 737.044 318.532 606.873 474.045 588.767C475.719 588.767 517.521 585.482 552.64 588.767H555.99C708.174 610.18 825.215 738.574 825.215 894.947H895.455C893.779 736.922 793.447 600.303 651.296 545.978ZM510.841 527.856C408.833 527.856 326.911 447.211 326.911 346.792C326.911 246.373 408.833 165.729 510.841 165.729C612.848 165.729 694.77 246.373 694.77 346.792C694.77 447.211 612.848 527.856 510.841 527.856Z" fill="#6B7280" />
                      </svg>
                    </div>
                    <input type="text" id="fullName" name="fullName" required className="block w-full ps-8 sm:ps-9 pe-3 py-2.5 sm:py-3 bg-neutral-secondary-medium border neutral-grey-border text-heading text-xs sm:text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-lg" placeholder="Full Name" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 sm:mb-2.5 text-xs sm:text-sm font-medium text-heading">Email*</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#6B7280" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" /></svg>
                    </div>
                    <input type="email" id="email" name="email" required className="block w-full ps-8 sm:ps-9 pe-3 py-2.5 sm:py-3 bg-neutral-secondary-medium border neutral-grey-border text-heading text-xs sm:text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-lg" placeholder="Email" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block mb-2 sm:mb-2.5 text-xs sm:text-sm font-medium text-heading">Phone Number*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                      <path d="M20.9989 27.56C20.0432 27.5529 19.0918 27.433 18.1644 27.2026C14.9615 26.4299 11.6633 24.4695 8.87891 21.6827C6.0945 18.8958 4.13173 15.5971 3.35897 12.3972C2.54527 9.03127 3.12561 6.15156 4.99125 4.28592L5.52394 3.75323C6.00725 3.27089 6.66217 3 7.34498 3C8.0278 3 8.68272 3.27089 9.16603 3.75323L12.2272 6.81376C12.7098 7.29691 12.9809 7.95189 12.9809 8.63481C12.9809 9.31772 12.7098 9.97271 12.2272 10.4559L10.419 12.2635C11.2858 13.7846 12.4648 15.3069 13.8582 16.7003C15.2517 18.0937 16.7752 19.2734 18.2957 20.1402L20.1033 18.332C20.3424 18.0928 20.6263 17.903 20.9388 17.7736C21.2512 17.6441 21.5861 17.5775 21.9243 17.5775C22.2626 17.5775 22.5975 17.6441 22.9099 17.7736C23.2224 17.903 23.5063 18.0928 23.7454 18.332L26.8059 21.3925C27.2887 21.8755 27.5599 22.5304 27.5599 23.2133C27.5599 23.8961 27.2887 24.551 26.8059 25.034L26.2726 25.5667C24.9574 26.8844 23.1369 27.56 20.9989 27.56ZM7.34498 4.83144C7.24745 4.83096 7.1508 4.84995 7.06069 4.88729C6.97058 4.92463 6.88884 4.97958 6.82023 5.04892L6.28693 5.58161C4.88984 6.9787 4.48177 9.24691 5.13786 11.9647C5.83244 14.8438 7.62049 17.8353 10.1722 20.3864C12.7238 22.9374 15.7147 24.7237 18.5944 25.4207C21.3128 26.0768 23.5798 25.6687 24.9769 24.2716L25.5096 23.7389C25.6488 23.5996 25.727 23.4108 25.727 23.2139C25.727 23.017 25.6488 22.8281 25.5096 22.6888L22.4497 19.6283C22.3104 19.4891 22.1216 19.4109 21.9246 19.4109C21.7277 19.4109 21.5389 19.4891 21.3996 19.6283L19.1082 21.9197C18.9707 22.0573 18.793 22.1475 18.6008 22.1774C18.4086 22.2073 18.2119 22.1752 18.0391 22.0859C16.1607 21.1146 14.2669 19.7004 12.5625 17.996C10.8582 16.2916 9.44704 14.3991 8.47329 12.5206C8.38387 12.3479 8.35171 12.1513 8.38147 11.9591C8.41123 11.7669 8.50137 11.5892 8.63884 11.4516L10.9309 9.16017C11.0701 9.02088 11.1482 8.83202 11.1482 8.63511C11.1482 8.4382 11.0701 8.24935 10.9309 8.11006L7.87035 5.04892C7.80153 4.9797 7.71965 4.92484 7.62947 4.8875C7.53929 4.85017 7.44259 4.83112 7.34498 4.83144Z" fill="#6B7280" />
                      <path d="M21.9777 16.5441C21.7347 16.5441 21.5016 16.4475 21.3298 16.2757C21.1579 16.1038 21.0614 15.8708 21.0614 15.6277C21.0596 14.0202 20.4203 12.479 19.2836 11.3423C18.147 10.2055 16.6059 9.56604 14.9984 9.5641C14.7553 9.5641 14.5223 9.46756 14.3504 9.29571C14.1786 9.12387 14.082 8.8908 14.082 8.64777C14.082 8.40475 14.1786 8.17168 14.3504 7.99983C14.5223 7.82799 14.7553 7.73145 14.9984 7.73145C19.3521 7.73145 22.894 11.2746 22.894 15.6277C22.894 15.8708 22.7975 16.1038 22.6256 16.2757C22.4538 16.4475 22.2207 16.5441 21.9777 16.5441Z" fill="#6B7280" />
                      <path d="M25.8507 16.544C25.6077 16.544 25.3746 16.4475 25.2028 16.2756C25.0309 16.1038 24.9344 15.8707 24.9344 15.6277C24.9344 10.1487 20.4749 5.69105 14.9984 5.69105C14.7553 5.69105 14.5223 5.59451 14.3504 5.42267C14.1786 5.25082 14.082 5.01775 14.082 4.77472C14.082 4.5317 14.1786 4.29863 14.3504 4.12678C14.5223 3.95494 14.7553 3.8584 14.9984 3.8584C21.4878 3.8584 26.767 9.13827 26.767 15.6277C26.767 15.8707 26.6705 16.1038 26.4987 16.2756C26.3268 16.4475 26.0937 16.544 25.8507 16.544Z" fill="#6B7280" />
                    </svg>
                  </div>
                  <input type="tel" id="phone" name="phone" required className="block w-full ps-8 sm:ps-9 pe-3 py-2.5 sm:py-3 bg-neutral-secondary-medium border neutral-grey-border text-heading text-xs sm:text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-lg" placeholder="Phone Number" />
                </div>
              </div>
              <div>
                <label htmlFor="companyName" className="block mb-2 sm:mb-2.5 text-xs sm:text-sm font-medium text-heading">Company Name*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg width="24" height="24" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                      <path d="M64.9141 61.7422V23.0234L43.8047 16.9531V61.7422H42.2734V5.46875H17.9375V61.7969H16.5156V38.6641H3.33594V61.7969H3.28125V64.5859H66.7188V61.7969L64.9141 61.7422ZM55.5625 25.9219H61.6328V32.7031H55.5625V25.9219ZM55.5625 34.5078H61.6328V41.2891H55.5625V34.5078ZM55.5625 43.8047H61.6328V50.5859H55.5625V43.8047ZM55.5625 53.1016H61.6328V59.8828H55.5625V53.1016ZM46.2656 25.9219H52.3359V32.7031H46.2656V25.9219ZM46.2656 34.5078H52.3359V41.2891H46.2656V34.5078ZM46.2656 43.8047H52.3359V50.5859H46.2656V43.8047ZM46.2656 53.1016H52.3359V59.8828H46.2656V53.1016ZM10.7734 40.7969H14.7109V44.8984H10.7734V40.7969ZM10.7734 48.7266H14.7109V52.8281H10.7734V48.7266ZM10.7734 56.4922H14.7109V60.5938H10.7734V56.4922ZM5.14062 40.9062H9.07812V45.0078H5.14062V40.9062ZM5.14062 48.7812H9.07812V52.8828H5.14062V48.7812ZM5.14062 56.5469H9.07812V60.6484H5.14062V56.5469ZM32.2656 9.89844H38.3359V15.9688H32.2656V9.89844ZM32.2656 22.0391H38.3359V28.1094H32.2656V22.0391ZM32.2656 34.3984H38.3359V40.4688H32.2656V34.3984ZM21.8203 9.89844H27.8906V15.9688H21.8203V9.89844ZM21.8203 22.0391H27.8906V28.1094H21.8203V22.0391ZM21.8203 34.3984H27.8906V40.4688H21.8203V34.3984ZM23.9531 45.0078H36.0938V61.7969H33.0859V47.6328H26.9609V61.7422H23.8984L23.9531 45.0078Z" fill="#6B7280" />
                    </svg>
                  </div>
                  <input type="text" id="companyName" name="companyName" required className="block w-full ps-8 sm:ps-9 pe-3 py-2.5 sm:py-3 bg-neutral-secondary-medium border neutral-grey-border text-heading text-xs sm:text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-lg" placeholder="PRNIT India LLP" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="requirement" className="block mb-2 sm:mb-2.5 text-xs sm:text-sm font-medium text-heading">Your Requirement*</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex top-3 sm:top-3.5 ps-3 pointer-events-none">
                  <svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                    <path d="M867.357 389.333L541.768 65.7776C536.42 60.3589 529.138 56.8887 521.529 56.8887H235.464C184.42 56.8887 142.223 96.1136 142.223 153.202V866.261C142.223 919.495 180.139 967.111 235.464 967.111H777.856C829.995 967.111 881.778 924.245 881.778 866.261V409.543C881.778 402.062 872.605 394.652 867.357 389.333ZM540.445 143.815L801.309 398.222H591.673C559.545 398.222 540.445 369.522 540.445 339.399V143.815ZM777.856 910.222H235.464C211.286 910.222 199.112 888.476 199.112 866.247V153.202C199.112 131.143 212.424 113.778 235.464 113.778H509.64L512 116.082V339.399C512 384.711 544.299 426.666 591.673 426.666H824.889V866.261C824.889 888.533 800.569 910.222 777.856 910.222Z" fill="#6B7280" />
                    <path d="M286.209 554.667H399.986C403.758 554.667 407.376 553.168 410.043 550.501C412.71 547.834 414.209 544.216 414.209 540.444C414.209 536.672 412.71 533.055 410.043 530.388C407.376 527.721 403.758 526.222 399.986 526.222H286.209C282.437 526.222 278.819 527.721 276.152 530.388C273.485 533.055 271.986 536.672 271.986 540.444C271.986 544.216 273.485 547.834 276.152 550.501C278.819 553.168 282.437 554.667 286.209 554.667ZM456.889 554.667H599.112C602.884 554.667 606.501 553.168 609.168 550.501C611.835 547.834 613.334 544.216 613.334 540.444C613.334 536.672 611.835 533.055 609.168 530.388C606.501 527.721 602.884 526.222 599.112 526.222H456.889C453.117 526.222 449.5 527.721 446.833 530.388C444.166 533.055 442.667 536.672 442.667 540.444C442.667 544.216 444.166 547.834 446.833 550.501C449.5 553.168 453.117 554.667 456.889 554.667ZM712.889 526.222H656.001C652.229 526.222 648.611 527.721 645.944 530.388C643.277 533.055 641.778 536.672 641.778 540.444C641.778 544.216 643.277 547.834 645.944 550.501C648.611 553.168 652.229 554.667 656.001 554.667H712.889C716.661 554.667 720.279 553.168 722.946 550.501C725.613 547.834 727.112 544.216 727.112 540.444C727.112 536.672 725.613 533.055 722.946 530.388C720.279 527.721 716.661 526.222 712.889 526.222ZM286.209 625.778H343.097C346.869 625.778 350.487 624.279 353.154 621.612C355.821 618.945 357.32 615.327 357.32 611.555C357.32 607.784 355.821 604.166 353.154 601.499C350.487 598.832 346.869 597.333 343.097 597.333H286.209C282.437 597.333 278.819 598.832 276.152 601.499C273.485 604.166 271.986 607.784 271.986 611.555C271.986 615.327 273.485 618.945 276.152 621.612C278.819 624.279 282.437 625.778 286.209 625.778ZM399.986 597.333C396.214 597.333 392.597 598.832 389.93 601.499C387.263 604.166 385.764 607.784 385.764 611.555C385.764 615.327 387.263 618.945 389.93 621.612C392.597 624.279 396.214 625.778 399.986 625.778H513.778C517.55 625.778 521.168 624.279 523.835 621.612C526.502 618.945 528.001 615.327 528.001 611.555C528.001 607.784 526.502 604.166 523.835 601.499C521.168 598.832 517.55 597.333 513.778 597.333H399.986ZM712.889 597.333H570.667C566.895 597.333 563.278 598.832 560.611 601.499C557.943 604.166 556.445 607.784 556.445 611.555C556.445 615.327 557.943 618.945 560.611 621.612C563.278 624.279 566.895 625.778 570.667 625.778H712.889C716.661 625.778 720.279 624.279 722.946 621.612C725.613 618.945 727.112 615.327 727.112 611.555C727.112 607.784 725.613 604.166 722.946 601.499C720.279 598.832 716.661 597.333 712.889 597.333ZM286.209 711.111H428.431C432.203 711.111 435.82 709.613 438.487 706.945C441.155 704.278 442.653 700.661 442.653 696.889C442.653 693.117 441.155 689.499 438.487 686.832C435.82 684.165 432.203 682.667 428.431 682.667H286.209C282.437 682.667 278.819 684.165 276.152 686.832C273.485 689.499 271.986 693.117 271.986 696.889C271.986 700.661 273.485 704.278 276.152 706.945C278.819 709.613 282.437 711.111 286.209 711.111ZM627.556 682.667H485.334C481.562 682.667 477.944 684.165 475.277 686.832C472.61 689.499 471.112 693.117 471.112 696.889C471.112 700.661 472.61 704.278 475.277 706.945C477.944 709.613 481.562 711.111 485.334 711.111H627.556C631.328 711.111 634.946 709.613 637.613 706.945C640.28 704.278 641.778 700.661 641.778 696.889C641.778 693.117 640.28 689.499 637.613 686.832C634.946 684.165 631.328 682.667 627.556 682.667ZM712.889 682.667H684.445C680.673 682.667 677.056 684.165 674.388 686.832C671.721 689.499 670.223 693.117 670.223 696.889C670.223 700.661 671.721 704.278 674.388 706.945C677.056 709.613 680.673 711.111 684.445 711.111H712.889C716.661 711.111 720.279 709.613 722.946 706.945C725.613 704.278 727.112 700.661 727.112 696.889C727.112 693.117 725.613 689.499 722.946 686.832C720.279 684.165 716.661 682.667 712.889 682.667ZM343.097 753.778H286.209C282.437 753.778 278.819 755.276 276.152 757.943C273.485 760.61 271.986 764.228 271.986 768C271.986 771.772 273.485 775.389 276.152 778.057C278.819 780.724 282.437 782.222 286.209 782.222H343.097C346.869 782.222 350.487 780.724 353.154 778.057C355.821 775.389 357.32 771.772 357.32 768C357.32 764.228 355.821 760.61 353.154 757.943C350.487 755.276 346.869 753.778 343.097 753.778ZM499.556 753.778H399.986C396.214 753.778 392.597 755.276 389.93 757.943C387.263 760.61 385.764 764.228 385.764 768C385.764 771.772 387.263 775.389 389.93 778.057C392.597 780.724 396.214 782.222 399.986 782.222H499.556C503.328 782.222 506.946 780.724 509.613 778.057C512.28 775.389 513.778 771.772 513.778 768C513.778 764.228 512.28 760.61 509.613 757.943C506.946 755.276 503.328 753.778 499.556 753.778Z" fill="#6B7280" />
                  </svg>
                </div>
                <textarea id="requirement" name="requirement" required className="block w-full ps-8 sm:ps-9 pe-3 py-2.5 sm:py-3 bg-neutral-secondary-medium border neutral-grey-border text-heading text-xs sm:text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-lg" rows={5} placeholder="Tell us about your project" />
              </div>
            </div>

            {status === "success" && (
              <p className="text-sm font-medium text-green-600">Thank you! Your message has been sent. We&apos;ll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-600">{errorMessage}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded bg-[#1F4FD8] hover:bg-[#8B1E2D] secondary-text px-6 py-3 text-xs sm:text-sm md:text-base font-semibold transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed block w-fit"
          >
            {status === "loading" ? "Sending..." : "Book A Free Consultation"}
          </button>
        </form>
      </div>
    </section>
  );
}
