import { FetchMode, Quote } from "./types-and-enums";

export const getRandomQuoteFromApi = async (
  mode: FetchMode,
): Promise<{ quote?: Quote; quotes?: Quote[] }> => {
  let url = "http://localhost:3000/api/v1/quotes/random";
  if (mode) {
    url += "?results=" + 4;
  }
  const response = await fetch(url);
  const { quote, quotes }: { quote?: Quote; quotes?: Quote[] } = await response.json();  
  
  return new Promise((resolve, reject) => {
    if (!quote && !quotes) return reject({error: 'No quote found in database.'});

    setTimeout(() => {
      if (mode) {
        resolve({ quotes });
      } else {
        resolve({ quote });
      }      
    }, 500);
  });
};

export const renderQuote = (
  quotesContainer: HTMLElement,
 quote?: Quote,
) => {
  const quoteTemplate = document.getElementById(
    "quote-template",
  ) as HTMLTemplateElement;
  if (quote) {
    const quoteClone = document.importNode(quoteTemplate.content, true);
    const quoteEl = quoteClone.querySelector(".quote") as HTMLDivElement;
    const quoteTextEl = quoteEl.querySelector(
      ".quote-text",
    ) as HTMLHeadingElement;
    const quoteAuthorEl = quoteEl.querySelector(
      ".quote-author",
    ) as HTMLHeadingElement;
    quoteTextEl.textContent = quote.text;
    quoteAuthorEl.textContent = quote.user.name;
    quotesContainer.appendChild(quoteEl);
  }
};
