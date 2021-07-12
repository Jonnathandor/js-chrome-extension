# js-chrome-extension

## GOAL

Create a Google Chrome extension that gives a user the ability to save links for later reading or watching

## User Stories

- As a user I want to see my name, greeting and an image representing the time of the day in the header of the extension.
- As a user I want to be able to edit the text that represents my name.
- As a user I want to be able to create categories for my links.
- As a user I want to be able to create subcategories.
- As a user I want to be able to associate my links to categories or subcategories.
- As a user I want to see the links that I save in a list.
- As a user I want to have a "Quick Save" button so I can save my link without assigning a category.
- As a user I want to have a "Save" button that allows me to assign the link to a specific category.
- As a user I want to be able to remove the link from my list.

## User Flow Diagram

- https://app.diagrams.net/#G1ECVp-Oz7VIOM9v1Z_LSPe3Neh96rzrTp

## Business Requirements

- Allow a user to bookmark the current open link for later reading or watching.
- Allow to delete items from their saved list.
- Allow a user to mark the item as completed
- Greet the user:
  - Good Morning, Good Afternoon, Evening, Night
- Show the user name:
  - Good Morning {user name}
- Allow the user to edit their name

## Technical Requirements

- Use Javascript.
- Use HTML.
- Use CSS and Bootstrap.
- Use Chrome storage: https://developer.chrome.com/docs/extensions/reference/storage/
- Follows Chrome extension's guidelines: https://developer.chrome.com/docs/extensions/mv3/getstarted/
