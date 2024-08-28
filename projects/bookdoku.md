---
layout: layouts/blog.njk
---

## <span>B</span>ookdoku

<a class="btn" href="https://bookdoku-app-24892.netlify.app/" target="_blank" rel="noopener noreferrer">View Live Demo</a>

Bookdoku is a "Sunday paper" web game in a similar to Moviegrid and Cinematrix, and is currently still in development! For each grid cell, the player must select a book that satisfies the clues of its row and column (e.g. a cell with clues "by George R. R. Martin" and "Fantasy" can be satisfied with _A Game of Thrones_, _A Storm of Swords_, etc).

This project's purpose is to teach myself how to work with APIs. Currently, the player can search for a book using the title or author and 10 results are returned.

I am using the OpenLibrary API for this project because it's free, but it comes with its caveats. I'm currently figuring out how to go about streamlining the database; many books do not have book covers, and multiple search entires will appear for the same book (supposedly for books that are re-published or maybe published in bundles), and this makes the game feel messy. That said, functionality is not yet complete!

### Tech Stack

- **OpenLibrary API**: as the book database
- **Javascript (vanilla)**: for scripting
- **Netlify**: for deployment
- **Github**: for version control & Netlify setup
