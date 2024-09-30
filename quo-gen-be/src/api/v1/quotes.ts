import { Router } from "express";
import { QUOTES_LIST, Quote } from "../../data/quotes";
import {
  getMultipleRandomQuotes,
  getRandomQuote,
} from "../../utils/quotes-helper";

const router = Router();

router.get("/random", async (req, res) => {
  try {
    const randomQuote = getRandomQuote<Quote>(QUOTES_LIST);
    if(Object.keys(req.query).length !== 0){
      const results = req.query.results
      if(typeof results === "string" ){
        const inputResult = parseInt(results)
        console.log(inputResult)
        const getRandomQuotes = getMultipleRandomQuotes<Quote>(QUOTES_LIST, 3);
      }
    }
    res.json({
      quote: randomQuote,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all quotes" });
  }
});



export default router;
