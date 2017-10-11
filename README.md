# videosjs-assets

## Purpose

This repo contains the videojs assets build from videojs. 

This repo can be tracked with bower and prevents to rebuild videojs each time your rebuild your application.

## Build

Videojs has been build with the following command:

    bower install video.js --save
    cd bower_components/videojs/
    npm install
    bower dist
    grunt

## Build files

The build files ara available in the [dist folder](dist).