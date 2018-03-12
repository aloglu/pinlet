# Pinlet

![Pinlet](https://raw.githubusercontent.com/aloglu/Pinlet/master/Pinlet.png)

Pinlet is a Safari extension for the bookmarking service Pinboard.

# Installation

I don't have a developer account with Apple, so I wasn't able to build this extension properly¹. That being said, the process is still somewhat straightforward, especially for someone who's savvy enough to look for Pinboard extensions on GitHub. Here's the step by step guide:

1. Clone the repository or download it as .zip
2. Enable the [Develop Menu](https://support.apple.com/guide/safari-developer/develop-menu-dev39df999c1/mac) in Safari
3. From the menu, click on `Show Extension Builder`
4. Click on `+`, then `Add Extension...`
5. Locate the folder of the repository, then click on `Select`
6. Click on "Install" and enter your password
7. Once you've installed the extension, go to the `Extensions` tab in `Preferences` and enter your Pinboard API token, which can be found [here](https://pinboard.in/settings/password)
8. Done.

**Note:** You'll need to reload your open tabs to make the extension work.

*¹ This also means you have to reinstall the extension every time you relaunch Safari. This is a non-issue for me but I recognize that it'd be a deal breaker for most people. Unfortunately, I can't fix this unless I [pay Apple $100 annually](https://www.macrumors.com/2015/06/10/new-safari-extensions-gallery-fee/).*

# Acknowledgements

GitHub users [ArthurHammer](https://github.com/arthurhammer) & [tsbehlman](https://github.com/tsbehlman) have been extremely helpful. My thanks to them, as well as other random strangers on the internet whose code I've used.
