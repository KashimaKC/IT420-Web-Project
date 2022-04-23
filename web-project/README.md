# Running on the local development server:

First clone the repository, cd into the web-project folder and run npm start
to open the local development server on your machine.

# TODO:

 - Create styling elements to make the page more appealing, what is currently on the page now is NOT permanent.
 - Format the forms so that they interact with the database, also make it so that there is a printable version of what         information is retrieved from the query.
 - Implement a prompt that has the user change language to whichever preference they choose. 
 - Styling, styling and more styling to make everything simple for non-native english speakers to read and comprehend, perhaps review accessability.


# Ideas:

 - I think that the easiest way to implement a separate printable page for the information entered would be to be to remotely query the database and store that information in a JSON file that can be read and placed in a template that can be printed out. Maybe look into this for the future?

# Notes:

 - During development I (Josh) realized that it would have been much better to have all the slider data that is on the About page 
 linked to the same object instead of importing two objects as the parameters but I did it a tad bit too late. Consider going back to this and changing it so that both the image and text data is loaded in on the same object instead of two. For the time being though, all of the slide text is going to be stored in the `TeamSlideText.js` file and all of the image data is going to be stored in the `TeamSlideData.js` file.

> Author: Joshua Maraun 

