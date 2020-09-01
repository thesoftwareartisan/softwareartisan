import GlobalHead from '../components/globalhead'
import GlobalFooter from '../components/globalfooter'
import NavigationBar from '../components/navigationbar'

export default function Home() {
  return (
    <div className="container">
      <GlobalHead/>
      <NavigationBar/>
      <main>
        <div className="photo-description-list">
        
        <div className="photo-description-block" id="aboutme">
          <img src="/2016-career-fair-portrait.jpg"/>
          <div className="description-block">
            <p>Hello, my name is Taylor Morris. I have been programming for
            just over 10 years. In those years I've worked with C#, Java,
            C/C++, Python, Javascript, Golang and many others. I've received
            a B.S. Computer Science from Michigan Technological University and
            expect to receive my M.S. Computer Science this year.</p>

            <p>I've worked professionally with both embedded and
              full stack development. As a student, I have been focusing on
              Artificial Intelligence and Machine Learning, and my Master's thesis
              is an application of several classical classification techniques.</p>
          </div>
        </div>
        </div>
      </main>
      <GlobalFooter/>
    </div>
  )
}
