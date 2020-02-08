# RMS North America

Corporate website built with Gatsby + Contentful + Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/37eaf333-4873-4ed3-ba55-a06c6590d43d/deploy-status)](https://app.netlify.com/sites/sleepy-pasteur-0771b3/deploys)

## Stack

[Gatsby](https://www.gatsbyjs.org/)<br>
[Contentful](https://www.contentful.com/)<br>
[Netlify](https://www.netlify.com/)

## Features

[Pagination](https://www.gatsbyjs.org/docs/adding-pagination/)<br>
[Image](https://www.gatsbyjs.org/packages/gatsby-image)<br>
[Remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark)<br>
[Helmet](https://github.com/nfl/react-helmet)<br>
[Offcanvas](https://github.com/neosiae/react-aria-offcanvas)<br>
[Scroll](https://www.npmjs.com/package/react-scroll)

## Extras

[Mailchimp](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp)<br>
[Carousel](https://react-bootstrap.github.io/components/carousel)<br>
[Modal](https://react-bootstrap.github.io/components/modal/)

## Setup

Below are the steps required to use this starter for a new project:

1. In GitHub, create a new repository by importing a clone of this repository.
2. In Contentful, create a new space for the project.
3. In Contentful, go to Settings -> API keys and copy the "Space ID" and the "Content Delivery API - access token" and paste it into a .env file within the local copy of the new project's repository (it might be necessary to move the .env file in and out of the project folder, running the build command multiple times, and populating the base content models and content entries for the data from the new space to be sourced correctly by Gatsby).
4. In Netlify, click on the "New site from Git" button and select the newly created repository.
5. In Netlify, add the same "Space ID" and "Content Delivery API - access token" as environment variables under Settings -> Build & deploy -> Environment.
6. In Netlify, go to Settings -> Build & deploy -> Build hooks, click the "Add build hook" button, name it "Contentful", and copy just the generated URL.
7. In Contentful, go to Settings -> Webhooks, click the link to add the Netlify webhook template, and paste the URL that Netlify provided into the form.
8. In Netlify, go to Settings -> Build & deploy -> Post processing and enable all settings within Asset optimization.

## Requirements

1. Add client provided "icon.png" that must be square and 512x512.
2. Update "gatsby-config.js" to client's information.

## Resources

[JAMstack Basics: How to Create a Gatsby Starter with Contentful and Deploy to Netlify](https://itnext.io/jamstack-basics-how-to-create-a-gatsby-starter-with-contentful-and-deploy-to-netlify-846354cc74bc)<br>
[Setting Up a Continuous Deployment Pipeline with Gatsby.js, Contentful and Netlify](https://www.halfelectronic.com/post/setting-up-gatsby-js-contentful-and-netlify)<br>
[Rebuild your static site automatically with Contentful webhooks](https://www.contentful.com/developers/docs/tutorials/general/automate-site-builds-with-webhooks/#netlify)
