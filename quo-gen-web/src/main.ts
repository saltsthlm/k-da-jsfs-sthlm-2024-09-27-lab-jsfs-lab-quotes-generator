import "./style.css";
import { FetchMode } from "./types-and-enums";
import { getRandomQuoteFromApi, renderQuote } from "./quotes.module";

let currentFetchMode = FetchMode.Single;
const singleFetchModeBtn = document.querySelector("#singleFetchMode");
const multipleFetchModeBtn = document.querySelector("#multipleFetchMode");

export const showLoader = (loaderEl: HTMLElement | null) => {
  loaderEl?.removeAttribute("hidden");
};

export const hideLoader = (loaderEl: HTMLElement | null) => {
  loaderEl?.setAttribute("hidden", "true");
};

export const changeFetchMode = (mode: FetchMode) => {
  currentFetchMode = mode;
};

const showErrorToast = (message: string) => {
  const toastTemplate = document.getElementById(
    "toast-template",
  ) as HTMLTemplateElement;
  if (!toastTemplate) return;
  const toastClone = document.importNode(toastTemplate.content, true);
  document.body.appendChild(toastClone);
  const newToast = document.body.lastElementChild;
  if (!newToast) return;
  newToast.textContent = message;
  setTimeout(() => {
    newToast.classList.add("fade-in");
  }, 10);
  setTimeout(() => {
    newToast.remove();
  }, 1500);
};

export const getRandomQuote = async () => {
  const loader = document.getElementById("loader");
  const quoteEl = document.querySelector("#quotesContainer") as HTMLDivElement;
  try {
    showLoader(loader);
    const { quote, quotes } = await getRandomQuoteFromApi(currentFetchMode);
    quoteEl.innerHTML = "";
    if (quotes) {
      quotes.forEach(quote => renderQuote(quoteEl, quote));
    } else {
      renderQuote(quoteEl, quote);
    }    
    hideLoader(loader);
  } catch (error) {
    console.error("Failed to fetch random quote:", error);
    showErrorToast("Failed to fetch random quote");
    hideLoader(loader);
  } 
};

const addListeners = () => {
  const refetchQuoteBtn = document.querySelector("#refetchQuoteBtn");
  refetchQuoteBtn?.addEventListener("click", () => {
    getRandomQuote();
  });
  singleFetchModeBtn?.addEventListener("click", () => {
    changeFetchMode(FetchMode.Single);
  });
  multipleFetchModeBtn?.addEventListener("click", () => {
    changeFetchMode(FetchMode.Multiple);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  addListeners();
  changeFetchMode(FetchMode.Single);
  getRandomQuote();
});
