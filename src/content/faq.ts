export type FaqItem = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        q: "What is Dinify?",
        a: "Dinify is a family meal organizer. It keeps your family menu, a weekly and monthly meal plan, who cooks what, the shopping list and your food spending in one place — and you run it by talking to the Dinify Chef instead of filling in forms.",
      },
      {
        q: "Who is Dinify for?",
        a: "Busy families who want varied home food without the daily “what's for dinner?” scramble — especially when one person usually ends up planning and cooking everything. If you love hunting for new recipes every day, or a cook runs your kitchen, Dinify is probably not for you: it's built to take decisions off your plate.",
      },
      {
        q: "Is it a recipe app?",
        a: "Not really. Dinify works with your family's own dishes — the ones you actually cook — rather than a big catalog of someone else's recipes. The Chef helps you write them down, fill in the details and spread them across the month.",
      },
      {
        q: "Is it a diet or calorie-counting app?",
        a: "No. Dinify is about real family life: who's cooking, what's left in the fridge, when you eat out and how to free up evenings. Each dish does show calories, macros and a simple balance score per serving, but there are no diets, goals or tracking.",
      },
      {
        q: "Does it work on my phone?",
        a: "Yes. Dinify is a web app that works in any modern browser on your phone, tablet or computer. You can add it to your home screen and it opens full-screen like an app. There's no separate App Store or Google Play app yet.",
      },
      {
        q: "Which languages are supported?",
        a: "The app is fully available in English, Spanish, German and Russian. The Chef talks to you and writes recipes in your family's language, which you can change in your profile.",
      },
    ],
  },
  {
    id: "start",
    title: "Getting started",
    items: [
      {
        q: "How do I sign up?",
        a: "Open app.dinify.me and sign in with your Google account — that's the whole registration. A family is created for you automatically, and the Chef starts a short setup chat.",
      },
      {
        q: "Can I sign in without Google?",
        a: "Not yet. For now, Google is the only way to sign in.",
      },
      {
        q: "How does the setup chat work?",
        a: "It takes about two minutes. The Chef asks who's in your family and who usually cooks, about allergies and foods you don't eat, and which soups and everyday dishes you cook most often. Those dishes go straight into your family menu, so you can start planning right away.",
      },
      {
        q: "How do I add my partner and kids?",
        a: "Copy the invite link from your profile and send it to them. They sign in with Google through that link and join your family — everyone then shares the same menu, plan, shopping list and budget.",
      },
      {
        q: "What if someone leaves the family?",
        a: "Any member can leave, and the person who created the family can remove members. Whoever leaves keeps their account with a fresh, empty family; the shared menu and plan stay with the rest of the family.",
      },
    ],
  },
  {
    id: "chef",
    title: "The Chef & AI",
    items: [
      {
        q: "What can the Chef do?",
        a: "Add and edit dishes, plan a day, a week or a whole month, choose who cooks, update the shopping list and log what you spent on food. Each part of the app has its own Chef chat that already knows what you're looking at — the plan, a recipe or the list.",
      },
      {
        q: "Do I have to type in recipes and ingredients?",
        a: "No. Just name the dish — the Chef fills in ingredients, steps, active and total cooking time, how many days it lasts and nutrition per serving. To change something, say it in plain words: “make it without onions” or “it actually lasts three days”.",
      },
      {
        q: "Can I talk to it instead of typing?",
        a: "Yes. Tap the microphone and speak — Dinify turns your voice into a message and sends it to the Chef. Audio recordings aren't stored.",
      },
      {
        q: "Can I send photos?",
        a: "Yes. Send a photo or screenshot of a recipe and the Chef turns it into a dish in your menu; send a receipt and it logs the expense. You can also use a photo as the picture for a dish. On a computer, paste or drag an image into the chat.",
      },
      {
        q: "Does the Chef remember my family?",
        a: "Yes. It knows your favourite cuisines and the foods you exclude, and keeps short notes about your family's routine and tastes that you can read in your profile. It asks follow-up questions when something is missing.",
      },
      {
        q: "Is it safe for allergies?",
        a: "The Chef takes the foods you exclude into account when it writes recipes and plans, but it's an AI and can make mistakes. If someone has a serious allergy, always check the ingredients yourself.",
      },
    ],
  },
  {
    id: "menu",
    title: "Family menu",
    items: [
      {
        q: "What is the family menu?",
        a: "It's the list of dishes your family actually eats, grouped into mains, soups, salads, starters, breakfasts, desserts and “Ready” food. Every plan is built from this menu, so the more dishes it has, the more varied your weeks get.",
      },
      {
        q: "What's on a dish card?",
        a: "Ingredients, steps, active and total cooking time, how many days it lasts, a photo and a link to the source if there is one. You also see calories and macros per serving, a balance score out of 10, and when you last ate it or when it's next in the plan.",
      },
      {
        q: "How do I edit a dish?",
        a: "Open it and tell the Chef what to change. Dish cards don't have edit forms on purpose — one sentence is faster than a dozen fields.",
      },
      {
        q: "What are “Ready” dishes?",
        a: "Food you don't cook: your favourite takeaway, a restaurant, a meal kit or something ready-made. Add them to the menu once, and you can put them in the plan like any other dish.",
      },
      {
        q: "Can I search and sort the menu?",
        a: "Yes. Search by name or tag, filter by category or tag, and sort by date added, cooking time or how filling a dish is.",
      },
    ],
  },
  {
    id: "planning",
    title: "Meal planning",
    items: [
      {
        q: "Which meals does Dinify plan?",
        a: "Lunch and dinner — the meals that need decisions every day. Breakfast is usually the same routine, so the plan stays clean without it.",
      },
      {
        q: "Can the Chef plan the whole week or month for me?",
        a: "Yes. Ask for a week or a month and the Chef builds it in one go from your menu: no repeats within a week, soups not too often, at least two days a week without cooking, and restaurants or delivery where your family usually has them. By default it only fills empty slots — it rewrites what's already planned only if you ask.",
      },
      {
        q: "Can I plan by hand?",
        a: "Of course. On a computer, drag dishes from the menu into a day and a slot, and drag planned meals around to move or swap them. From any dish card you can also put it on today's or tomorrow's lunch or dinner in one tap.",
      },
      {
        q: "How does the cooking split work?",
        a: "Every cooked meal has an owner. New meals go to your family's main cook by default; tap the avatar on a meal to hand it to someone else. Today's meals say “Your turn!” to whoever is cooking, and when the Chef plans a week it spreads the cooking across the family.",
      },
      {
        q: "What does “cook once, eat for days” mean?",
        a: "Some dishes last two or three days. When you plan one, Dinify fills the next days in the same slot with “ready — eat what's left”, so leftovers get eaten instead of forgotten, and those days need no cooking.",
      },
      {
        q: "Can I plan restaurants, delivery and meal kits?",
        a: "Yes. Restaurant, delivery and meal-kit days are regular slots in the plan, so the calendar shows what really happens — and which days are free from the kitchen.",
      },
      {
        q: "Can I print the plan?",
        a: "Yes. In the month view, the print button makes a clean black-and-white A4 landscape calendar — made for the fridge door.",
      },
    ],
  },
  {
    id: "shopping",
    title: "Shopping list",
    items: [
      {
        q: "How is the shopping list built?",
        a: "Next to your list, Dinify shows the ingredients of the dishes planned for today and tomorrow. Tap the ones you're missing to add them, or ask the Chef to sort it out. It looks only a day ahead on purpose — fresh food bought for a whole week often ends up in the bin.",
      },
      {
        q: "How do I add items?",
        a: "Type a few at once, separated by commas (“bread, milk, eggs”), say them out loud or ask the Chef. Items are grouped by store aisle — produce, dairy, bakery and so on.",
      },
      {
        q: "Does the whole family see the same list?",
        a: "Yes. There's one list per family. Tick items off in the store and everyone sees what's already in the basket.",
      },
      {
        q: "What are Regulars and History?",
        a: "Bought items move to History. Star the things you buy all the time and they go to Regulars. Dinify learns how often you buy each product and how fast it spoils, and highlights the ones it's time to buy again.",
      },
      {
        q: "Does it count quantities?",
        a: "No. The list says “carrots”, not “350 g of carrots” — you know how much your family needs, and it keeps the list quick to read in the store.",
      },
    ],
  },
  {
    id: "spending",
    title: "Spending & budget",
    items: [
      {
        q: "Can I track what we spend on food?",
        a: "Yes. Log groceries, restaurants, delivery and meal kits — or any category of your own — by typing something like “45 groceries” or by sending a photo of the receipt.",
      },
      {
        q: "How does the budget work?",
        a: "Set a monthly food budget in your profile. Dinify shows what's left for the month and for the current week, warns you when spending gets ahead of pace, and breaks the month down by category.",
      },
      {
        q: "Which currency is used?",
        a: "Your family's currency is set from the country you choose in your profile.",
      },
    ],
  },
  {
    id: "channels",
    title: "Telegram, ChatGPT & Claude",
    items: [
      {
        q: "Can I use Dinify in Telegram?",
        a: "Yes. Link your Dinify account to @dinify_bot and talk to the same Chef there — plan, add dishes, update the shopping list or send a photo of a recipe.",
      },
      {
        q: "Will Dinify remind me what's for lunch?",
        a: "If you've linked Telegram, the bot sends each family member today's plan at 1 pm in your family's time zone, on days when something is planned. There are no other notifications yet.",
      },
      {
        q: "Can I use my own ChatGPT or Claude?",
        a: "Yes. Dinify connects to ChatGPT and Claude as a connector, so you can read and edit your menu, plan, shopping list and spending right from your own AI chat. This is how editing works on the Free plan.",
      },
      {
        q: "How do I connect ChatGPT or Claude?",
        a: "Add a custom connector with the address https://app.dinify.me/mcp and sign in with the same Google account you use for Dinify. It works with other AI apps that support MCP connectors too.",
      },
    ],
  },
  {
    id: "billing",
    title: "Pricing & privacy",
    items: [
      {
        q: "Is there a free plan?",
        a: "Yes. Free includes the menu, recipes, weekly and monthly plan, printing and the shopping list; you edit things through your own ChatGPT or Claude. Base adds the built-in Chef chat inside Dinify — with voice and smart planning — for €3.99 per month.",
      },
      {
        q: "Does one subscription cover the whole family?",
        a: "Yes. A plan belongs to the family, not to a single person — everyone in your family gets the same features.",
      },
      {
        q: "How do I pay?",
        a: "By card through Stripe. We never see your card details.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Of course. You can cancel whenever you like and go back to Free — your menu, plan and list stay with you.",
      },
      {
        q: "What happens to my family's data?",
        a: "It's used only to run Dinify for your family — never sold or used for ads. The Chef runs on OpenAI models that don't train on your data, and voice messages aren't stored as audio. You can ask us to export or delete everything at any time; details are in our Privacy Policy.",
      },
    ],
  },
];
