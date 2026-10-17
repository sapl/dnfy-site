import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/shared/LegalPage";
import { legal, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What data Dinify collects, how the Dinify Chef uses it, who processes it and how you stay in control.",
};

// NOTE: written to match how the Dinify backend works today. Have it reviewed by a lawyer before launch.

const mail = (email: string) => <a href={`mailto:${email}`}>{email}</a>;

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Dinify is a family meal-planning service: a shared family menu, a weekly and monthly meal plan, a shopping
          list and an AI assistant — the Dinify Chef — that you talk to in a chat or by voice.
        </p>
        <p>
          Dinify (“Dinify”, “we”, “us”) is the controller responsible for your personal data.
          For anything related to privacy, write to {mail(site.email)}.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "What this policy covers",
    body: (
      <>
        <p>This policy applies to:</p>
        <ul>
          <li>
            this website, <a href={site.url}>{site.url.replace("https://", "")}</a>;
          </li>
          <li>
            the Dinify web app at <a href={site.appUrl}>{site.appUrl.replace("https://", "").replace(/\/$/, "")}</a> and the mobile apps
            built from it;
          </li>
          <li>
            the Dinify Chef in Telegram (<a href={site.telegramBot}>@dinify_bot</a>);
          </li>
          <li>the Dinify connector that lets ChatGPT, Claude and similar assistants work with your Dinify data.</li>
        </ul>
        <p>Together we call these the “Service”.</p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Information we collect",
    body: (
      <>
        <h3>Account information</h3>
        <p>
          You sign in with Google. From your Google account we receive your <strong>name</strong>,{" "}
          <strong>email address</strong> and <strong>profile picture</strong>. We store a copy of the picture as your
          Dinify avatar. We never receive your Google password.
        </p>

        <h3>Your family profile</h3>
        <p>
          Dinify is built around a family. During the short onboarding chat and later, you may tell the Chef, and we
          store:
        </p>
        <ul>
          <li>the family name and its members, and who is the main cook;</li>
          <li>language, time zone and country (used for currency and local products);</li>
          <li>
            food preferences: favourite cuisines and dishes, foods you exclude, allergies or diets, how often you cook,
            eat out or order delivery;
          </li>
          <li>notes the Chef keeps about your family so it can plan “like a member of the household”;</li>
          <li>an optional monthly food budget.</li>
        </ul>

        <h3>Content you create</h3>
        <ul>
          <li>recipes in your family menu, including photos you add;</li>
          <li>
            your meal plan: dishes per day and meal, who cooks them, and eat-out, delivery, meal-kit or ready-made
            slots;
          </li>
          <li>your shopping list, favourite items and a short history of what you buy;</li>
          <li>food expenses you record: amount, category and comment.</li>
        </ul>

        <h3>Conversations with the Chef</h3>
        <ul>
          <li>
            <strong>Messages</strong> you send and the Chef&apos;s replies, in the app or in Telegram, are stored as
            your chat history.
          </li>
          <li>
            <strong>Images</strong> you send (for example a photo of a receipt or a recipe) are stored so they can be
            shown in your chat.
          </li>
          <li>
            <strong>Voice:</strong> when you dictate a message, the audio is sent for transcription and only the
            resulting text is kept. <strong>We do not store audio recordings.</strong>
          </li>
        </ul>

        <h3>Telegram</h3>
        <p>
          If you link the Telegram bot, we store your Telegram username and chat ID so the Chef can answer you there
          and send your daily meal plan.
        </p>

        <h3>Connected AI assistants</h3>
        <p>
          If you connect Dinify to ChatGPT, Claude or another assistant, we store the technical authorization for that
          connection (client registration and access tokens).
        </p>

        <h3>Subscription and payment</h3>
        <p>
          Payments are handled by Stripe. We store your Stripe customer and subscription identifiers and whether your
          subscription is active. <strong>We never see or store your card details.</strong>
        </p>

        <h3>Technical information</h3>
        <ul>
          <li>server logs with your IP address, requests, time stamps and error details;</li>
          <li>aggregated AI usage per family (amount of AI processing used per day), used for plan limits;</li>
          <li>an authentication cookie in the web app that keeps you signed in.</li>
        </ul>

        <h3>Emails to us</h3>
        <p>If you write to us, we receive your email address and whatever you include in your message.</p>
      </>
    ),
  },
  {
    id: "sensitive-data",
    title: "Allergies, diets and other sensitive details",
    body: (
      <>
        <p>
          Information about allergies, intolerances or diets can reveal something about your or your family&apos;s
          health. Sharing it is <strong>optional</strong>. If you choose to tell the Chef, we use it only to plan
          suitable meals and shopping lists for your family, based on your explicit consent. You can ask the Chef to
          forget it, or remove it from your profile, at any time.
        </p>
        <p>
          Please only share details about other family members if they are happy for you to do so, or if you are their
          parent or guardian.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Data used</th>
            <th>Legal basis (GDPR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Create and run your account and family</td>
            <td>Account, family profile</td>
            <td>Performance of our contract with you</td>
          </tr>
          <tr>
            <td>Build and update your menu, meal plan and shopping list; answer you in the chat</td>
            <td>Family profile, content, conversations</td>
            <td>Performance of contract</td>
          </tr>
          <tr>
            <td>Take allergies and diets into account</td>
            <td>Health-related preferences</td>
            <td>Your explicit consent</td>
          </tr>
          <tr>
            <td>Send your daily plan in Telegram</td>
            <td>Telegram ID, meal plan</td>
            <td>Performance of contract (you can turn it off by unlinking the bot)</td>
          </tr>
          <tr>
            <td>Take payments and manage your subscription</td>
            <td>Email, Stripe identifiers</td>
            <td>Performance of contract; legal obligations (tax, accounting)</td>
          </tr>
          <tr>
            <td>Apply plan limits and keep AI costs fair</td>
            <td>AI usage statistics</td>
            <td>Legitimate interest</td>
          </tr>
          <tr>
            <td>Keep the Service secure, fix bugs and improve features</td>
            <td>Technical information, conversations where needed to investigate a problem</td>
            <td>Legitimate interest</td>
          </tr>
          <tr>
            <td>Answer messages you send us</td>
            <td>Your emails to us</td>
            <td>Legitimate interest; steps at your request before a contract</td>
          </tr>
          <tr>
            <td>Product news by email</td>
            <td>Email</td>
            <td>Consent — you can unsubscribe at any time</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "ai",
    title: "How the Dinify Chef uses AI",
    body: (
      <>
        <p>
          The Chef is powered by large language models provided by <strong>OpenAI</strong>. To answer a request, we send
          OpenAI what is needed for that request: your message, relevant family context (for example preferences and
          the current plan), images you attach and, for voice input, the audio to transcribe. AI is also used to fill in
          recipe cards — ingredients, steps, cooking time and nutrition — from just a dish name.
        </p>
        <ul>
          <li>
            OpenAI processes this data on our behalf. Under OpenAI&apos;s API terms, data sent through the API is not
            used to train their models.
          </li>
          <li>We do not sell your conversations or use them for advertising.</li>
          <li>
            AI answers can be wrong. Always check ingredients and allergens yourself — see our{" "}
            <Link href="/terms#ai">Terms of Service</Link>.
          </li>
          <li>
            Dinify does not make decisions about you that have legal or similarly significant effects based solely on
            automated processing.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "family-sharing",
    title: "Sharing within your family",
    body: (
      <>
        <p>
          Members of the same family share one space. Everyone in your family can see and change the family menu, meal
          plan, shopping list, expenses, budget and family preferences, and sees who is cooking which meal.
        </p>
        <p>
          The family owner can remove members. A removed member moves to their own personal space; content created in
          the family stays with the family.
        </p>
      </>
    ),
  },
  {
    id: "connected-services",
    title: "Connected services",
    body: (
      <>
        <ul>
          <li>
            <strong>ChatGPT, Claude and other assistants.</strong> When you connect one of them to Dinify, that
            assistant can read and change your family&apos;s Dinify data on your instructions. What you say in that
            assistant is governed by its provider&apos;s privacy policy, not ours. You can revoke the connection at any
            time.
          </li>
          <li>
            <strong>Telegram.</strong> Messages you exchange with the bot also pass through Telegram and are subject to
            Telegram&apos;s privacy policy.
          </li>
          <li>
            <strong>Meal kits, delivery and restaurants.</strong> Planning a meal-kit, delivery or restaurant slot is
            just a note in your plan. We do not send your data to those services or place orders for you.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share data with",
    body: (
      <>
        <p>
          <strong>We don&apos;t sell your personal data</strong> and we don&apos;t share it with advertisers. We use a
          small number of service providers (processors) who act on our instructions and are bound by data-protection
          agreements:
        </p>
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>What for</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OpenAI</td>
              <td>AI chat, image understanding, speech-to-text, recipe data</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>Google</td>
              <td>Sign-in with Google</td>
              <td>United States / EU</td>
            </tr>
            <tr>
              <td>Stripe</td>
              <td>Subscription payments</td>
              <td>United States / EU</td>
            </tr>
            <tr>
              <td>Amazon Web Services</td>
              <td>Storage of avatars, recipe photos and chat images</td>
              <td>Ireland (EU)</td>
            </tr>
            <tr>
              <td>Telegram</td>
              <td>Delivering messages if you use the Telegram bot</td>
              <td>Varies</td>
            </tr>
            <tr>
              <td>Hosting provider</td>
              <td>Servers and database</td>
              <td>Under a data-processing agreement</td>
            </tr>
          </tbody>
        </table>
        <p>
          We may also disclose information if required by law, to protect the rights and safety of our users, or as
          part of a merger or acquisition — in which case we will tell you before your data becomes subject to a
          different policy.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "International transfers",
    body: (
      <p>
        Some providers process data outside the European Economic Area, mainly in the United States. Where that
        happens, we rely on an adequacy decision (such as the EU–US Data Privacy Framework) or the European
        Commission&apos;s Standard Contractual Clauses, together with additional safeguards where needed.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    body: (
      <>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Kept</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account, family profile, menu, plan, shopping list, expenses</td>
              <td>While your account is active</td>
            </tr>
            <tr>
              <td>Chat history and images you sent</td>
              <td>While your account is active, unless you ask us to delete them earlier</td>
            </tr>
            <tr>
              <td>Voice recordings</td>
              <td>Not stored — discarded right after transcription</td>
            </tr>
            <tr>
              <td>Connections to AI assistants</td>
              <td>Until you revoke them or they expire (access up to 30 days, refresh up to 1 year)</td>
            </tr>
            <tr>
              <td>Payment and invoice records</td>
              <td>As long as tax and accounting laws require</td>
            </tr>
            <tr>
              <td>Server logs</td>
              <td>For a limited period needed for security and troubleshooting</td>
            </tr>
            <tr>
              <td>Messages you send us</td>
              <td>Until your request is resolved, then up to 12 months</td>
            </tr>
          </tbody>
        </table>
        <p>
          When you ask us to delete your account, we delete your account and your personal family data within 30 days,
          except records we must keep by law. Generic recipe cards that other families also use may remain without any
          link to you.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We protect your data with encrypted connections (HTTPS), signed access tokens, restricted access to production
        systems and providers that meet recognised security standards. No system is perfectly secure, so if you
        believe your account has been compromised, contact us immediately at {mail(site.email)}.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Depending on where you live — including under the GDPR — you have the right to:</p>
        <ul>
          <li>access the personal data we hold about you and receive a copy;</li>
          <li>correct inaccurate data (most details you can simply change by telling the Chef);</li>
          <li>delete your data or your whole account;</li>
          <li>export your data in a portable format;</li>
          <li>object to or restrict processing based on legitimate interest;</li>
          <li>withdraw consent at any time, for example for allergy information or product emails.</li>
        </ul>
        <p>
          To use any of these rights, write to {mail(site.email)} from the email linked to your account. We reply
          within one month. You also have the right to complain to your local data-protection authority.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Accounts are for people aged 16 or older. Dinify is meant for the adults who organise a family&apos;s food;
        parents may add information about their children, such as their food preferences, to the family profile. If
        you believe a child under 16 has created an account, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    body: (
      <>
        <p>
          <strong>This website</strong> doesn&apos;t use advertising or analytics cookies.
        </p>
        <p>
          <strong>The web app</strong> uses one strictly necessary cookie to keep you signed in (it lasts up to six
          months, or until you log out) and your browser&apos;s local storage for interface settings. These are needed
          for the Service to work and don&apos;t require consent. If we ever add analytics, we&apos;ll ask you first.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy as Dinify grows. If a change is significant, we&apos;ll tell you in the app or by
        email before it takes effect. The date at the top of this page shows when it was last updated.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about privacy or anything else: {mail(site.email)}.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={legal.updated}
      intro="Your family's food habits are personal. Here's what we collect, why we need it, who helps us process it and how you stay in control."
      summary={[
        "We collect only what's needed to plan your family's meals: your account, family profile, recipes, plan, shopping list and chats with the Chef.",
        "The Chef runs on OpenAI models. Your data isn't used to train their models, and we never sell it or use it for ads.",
        "Voice messages are transcribed and the audio is not stored.",
        "Card payments go through Stripe — we never see your card details.",
        <>
          You can access, export or delete your data at any time — just write to {mail(site.email)}.
        </>,
      ]}
      sections={sections}
    />
  );
}
