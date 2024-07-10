// Retrieve janky Blog Post fetcher
import blogPost from "./blogposts.js"

// Attach onclick listeners
const blog_000 = document.getElementById("blog-000")
blog_000.onclick = () => createWindow(0)

// Create blog post window
function createWindow(id) {

    // Delete existing window
    const blogWindowCount = document.getElementsByClassName("blog-window")
    if (blogWindowCount.length != 0) document.getElementsByClassName("blog-window")[0].parentNode.removeChild(document.getElementsByClassName("blog-window")[0])

    // Standard contents
    var windowContents = `
    <div class="title-bar">
        <div class="title-bar-text">portalbyte - blogpost</div>

        <div class="title-bar-controls">
            <button aria-label="Close" onclick="closeWindow()" />
        </div>
    </div>
    <div class="window-body">
    `

    // Get blog content
    var blogContents = blogPost(id)
    windowContents += blogContents + "</div>"

    // Create window
    const newWindow = document.createElement("div")
    newWindow.className = "window blog-window"
    newWindow.innerHTML = windowContents

    document.getElementsByClassName("wrapper")[0].appendChild(newWindow)

    // Make old window inactive
    document.getElementsByClassName("title-bar")[0].classList.add("inactive")
}
