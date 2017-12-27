#!/bin/bash
MYLANG=0 babel-node generateGift.js >../public/EN/giftFrame.html
MYLANG=1 babel-node generateGift.js >../public/ES/giftFrame.html

