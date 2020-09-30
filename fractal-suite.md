# Fractal Suite Architecture

## Server Architecture
- Galileo (Theme and Component Viewer)
- FE Portal Server
- Authentication Server
  - Tenants
  - Users
- CMS Server
  - Pages
  - Templates
  - Menus
  - MenuItems
  - Assets
- Commerce Server
  - Products
  - Orders
  - Carts
  - Payments

## Libraries
- Themes
  - Base CSS Module for defining fonts, line-heights, viewport responsive font size and browser resets
  - Defines Grid CSS Module for viewport based responsive design
  - Defines CSS Modules for global set of components
- Components
  - Global Atoms
    - CSS Modules
  - Global Molecules
    - CSS Modules
  - Global Organisms
    - CSS Modules
    - GraphQL Queries and Mutations
    - Hooks
  - Unit Tests
- Apollo Caching Functions

## Atomic Design
See [book](https://shop.bradfrost.com/products/atomic-design-ebook) for basic understanding of principles.

### Atoms
 - Atoms are the smallest elements that form the building blocks of a web site, HTML elements.
 - Atoms expect to be provided with data and accept an optional options object defining any types or modifiers, e.g. primary or secondary button.
 - Atoms define their own padding, but not their margins.
 - Atoms may expect a callback for a particular behaviour/action to occur.

### Molecules
 - Molecules are composed of Atoms around a common theme, e.g. a text field with a button.
 - Molecules expect to be provided with data and accept an optional options object defining any types or modifiers.
 - Molecules define their own padding and the margin between Atoms.
 - Molecules may also expect a callback for a particular behaviour/action to occur.

### Organisms
 - Organisms are composed of Molecules and/or Atoms which group them together, usually around an aspect of a resource, be it showing or updating data.
 - Organisms can define their own queries required to function correctly.
 - Organisms may expect to be provided with context, but can also import mutations if required to modify data.
 - Organisms define their own padding and the margin between Molecules.

## CMS
### Pages

Pages, at the most basic level, are defined by which menu item they belong to and which template to use to display data.  The `template_id` defines which organisms to show and in what order.  The page `content` defines what content should be inserted into the corresponding organism instance.

|Column|Type|
|------|----|
|id|string|
|tenant|string|
|title|string|
|slug|string|
|menu_item_id|string|
|meta|jsonb|
|template_id|string|
|content|jsonb|
|language|string|

#### Content Structure

```json
[ 
  {
    "Header1": "no-op"
  },
  {
    "ArticleHead1": {
      "title": {
        "type": "text",
        "content": "Hokkaido Is An Otherworldly Heaven Of Champagne Powder Snow, With Hidden Secrets"
      },
      "author": {
        "type": "text",
        "content": "Alexander Christian"
      }
    }
  },
  {
    "Markdown1": {
      "type": "textarea",
      "content": "# Title\nParagraph text\nParagraph text\n1. **Heading**\nParagraph text"
    }
  },
  {
    "NextArticle1": "no-op"
  },
  {
    "RecommendedArticles1": "no-op"
  },
  {
    "Footer1": "no-op"
  }
]
```

Markdown organisms take markdown and converts it into a React atom along with it's content. For example, `"# Title\nParagraph text\nParagraph text\n1. Heading\n![Alt text](/path/to/img.jpg)
Paragraph text"` would be converted into:

```json
[
  {
    "h1": "Title"
  },
  {
    "p": "Paragraph text"
  },
  {
    "p": "Paragraph text"
  },
  {
    "p": [
      "1. ",
      {
        "b": "Heading"
      }
    ]
  },
  {
    "img": {
      "alt": "Alt Text",
      "src": "/path/to/img.jpg"
    }
  },
  {
    "P": "Paragraph text",=
  }
]
```

### Templates

Templates are built up by chaining together organisms, each organism represents a row on the page.

|Column|Type|
|------|----|
|id|string|
|title|string|
|tenant|string|
|organisms|jsonb|

#### Organisms Data Structure

Example organisms data structure for the new RSNG design.  This defines which organisms to load for the page and in which order to load them. 

```json
{
  "Header1": "Header",
  "ArticleHead1": "ArticleHead", 
  "Markdown1": "Markdown",
  "NextArticle1": "NextArticle",
  "RecommendedArticles1": "RecommendedArticles",
  "Footer1": "Footer"
}
```

### Organism Structure
```html
import BrandImage from 'molecules/brand-image'
import SearchBar from 'molecues/search-bar'
import MainNavigation from 'molecues/main-navigation'
import { useGetMainNavigation } from 'organisms/use-get-main-navigation'

import HeaderProps from 'types/props'

const Header: React.FC<HeaderProps> = () {
  const { data, loading, error } = useGetMainNavigation()

  return (
    <div className={styles.root} >
      <BrandImage />
      <SearchBar />
      <MainNavigation data={data.mainNavigation}/>
    </div>
  )
}

export default Header
```
##### Problems to Solve
- This approach would work for no-op organisms, but would it work for organisms which have content defined on the page record?


### Page Content
For page content such as headers, paragraphs, quotes and tables.  Do you use a template builder to insert individual page elements and then enter the content afterwards, or do you have individual 'content blocks' that allow for markdown which is then rendered in individual atoms?

For example:

##### Individual page elements
- Paragraph
[Content]
- Paragraph
[Content]
- Quote
[Content]
- Header1
[Content]
- Image
[URL]
[Title]
- Paragraph
[Content]

##### Individial 'Content Blocks'
- Content Block
[Content]
- Image
[URL]
[Title]
- Content Block
[Content]

##### Content Structure
```json
[
  {
    "content_block": "markdown string"
  },
  {
    "image": {
      "url": "string",
      "title": "string"
    }
  },
  {
    "content_block": "markdown string"
  }
]
```
##### Option 3
For content blocks, manage everything through markdown, even images, quotes and tables.  A custom renderer could be implemented for extending the Markdown standard.