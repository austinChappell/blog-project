# Blog Post Project

## Project Details

This was a short assignment from The Iron Yard to study template literals. Upon meeting the minimum requirements of the assignment, I added the ability to render multiple blogposts, which eventually led to the Node-Blog project.

### Things to know

The blogPosts array contains data for all the blog posts that can be rendered. Add more objects of blog posts to the array will cause it to automatically render to the page upon saving and refreshing.

A combination of template literals and .appendChild methods were used for this assignment. The writeBlogPost function is declared, and creates all of the necessary elements and template literals necessary to plug in variables. The fillBlog function loops through the array of blogPosts and invokes the writeBlogPost function for each blogPost in the array. The fillBlog function is then invoked.

This project uses event bubbling to create a single event listener to click on each blog post. The function isElementHeaderDiv checks to is if the target element of a click event has the class 'header-div'. If it doesn't, it works its way up through its ancestors until this condition is met. This is a recursive function.

Once the condition of isElementHeaderDiv becomes true, the 'hide' class is toggled. The click event listener is applied to the entire container, but is able to run correctly through event bubbling.
