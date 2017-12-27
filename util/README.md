## Utility to generate iframe contents with last week's collections.
Usage: Run `generateGift.sh`

Then copy resulting `giftFrame.html` from `EN` and `ES` directories to their counterparts in `public`.
### Variables to edit for each run are in `giftText.js`.
Note: The date is calculated as the most recent previous Sunday. Running it on a Sunday results in `today` instead, which is probably not what you want.
