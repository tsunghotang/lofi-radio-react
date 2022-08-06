# Lofi-Player

A React app that utalizes react-player to browse and play different Lofi Radio channels on YouTube
Simple React app that uses Giphy's API to search for and view GIFS.

 This repo contains two branches which builds the same app differently.

**Master** - Uses both functional and class components.

**React-Hook-Giphy** - Uses functional components and React Hooks.

---

_DROP SCREENSHOT HERE_
Screen Shows


<br>
App home: https://tsunghotang.github.io/giphy-react/


---

## Built With
- [React](https://guides.rubyonrails.org/) - Front-end
- [Giphy API](https://yarnpkg.com/package/giphy-api)
- [Webpack](https://heroku.com/)
- [Babel](https://www.postgresql.org/)
- [gh-pages](https://yarnpkg.com/package/gh-pages) - Deployment


---
### Setup
Install JS packages
```
yarn install
```

### Scripts
To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```
---









Challenges
1. Browser do not allow autoplaying videos unless the video is muted. (past link)
  * This caused a number of bugs when using onReady callback provided with React-player.
    * Would cause the play/pause button to automatically toogle on first load of the page.
    * Using `useRef` to stop the callback from happening on the first render solved the issue
    * Before realising I could use `useRef` I passed a bunch of props to to the channelList and to the Channel so that when a user clicked on a channel it would trigger the change. This worked find aprart from one bug.

2. Added background images for each individual channel due to various ui elements that occur when pausing a yt video.
 of the channels due to pausing yt video UI clutter.



1. media controls not setting state proeprly. The overlay doesnt show
Need to use the call backs provided by react-player

2. Controls
  icons
  figureo ut layout

3. toggle btn to show playlist

4. refactor


// Set up FONT - currently not working
// Change status implementation from boolean to a string.


//  TODO

// smaller screen just have a button that switches channges next button
// stlye the controls
// Refactor everything and finish TODAY!
// Component for the controls
// Fix accessibility issues
  // CSS:Focus for controls
  // Make the Channel List tabable - (change html in Channel from div)
