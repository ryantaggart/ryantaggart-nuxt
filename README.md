# Ryan Taggart Personal Site

Built on top of [Nuxt 3](https://nuxt.com/) and
[Nuxt Content](https://content.nuxtjs.org/) with content being stored in markdown Look at
the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn
more.

## Setup

Make sure to install the dependencies:

```bash

# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Production builds to ryantaggart.com are done via netlify

## Content

All content is inside of the `content` dir and seperated into sections based on type,
currently just `blog` / `portfolio`.

Uses the `.mdc` syntax from [nuxt content](https://content.nuxtjs.org/guide/writing/mdc/)
as the base syntax to get nice metadata/vue components in the posts.
