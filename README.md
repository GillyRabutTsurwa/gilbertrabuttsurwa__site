# Portfolio Website
- A clearer definitino to come 
  
### Layout
#### Components (Main)
##### Loader & MainContent
- The *Loader* is the first component that is rendered. It shows a random icon for a couple of seconds before the website page is rendered.
- The *MainContent* component is the component containing all the content for my website: Header to Footer.
- It is important to note that these two components are not two different pages, but make both make up my main page ```pages/index.vue```

##### Header
##### Premier
##### Deuxieme
##### Troisieme
##### Quatrieme
##### Cinquieme
##### Footer

#### Components (Sub)
##### Logo
##### Navigation
##### Showcase
##### Thumbnail

#### Pages
  - Main Page
  - Projects Page (the page to show when you click the all projects button)

### Features
- I am using [devicons](https://devicon.dev/). My favourite icon collection, consisting of those having to do with programming, web-development and software technologies. 
- I am using [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to make my website sections appear after scrolling down a certain threshold
- I am using @nuxt/style-resources - in conjunction with node-sass (which I will eventually change to sass) and sass-loader to make some sass style declarations accessible to all of my components.
  - Two good links on how I did this can be find [here](https://medium.com/@wearethreebears/globally-accessible-css-and-scss-sass-in-your-nuxt-component-files-7c1c012d31bd) and [here](https://hackernoon.com/how-i-use-scss-variables-mixins-functions-globally-in-nuxt-js-projects-while-compiling-css-utilit-58bb6ff30438). The latter is my preferred article choice. 
  - Also, a good video on how to set it up can be found [here](https://www.youtube.com/watch?v=c2ciRAGJMDM&ab_channel=WatchandLearn).
  - Note-2-Self: Potentially make a template of this global sass feature, with both Vue & Nuxt


### Libraries
- I am using [Chart JS](https://www.chartjs.org/) to display my web dev skills using a nice-looking radar chart.

### Issues
- The site is still not yet fully responsive.
- The slider re-positions itself automatically in a very buggy manner upon clicking on a slide section.
- I want the Loader component to stay active until all the images in the site are loaded. I looked into this already but I will need a full day or two just to focus on this.

### WorkFlow
- As of 17 January 2021, I have incorporated git-flow into my project. This is a **significant** change to my workflow. There are no other changes to report as of now.