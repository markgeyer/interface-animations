# Interface Animations

## After Effects setup
Download and install a 30-day trial of [After Effects](https://creative.adobe.com/products/download/aftereffects). If you already have After Effects CS6, no need to download CC.

In terminal run the following commands:
```
$ git clone git@github.com:markgeyer/interface-animations.git
$ cd interface-animations/src/afx
$ open .
```

## AngularJS setup
Download and install [node.js](http://nodejs.org) and [git](http://git-scm.com) if you don't already have these.

In terminal run the following commands:
```
$ git clone git@github.com:markgeyer/interface-animations.git
$ cd interface-animations
$ sudo npm install -g bower
```
Enter your computers password. No worries, this is needed b/c you typed `sudo` :)
```
$ bower install
$ npm install
$ gulp
```
Running `gulp` will launch [localhost:3000](http://localhost:3000) that contains the exercises needed.