import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/shared/LegalPage";
import { pricingPlans } from "@/content/pricing";
import { legal, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "The rules for using Dinify — accounts, families, subscriptions, the AI Chef and your content.",
  path: "/terms",
});

// NOTE: written to match how the Dinify backend works today. Have it reviewed by a lawyer before launch.

const mail = (email: string) => <a href={`mailto:${email}`}>{email}</a>;
const base = pricingPlans.find((p) => p.id === "base");

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "About these terms",
    body: (
      <>
        <p>
          These Terms of Service (“Terms”) are an agreement between you and Dinify (“Dinify”, “we”,
          “us”). They apply to the Dinify website, web and mobile apps, the Dinify Chef in Telegram and
          the Dinify connector for AI assistants (together, the “Service”).
        </p>
        <p>
          By creating an account or using the Service you accept these Terms and confirm that you have read our{" "}
          <Link href="/privacy">Privacy Policy</Link>. If you don&apos;t agree, please don&apos;t use the Service.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "What Dinify is",
    body: (
      <>
        <p>
          Dinify is a system for organising a family&apos;s food — not a recipe site or a food shop. It lets your
          family:
        </p>
        <ul>
          <li>keep a shared family menu of the dishes you actually cook;</li>
          <li>plan lunches and dinners for a week or a whole month and print the plan;</li>
          <li>assign who cooks each meal and mark eat-out, delivery, meal-kit and leftover days;</li>
          <li>keep a shared shopping list built from the plan, and track food expenses;</li>
          <li>
            do all of this by talking to the Dinify Chef — an AI assistant — in the app, by voice, in Telegram or
            through your own AI assistant.
          </li>
        </ul>
        <p>
          Dinify does not sell food, does not place orders with restaurants, delivery or meal-kit services and is not
          a party to any agreement you make with them.
        </p>
      </>
    ),
  },
  {
    id: "early-access",
    title: "Early access and changes to the Service",
    body: (
      <p>
        Dinify is in early access. Features may be added, changed or removed, and the Service may occasionally be
        unavailable while we improve it. We&apos;ll give reasonable notice before removing a feature that is a core part
        of a paid plan.
      </p>
    ),
  },
  {
    id: "account",
    title: "Your account",
    body: (
      <ul>
        <li>You must be at least 16 years old to create an account, and of legal age to buy a subscription.</li>
        <li>
          You sign in with your Google account. Keep it secure — anyone with access to it can access your Dinify
          account.
        </li>
        <li>Each account is personal. Don&apos;t share your sign-in with others; invite them to your family instead.</li>
        <li>
          You are responsible for activity in your account. Tell us at {mail(site.email)} if you suspect
          unauthorised access.
        </li>
      </ul>
    ),
  },
  {
    id: "families",
    title: "Families",
    body: (
      <>
        <p>
          Dinify is organised around a family space. The person who creates it is the family owner and can invite and
          remove members.
        </p>
        <ul>
          <li>
            All members can see and change the shared menu, meal plan, shopping list, expenses, budget and family
            preferences.
          </li>
          <li>Only invite people who agree to share this information with each other.</li>
          <li>
            A removed member keeps their account in a personal space; the content created in the family stays with the
            family.
          </li>
          <li>A subscription belongs to the whole family and its benefits apply to every member.</li>
        </ul>
      </>
    ),
  },
  {
    id: "plans",
    title: "Plans, limits and payment",
    body: (
      <>
        <h3>Free plan</h3>
        <p>
          The Free plan gives you the family menu, recipes, weekly and monthly plan and shopping list. You can make
          changes through your own AI assistant (such as ChatGPT or Claude) connected to Dinify. It may include a
          limited trial allowance of the built-in Chef.
        </p>

        <h3>Base subscription</h3>
        <ul>
          <li>
            Base adds the built-in Dinify Chef{base ? ` for ${base.price} per month` : ""}, or the price shown at
            checkout, including any applicable taxes.
          </li>
          <li>
            Payments are processed by Stripe. The subscription is charged in advance and renews automatically every
            month until you cancel.
          </li>
          <li>
            You can cancel at any time from your account. Cancellation takes effect at the end of the current billing
            period, and you keep access until then.
          </li>
          <li>
            Except where the law requires otherwise, payments are non-refundable and we don&apos;t give refunds for
            partly used periods.
          </li>
          <li>
            We may change prices. We&apos;ll tell you at least 30 days in advance, and the new price applies from your
            next billing period — you can cancel before then.
          </li>
        </ul>

        <h3>Fair use of AI</h3>
        <p>
          AI features have a monthly usage allowance per family that is generous for normal family use. If usage is
          unusually high or automated, we may limit it until the next month.
        </p>

        <h3>Right of withdrawal (EU and UK consumers)</h3>
        <p>
          You may withdraw from a new subscription within 14 days of purchase. Because the Service starts immediately,
          you agree that if you withdraw after using the paid features, we may charge for the portion of the period
          already provided. To withdraw, write to {mail(site.email)}.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    title: "AI features and food safety",
    body: (
      <>
        <p>
          The Dinify Chef uses artificial intelligence to understand your requests, generate recipe cards, estimate
          cooking times and nutrition and plan your meals. AI can make mistakes.
        </p>
        <ul>
          <li>
            <strong>Always check ingredients and allergens yourself</strong>, especially if anyone in your family has
            an allergy or intolerance. Dinify can&apos;t guarantee that a recipe or product is free from any allergen.
          </li>
          <li>Follow normal food-safety practice for cooking, storing and reheating food, including leftovers.</li>
          <li>Nutrition values and cooking times are estimates.</li>
          <li>
            Dinify is not medical, dietary or nutritional advice. If you have a medical condition or special dietary
            needs, talk to a qualified professional.
          </li>
        </ul>
        <p>You are responsible for the decisions you make based on the Service.</p>
      </>
    ),
  },
  {
    id: "content",
    title: "Your content",
    body: (
      <>
        <p>
          Your recipes, photos, plans, lists, messages and other content remain yours. You give us a limited licence to
          store, process and display them to provide the Service to you and your family members, including sending them
          to our service providers, such as our AI provider, for that purpose.
        </p>
        <p>
          When Dinify generates a generic recipe card from a dish name, that card may be stored in a shared catalogue
          and reused for other families. Your family details, plans, lists and conversations are never shown to other
          families.
        </p>
        <p>
          Only upload content you have the right to use, and don&apos;t upload other people&apos;s personal information
          without their permission.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>Please don&apos;t:</p>
        <ul>
          <li>use the Service for anything unlawful, harmful or abusive;</li>
          <li>try to access other families&apos; data or our systems without permission;</li>
          <li>disrupt the Service, probe it for vulnerabilities or overload it, including with automated requests;</li>
          <li>
            try to extract our prompts, models or data, or use the Service to build a competing product;
          </li>
          <li>upload malware or content that infringes someone else&apos;s rights;</li>
          <li>resell or sublicense the Service without our written permission.</li>
        </ul>
        <p>
          If you find a security issue, please report it responsibly to {mail(site.email)}.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services",
    body: (
      <>
        <p>
          The Service works with services run by others — Google (sign-in), Stripe (payments), Telegram (bot),
          OpenAI (AI) and, if you connect them, AI assistants such as ChatGPT or Claude. Their own terms and policies
          apply to your use of them, and we aren&apos;t responsible for how they operate.
        </p>
        <p>
          Names of restaurants, delivery and meal-kit services that appear in Dinify are used only to help you plan.
          They are not endorsements, and those services are not affiliated with Dinify unless we say so.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Our intellectual property",
    body: (
      <p>
        Dinify, its logo, design, software and content we create are owned by us or our licensors. These Terms give you
        a personal, non-exclusive, non-transferable right to use the Service; they don&apos;t transfer any ownership. If
        you send us feedback or ideas, we may use them without obligation to you.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Ending your use",
    body: (
      <>
        <p>
          You can stop using Dinify at any time. To delete your account and data, write to {mail(site.email)}{" "}
          from the email linked to your account — see the <Link href="/privacy#retention">Privacy Policy</Link> for
          what happens to your data. If you have an active subscription, cancel it first.
        </p>
        <p>
          We may suspend or close an account that seriously or repeatedly breaks these Terms, or where required by law.
          Where reasonable, we&apos;ll warn you first and give you a chance to export your data.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: (
      <p>
        We work hard to keep Dinify useful and reliable, but the Service is provided “as is” and “as available”. To the
        extent permitted by law, we don&apos;t guarantee that it will always be uninterrupted, error-free or that AI
        output will be accurate. Nothing in these Terms affects your statutory rights as a consumer.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          Nothing in these Terms limits our liability for death or personal injury caused by our negligence, for fraud,
          or for anything else that can&apos;t be limited by law.
        </p>
        <p>
          Otherwise, to the extent permitted by law, we are not liable for indirect or consequential losses, or for
          losses caused by your reliance on AI output without checking it. Our total liability to you is limited to the
          amount you paid us in the 12 months before the claim, or €50 if you used only the Free plan.
        </p>
      </>
    ),
  },
  {
    id: "law",
    title: "Disputes",
    body: (
      <p>
        If you are a consumer, you keep the protection of the mandatory laws of the country where you live and may
        bring a claim in its courts. Before going to court, please contact us at {mail(site.email)} — most issues can be
        solved quickly.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    body: (
      <p>
        We may update these Terms. For significant changes we&apos;ll notify you in the app or by email at least 30 days
        before they take effect. If you keep using the Service after that, the new Terms apply; if you don&apos;t agree,
        you can cancel and stop using Dinify.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these Terms, your account or subscription: {mail(site.email)}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated={legal.updated}
      intro="The rules for using Dinify — your account and family, subscriptions, the AI Chef and your content."
      summary={[
        "Dinify organises your family's food: menu, plan, shopping list and the AI Chef. It doesn't sell food or place orders for you.",
        "You sign in with Google and must be 16 or older. Everyone in a family shares the same menu, plan and list.",
        "Free is free. Base is a monthly family subscription via Stripe — cancel any time, access lasts until the period ends.",
        "AI can be wrong: always check ingredients and allergens yourself. Dinify is not medical or dietary advice.",
        "Your content stays yours. We use it only to run Dinify for you and your family.",
      ]}
      sections={sections}
    />
  );
}
