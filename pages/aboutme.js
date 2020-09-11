import GlobalFooter from "../components/globalfooter";
import GlobalHead from "../components/globalhead";
import NavigationBar from "../components/navigationbar";

export default function AboutMe() {
    return (
        <div className="container">
            <GlobalHead/>
            <NavigationBar/>
            
            <GlobalFooter/>
        </div>
    )
}