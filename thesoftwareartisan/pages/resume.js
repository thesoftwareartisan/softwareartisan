import GlobalFooter from "../components/globalfooter";
import GlobalHead from "../components/globalhead";
import NavigationBar from "../components/navigationbar";
export default function Resume() {
    return (
        <div className="container">
            <GlobalHead/>
            <NavigationBar/>
            <main>
                <div className="photo-description-list" id="resume-grid">
                    
                    <div id="work-experience">
                        <h2>Work Experience</h2>
                        <div className="photo-description-block" id="spoton"></div>
                        <div className="photo-description-block" id="faac"></div>
                        <div className="photo-description-block" id="jackson"></div>
                    </div>
                    
                    <div id="education">
                        <h2>Education</h2>
                        <div className="photo-description-block" id="bscs">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Michigan_Tech_campus%2C_fall_2018..jpg"
                                title="Jcvertin / CC BY-SA (https://creativecommons.org/licenses/by-sa/4.0)"/>
                            
                            <div className="description-block">
                                <h3>Bachelor of Science, Computer Science</h3>
                                <h4>Michigan Technological University, 2016</h4>
                                <p>Completing the degree with a minor in Mathematics, I have a strong mathematical foundation. Additionally,
                                    I studied both German & Spanish while undergoing my degree.
                                </p>
                            </div>
                        </div>
                        <div className="photo-description-block" id="mscs">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Michigan_Tech_campus_2011.jpg"
                                title="Michigan Technological University / CC BY-SA (https://creativecommons.org/licenses/by-sa/3.0)"/>
                            <div className="description-block">
                                <h3>Master of Science, Computer Science</h3>
                                <h4>Michigan Technological University, Expected 2020</h4>
                                <p>My focus for this degree is in machine learning with a particular
                                    focus on classification for my thesis.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <GlobalFooter/>
        </div>
    )
}