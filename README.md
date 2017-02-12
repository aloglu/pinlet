# Pinlet

![Pinlet](https://raw.githubusercontent.com/aloglu/Pinlet/master/Pinlet.png)

Pinlet is a Safari extension for the bookmark service called Pinboard. I've created this extension out of frustration with the 3rd party apps that often fail to establish a connection to Pinboard's API.

# Installation

I don't have a developer account with Apple, so I wasn't able to build this extension properly¹. That being said, the process is still somewhat straight forward, especially for someone who's savvy enough to look for Pinboard extensions on GitHub. Here's the step by step guide:

1. Clone the repository.
2. Safari > Preferences > Advanced > Select "Show develop menu in menu bar"
3. From "Develop" in the menu bar, click on "Show Extension Builder"
4. "Extension Builder" window will open. Click on "+", then "Add Extension..."
5. Locate the folder of the repository, then click on "Select"
6. You've added the extension to the Extension Builder. Now to install, click on "Install". You'll be prompted to enter your password
7. You have to reload open tabs in order for the extension to work.

*¹ This also means you have to re-install the extension every time you relaunch Safari. I rarely close my browser, so this is a non-issue for me but I recognize that it'd be a deal breaker for most people.*

# To-do

Right now, when you click on the extension's icon, a new page opens in the same tab as the website you're trying to save. I'd like to change this to a [popover](https://developer.apple.com/library/content/documentation/Tools/Conceptual/SafariExtensionGuide/AddingPopovers/AddingPopovers.html) but I'm usually out of my depth with this type of trickery, so I'll need to look at this again in the future when I have more time.

# Acknowledgements

GitHub user [ArthurHammer](https://github.com/arthurhammer) has a [similar extension](https://github.com/arthurhammer/pinboard-safariextension) (same functionality) and I've barrowed a lot of his code to make this extension. So my thanks to him, as well as other random strangers on the internet whose code I've used.
