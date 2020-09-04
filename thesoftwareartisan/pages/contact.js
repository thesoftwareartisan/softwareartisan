import GlobalFooter from "../components/globalfooter";
import GlobalHead from "../components/globalhead";
import NavigationBar from "../components/navigationbar";

export default function Contact() {
    return (
        <div>
        <div className="container">
            <GlobalHead/>
            <NavigationBar/>
            <main>
                <div className="grid">
                    <div className="card">
                        <h3>Email</h3>
                        <div>taylormorris@thesoftwareartisan.com</div>
                    </div>
                    <div className="card">
                        <h3>Phone</h3>
                        <div>(269) 479-5256</div>
                    </div>
                </div>
            </main>
            <GlobalFooter/>
        </div>
        </div>
    )
}