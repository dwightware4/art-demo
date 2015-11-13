# Art Demo App

This is a demo app. It consumes two JSON API's to render images and associated
information.

## Implementation Details
 * Built on Rails in order to use Rails Server for development
 * Uses the React.js library for the front-end (aheres to the FLUX pattern)
 * Uses Twitter Bootstrap for faster styling
 * Used simple REGEX to replace thumbnailUrl image size to convert thumbnails to full size images.

## Design Choices
 * App makes single AJAX request to API 1 at startup and stores response to avoid additional API calls.
 * App makes AJAX requests to API 2 only if it has not already done so, storing the responses for future use.
 * I built out a full FLUX loop for general scalability, although I did not analyze individual algorithms asymptotically since for the purposes of this demo, my inputs are all constant.
