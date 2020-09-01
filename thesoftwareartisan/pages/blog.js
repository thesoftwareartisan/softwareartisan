import GlobalFooter from "../components/globalfooter";
import GlobalHead from "../components/globalhead";
import NavigationBar from "../components/navigationbar";
import BlogBar from "../components/blogbar";

export default function Blog() {
    return (
        <div>
            <GlobalHead/>
            <NavigationBar/>
            <main>
                <BlogBar/>
            </main>
            <GlobalFooter/>
        </div>
    )
}