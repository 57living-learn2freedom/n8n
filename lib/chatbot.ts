export const CHATBOT_GREETING =
  "Hello! Welcome to 57Lelong. How can I assist you today? 🤖";

export const CHATBOT_FALLBACK_RESPONSE =
  "I'm sorry, I couldn't quite catch that. Could you try rephrasing? Alternatively, you can fill out the consultation form to speak directly with our human Lelong specialist!";

export const CHATBOT_KEYWORD_MAP: {
  keywords: string[];
  response: string;
}[] = [
  {
    keywords: ["hi", "hello", "hey", "greetings", "morning", "afternoon"],
    response:
      "Hello there! 👋 Are you looking to search for a specific property, or would you like to know how to get started with the bank auction (Lelong) process?",
  },
  {
    keywords: ["view", "inspect", "see", "inside"],
    response:
      "For auction (Lelong) properties, you can only inspect the property from the outside. No interior viewing is allowed as the property might still be occupied or locked.",
  },
  {
    keywords: ["deposit", "pay", "prepare", "10%"],
    response:
      "You need to prepare a bank draft equivalent to 10% of the reserve price before the auction day. If you lose the bid, the bank draft will be returned to you immediately.",
  },
  {
    keywords: ["bill", "maintenance", "water", "assessment", "outstanding"],
    response:
      "Please note that outstanding maintenance, water, or assessment bills might need to be borne by the winning bidder. This depends strictly on the Proclamation of Sale (POS) issued by the bank.",
  },
  {
    keywords: ["title", "caveat", "search"],
    response:
      "We highly recommend doing a land title search to check for caveats or encumbrances before participating in the bidding process. We can assist you with this!",
  },
  {
    keywords: ["bid", "process", "how to", "start"],
    response:
      "The process is simple: 1. Select a property. 2. Prepare the 10% deposit. 3. We will register you for the auction. 4. Bid online or onsite. Would you like to get a free consultation with our specialist?",
  },
];

export function getChatbotResponse(userInput: string): string {
  const normalized = userInput.toLowerCase();

  // Greeting keywords are checked first for priority over all other rules.
  for (const entry of CHATBOT_KEYWORD_MAP) {
    if (entry.keywords.some((keyword) => normalized.includes(keyword))) {
      return entry.response;
    }
  }

  return CHATBOT_FALLBACK_RESPONSE;
}
