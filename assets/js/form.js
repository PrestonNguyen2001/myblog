document.addEventListener("DOMContentLoaded", function() {
    const blogForm = document.getElementById("blog-form");
    if (blogForm) {
        blogForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form input values
            const username = document.getElementById("username").value;
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;

            // Validate form input values
            if (username.trim() === "" || title.trim() === "" || content.trim() === "") {
                alert("Please fill in all fields");
                return; // Exit the function if any field is invalid
            }

            // Create a blog post object
            const post = {
                username: username,
                title: title,
                content: content
            };

            // Check if localStorage already has posts data
            let posts = JSON.parse(localStorage.getItem("posts")) || [];

            // Add the new post to the posts array
            posts.push(post);

            // Store the updated posts array in localStorage
            localStorage.setItem("posts", JSON.stringify(posts));

            // Redirect to the blog page
            window.location.href = "blog.html";
        });
    } else {
        console.log("Form not found");
    }
});
