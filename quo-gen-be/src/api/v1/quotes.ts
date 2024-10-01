import { Router } from "express";
import { QUOTES_LIST, Quote } from "../../data/quotes";
import {
  getMultipleRandomQuotes,
  getRandomQuote,
} from "../../utils/quotes-helper";

const router = Router();
//

router.get("/random", async (req, res) => {
  try {
    if (Object.keys(req.query).length === 0) {
      const randomQuote = getRandomQuote<Quote>(QUOTES_LIST);
      return res.json({
        quote: randomQuote,
      });
    }
    const results = req.query.results
    if (typeof results === "undefined") return res.status(500).json({error: "Wrong query parameter"})

    if (typeof results !== "string") return res.status(500).json({error:"Query parameter must be a string"})

    if (isNaN(Number(results))) return res.status(500).json({error: "String must be a number"})

    const inputResult = parseInt(results)
    const quotes = getMultipleRandomQuotes<Quote>(QUOTES_LIST, inputResult);
    res.status(200).json({quotes})

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: `Failed to fetch all quotes: ${error.message}` });
    }
          res.status(500).json({ error: `Failed to fetch all quotes`})
  }
});



export default router;
