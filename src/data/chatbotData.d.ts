export type ChatbotKnowledgeItem = {
  keywords: string[];
  response: string | string[];
};

export declare const chatbotKnowledgeBase: ChatbotKnowledgeItem[];

export declare function findChatbotResponse(userMessage: string): {
  response: string | string[];
  isFallback: boolean;
};
