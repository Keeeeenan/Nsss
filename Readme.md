## 1.
**See js/request.js**  
I see tabular data when i look at the configurations, so I used vanilla javascript to create a table for the data.

## 2.
**See js/jquerystyle.js**  
Added styling using solely jQuery. Made use of bubbling.
Things added:
* Hover events
* Click for popup
* Keyup Keydown for search
* CSS Styles

## 3.
**See css/styles.css**  
Added media queries and tried my best to make a decent looking table

## 4.
**See index.html** 
Fairly light implementations. For something so simple, i felt there was minimal need for heavy frameworks.  
I noticed the job description mentioned *Handlebars* so i used that to create the table  
I also used *List JS* so that columns could be sortable and to make use of all other goodies you'd want from a table
Trusty jQuery still being used
Created a extremely basic barebones server to serve the JSON. Random values.

## 5.
My first thought to optimize 10,000 objects or rows would be to implement some kind of pagination. 10,000 is an enormous amount of data and it is very unlikely a user could read/view it all at one time. Break the amount into chunks to view. Lazy loading could be an option too. Use a throttled scroll event to load more rows into the table when user is at the bottom. A search would also be welcome but searching through thousands of rows could be troublesome. 
	I think there are better server side solutions to optimizing the code as it will very likely be faster and better and then the client would only need to interpret the optimized response.
