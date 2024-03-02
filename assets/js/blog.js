document.addEventListener("DOMContentLoaded", function() {
    function getBlogPostsFromLocalStorage() {
        return JSON.parse(localStorage.getItem("posts")) || [];
    }

    function displayBlogPosts() {
        const blogList = document.getElementById("blog-list");
        blogList.innerHTML = ""; // Clear previous posts

        const blogPosts = getBlogPostsFromLocalStorage();
        blogPosts.forEach((post, index) => {
            const postContainer = document.createElement("div");
            postContainer.classList.add("blog-entry");

            const closeButton = document.createElement("button");
            closeButton.innerHTML = '<i class="bx bx-x"></i>';
            closeButton.classList.add("close-button");
            closeButton.addEventListener("click", function() {
                removeBlogPost(index);
            });

            const title = document.createElement("h3");
            title.textContent = "Title: " + post.title;

            const content = document.createElement("p");
            content.textContent = "Content: " + post.content;

            const author = document.createElement("p");
            author.textContent = "Author: " + post.username;
            author.classList.add("author");

            postContainer.appendChild(closeButton);
            postContainer.appendChild(title);
            postContainer.appendChild(content);
            postContainer.appendChild(author);

            blogList.appendChild(postContainer);
        });
    }

    function removeBlogPost(index) {
        const blogPosts = getBlogPostsFromLocalStorage();
        blogPosts.splice(index, 1); // Remove the blog post at the specified index
        localStorage.setItem("posts", JSON.stringify(blogPosts));
        displayBlogPosts(); // Refresh the display after removing the post
    }

    displayBlogPosts();
});
