var Contents,
    contents,
    newHeading;

Contents = require('contents');

// If you are using ./dist/ version, then Contents is available under "gajus" global property, i.e.
// Contents = gajus.Contents;

// This example generates a table of contents for all of the headings in the document.
// Table of contents is an ordered list element.
contents = Contents();

// Append the generated list element (table of contents) to the container.
document.querySelector('#toc').appendChild(contents.list());

// Attach event listeners:
contents.eventEmitter().on('change', function () {
    console.log('User has navigated to a new section of the page.');
});

// The rest of the code illustrates firing "resize" event after you have
// added new content after generating the table of contents.
newHeading = document.createElement('h2');
hewHeading.innerHTML = 'Dynamically generated title';

document.body.appendChild(newHeading);

// Firing the "resize" event will regenerate the table of contents.
contents.eventEmitter().trigger('resize');
