import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-10">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
        About South Texas Liquor License LLC.
      </h1>
      <p className="mt-3 max-w-3xl text-white/85">
        We help businesses navigate liquor licensing and compliance with clear guidance, fast
        communication, and professional support.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        {/* Story card (brighter text + stronger background so it’s not “washed out”) */}
        <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-black/35 p-7 backdrop-blur">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-white/88">
            <p>
              Dee Bazaldua is a true Texan entrepreneur who has made a name for herself as the
              owner of South Texas Liquor License LLC. From Palmview, Texas, Dee is a dedicated
              businesswoman who has helped countless businesses navigate the complex world of liquor
              licensing in the state of Texas.
            </p>
            <p>
              Dee’s career began as a bookkeeper, but her passion for helping others led her to
              venture into the liquor licensing industry in 2011. Since then, she has built an
              impressive reputation as a knowledgeable and experienced professional who can assist
              clients with all aspects of the liquor licensing process.
            </p>
            <p>
              As the owner of South Texas Liquor License LLC, Dee is committed to providing her clients
              with personalized service and building long-term relationships. Although based in the
              Rio Grande Valley, she works with clients all over Texas.
            </p>
          </div>

          <div className="mt-6">
            <Link
              href="/contact#book-consultation"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* B-roll image (you requested a picture / B-roll) */}
        <div className="lg:col-span-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative aspect-[4/5]">
            <Image
              src="/hero/business-3.png"
              alt="Business exterior"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 45%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>
          <div className="p-5 text-sm text-white/80">
            Trusted by businesses across Texas — from local restaurants to nightlife and retail.
          </div>
        </div>
      </div>

      {/* What we do / Why it matters */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h3 className="text-xl font-bold">What We Do</h3>
          <p className="mt-3 text-sm text-white/80">
            We guide you through licensing, filings, and compliance requirements so you can open and
            operate with confidence.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/78">
            <li>• TABC licensing (new, transfer, buy/sell)</li>
            <li>• LLC registration, reinstatement, termination support</li>
            <li>• Site plans, floor plans, bonds, compliance assistance</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h3 className="text-xl font-bold">Why It Matters</h3>
          <p className="mt-3 text-sm text-white/80">
            Licensing mistakes can cause delays, denials, and expensive rework. We help you do it
            right the first time.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/78">
            <li>• Faster, cleaner submissions</li>
            <li>• Reduced risk of compliance issues</li>
            <li>• Clear communication from start to finish</li>
          </ul>
        </div>
      </div>

      <div className="h-10" />
    </div>
  );
}