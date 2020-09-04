import GlobalFooter from "../components/globalfooter";
import GlobalHead from "../components/globalhead";
import NavigationBar from "../components/navigationbar";
import BlogBar from "../components/blogbar";
import GetBlogList from "../modals/GetBlogList";
import ReactMarkdown from "react-markdown";
export default function Blog() {
    var firstBlog = GetBlogList()[0];
    var frontmatter = firstBlog.document.data;
    var content = firstBlog.document.content;
    return (
        <div className="container">
            <GlobalHead/>
            <NavigationBar/>
                <div className="blog-container">
                    <main>
                        <div className="blog-post">
                            <h1>{frontmatter.title}</h1>
                            Posted: {frontmatter.date}

                            <hr/>
                            <ReactMarkdown source={content} />
                        </div>
                    </main>
                    <BlogBar/>
                </div>
                <GlobalFooter/>
            </div>
    )
}