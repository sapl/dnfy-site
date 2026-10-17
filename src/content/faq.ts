export type FaqItem = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        q: "What is Dinify?",
        a: "Dinify is a family meal organizer. It keeps your family menu, a weekly and monthly meal plan, the shopping list and who cooks what — all in one place, managed by talking to the Dinify Chef.",
      },
      {
        q: "Who is Dinify for?",
        a: "Busy families who want to eat varied and tasty food without the daily “what's for dinner?” scramble. If you love hunting for new recipes every day, Dinify is probably not for you — it's built to take decisions off your plate.",
      },
      {
        q: "Is it a diet or calorie-counting app?",
        a: "No. Dinify is not about calories or diets — it's about real family life: who's cooking, what's in the fridge, when you eat out and how to free up evenings.",
      },
      {
        q: "When can I start using Dinify?",
        a: "Right now — Dinify is live. Open app.dinify.me, sign in with Google and the Chef will set up your family in a 2-minute chat.",
      },
    ],
  },
  {
    id: "chef",
    title: "The Chef & AI",
    items: [
      {
        q: "How does the setup chat work?",
        a: "It takes about two minutes. The Chef asks a few questions about your family — who eats what, allergies and dislikes, who usually cooks, which days you order in — and builds your first plan from that.",
      },
      {
        q: "Can I use my own ChatGPT or Claude?",
        a: "Yes. On the Free plan you connect Dinify to your own AI chat (the ChatGPT app or Claude) and edit your menu, plan and shopping list from there.",
      },
      {
        q: "Does it understand voice?",
        a: "Yes — on the Base plan you can talk to the built-in Chef out loud, right inside the app.",
      },
      {
        q: "Can I use Dinify in Telegram?",
        a: "Yes. Link the Dinify bot in Telegram to talk to the Chef there, send photos of recipes or receipts, and get your family's plan for the day every afternoon.",
      },
      {
        q: "Do I have to type in recipes and ingredients?",
        a: "No. Just name the dish — the Chef fills in ingredients, cooking time and how many days it lasts. You can tweak any detail in plain words.",
      },
    ],
  },
  {
    id: "planning",
    title: "Planning & shopping",
    items: [
      {
        q: "How does the cooking split work?",
        a: "Every cooking meal in the plan has an owner, so everyone sees whose turn it is. The Chef balances the load between family members.",
      },
      {
        q: "What does “cook once, eat for days” mean?",
        a: "Dinify plans leftovers on purpose: one pot can cover two or three days, so nothing is cooked in vain or forgotten in the fridge.",
      },
      {
        q: "Can I plan restaurants, delivery and meal kits?",
        a: "Yes. Eat-out, delivery and meal-kit days are first-class slots in the plan, so the calendar always reflects what actually happens.",
      },
      {
        q: "How is the shopping list built?",
        a: "Missing ingredients for the upcoming meals are pulled from the plan automatically. Tick items off in the store — everyone in the family sees the same list.",
      },
    ],
  },
  {
    id: "billing",
    title: "Pricing & account",
    items: [
      {
        q: "Is there a free plan?",
        a: "Yes. The Free plan includes the menu, recipes, weekly and monthly plan and the shopping list. Base adds the built-in Chef chat for €3.99 per month.",
      },
      {
        q: "Can the whole family use one account?",
        a: "Yes — Dinify is built around a family. Invite your partner and kids; everyone sees the same plan and list.",
      },
      {
        q: "What happens to my family's data?",
        a: "It's used only to run Dinify for your family. The Chef runs on OpenAI models that don't train on your data, voice messages aren't stored as audio, and you can ask us to export or delete everything at any time. Details are in our Privacy Policy.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Of course. You can downgrade to Free or cancel at any time — your menu and plan stay with you.",
      },
    ],
  },
];
