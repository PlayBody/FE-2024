# Hhbuilder

Your application needs a way to capture information about a household applying
for health insurance coverage. Develop a UI for building a household up from
individual people.

## Task

You have been given an HTML page with a form and a placeholder for displaying
a household.

In the given index.js file, replace the "Your code goes here" comment with JavaScript that can:

- Validate data entry (age is required and > 0, relationship is required)
- Add people to a growing household list
- Reset the entry form after each addition
- Remove a previously added person from the list
- Display the household list in the HTML as it is modified
- Serialize the household as JSON upon form submission as a fake trip to the server
- Follow industry accessibility guidelines for form validation

## Notes

Don't modify the given index.html file in any way. You're of course still allowed to modify the DOM through Javascript.

You must write JavaScript, not a language that compiles down to JavaScript. You must only use features from the ES5 standard. No 3rd party libraries — i.e., no jQuery, no React.

The display of the household list should use Bulma as the css framework. It is not necessary to add any additional styling outside the framework itself. 
You can find the Bulma documentation at https://bulma.io/documentation/

On submission, put the serialized JSON in the provided "debug" DOM element and display that element.

After submission, the user should be able to make changes and submit the household again.

You don't need to add validations around anything other than the age and relationship requirements described above. It's ok for someone to add 35 parents.

