import { FetchMode, Quote } from "./types-and-enums";

export const getRandomQuoteFromApi = async (
  mode: FetchMode,
): Promise<{ quote?: Quote }> => {
  let url = "http://localhost:3000/api/v1/quotes/random";
  if (mode) {
    url += "?results=" + 3;
  }
  const response = await fetch(url);
  const { quote }: { quote?: Quote; quotes: Quote[] } = await response.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ quote });
    }, 500);
  });
};

export const renderQuote = (
  quotesContainer: HTMLElement,
  data: { quote?: Quote },
) => {
  const quoteTemplate = document.getElementById(
    "quote-template",
  ) as HTMLTemplateElement;
  if (data.quote) {
    const quoteClone = document.importNode(quoteTemplate.content, true);
    const quoteEl = quoteClone.querySelector(".quote") as HTMLDivElement;
    const quoteTextEl = quoteEl.querySelector(
      ".quote-text",
    ) as HTMLHeadingElement;
    const quoteAuthorEl = quoteEl.querySelector(
      ".quote-author",
    ) as HTMLHeadingElement;
    quoteTextEl.textContent = data.quote.text;
    quoteAuthorEl.textContent = data.quote.user.name;
    quotesContainer.appendChild(quoteEl);
  }
};
