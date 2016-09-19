# Pinlet

![Pinlet](https://raw.githubusercontent.com/aloglu/Pinlet/master/Pinlet.png)

Pinlet is a Safari extension for the bookmarking service Pinboard. I've created this out of frustration with 3rd party apps that often fail to connect Pinboards API. Pinboard has a bookmarklet for easy bookmarking, but as its name suggests, that's a bookmark that lives on a bookmark bar. Since I don't want to clutter my Safari UI with another bar that's only going to have one item, I thought making an extension with the same purpose would do the trick, and it did.

# Installation

I don't have a developer account with Apple, so I couldn't build this extension properly¹. That being said, the process is still somewhat straight forward, especially for someone who's savvy enough to look for Pinboard extensions on Github. Here's the step by step guide:

1. Safari > Preferences > Advanced > Select "Show develop menu in menu bar".
2. From Develop in the menu bar, click on "Show Extension Builder".
3. At the bottom of the sidebar of the window, you'll see a "+" icon. Click on it and select "Add Extension...".
4. Locate the folder you've just installed/cloned into your computer and click "Select".
5. You've added the extension to the Extension Builder. Now, to install, select on "Install" on the top right hand side. You'll be prompted to enter your password. Enter it and voila.
6. Existing tabs have to be reloaded for the extension to work.

*¹ This also means you have to re-install the extension every time you relaunch Safari. I rarely close my browser, so this is a non-issue for me but I recognize that it'd be a deal breaker for most people.*

# To-do

Right now, when you click on the extension's icon, a new page opens in the same tab as the website you're trying to save. I'd like to change this to a popover, however I'm usually out of my depth this type of trickery, so I'll need to look at this again in the future when I have more time. It's a small annoyance, to some it may not even be an annoyence at all, but it's something I'd like to do.

# Acknowledgements

GitHub user [ArthurHammer](https://github.com/arthurhammer) has a [similar extension](https://github.com/arthurhammer/pinboard-safariextension) (functionally the same) and I've barrowed a lot of his code to make this extension. So my thanks to him, as well as other random strangers on the internet whose code I've used.
