---
title: Bookdoku (WIP)
desc: A "Sunday paper" web-game utilizing the OpenLibrary API, currently in development.
image: /assets/img/P2.png
imageAlt: The title Bookdoku with an emoji of books on a green background
linkTitle: View Live Demo
link: https://bookdoku-app-24892.netlify.app/
---

Bookdoku is a work-in-progress "Sunday paper" web game in a similar to Moviegrid and Cinematrix. For each grid cell, the player must select a book that satisfies the clues of its row and column (e.g. a cell with clues "by George R. R. Martin" and "Fantasy" can be satisfied with _A Game of Thrones_, _A Storm of Swords_, etc).

Currently, the player can search for a book using the title and the author's name. This is the only functionality implemented so far.

This project uses the [OpenLibrary API](https://openlibrary.org/developers/api).

### Tech Stack

- **OpenLibrary API**: as the book database
- **Javascript (vanilla)**: for scripting
- **Netlify**: for deployment
- **Github**: for version control & Netlify setup
