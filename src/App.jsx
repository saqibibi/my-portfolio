import './index.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_lzziwfb';
    const templateID = 'template_b70vi5i';
    const publicKey = 'j_1QFMUhdDDwz5oWO';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert('✅ Message sent successfully! I will get back to you soon.');
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        setIsSending(false);
      })
      .catch((error) => {
        alert('❌ Failed to send message. Please try again or email me directly.');
        console.error('EmailJS Error:', error);
        setIsSending(false);
      });
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: '#0a0a0f' }}>
<div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-6">


        {/* SIDEBAR */}
        <aside className="w-full lg:w-80 rounded-2xl p-8 h-fit lg:sticky lg:top-6"
          style={{ backgroundColor: '#121218', borderColor: '#2a2a35', border: '1px solid' }}>

          {/* Profile Photo */}
          <div className="text-center mb-8">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div
                onClick={() => setShowProfileModal(true)}
                className="w-full h-full rounded-full cursor-pointer transition hover:scale-105"
                style={{ border: '2px solid #2a2a35' }}>
                <img
                  src="https://ui-avatars.com/api/?name=Mohd+Saqib+Khan&size=200&background=ffcc33&color=0a0a0f"
                  alt="Profile"
                  className="w-full h-full rounded-full"
                />
              </div>
              <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full"
                style={{ backgroundColor: '#4ade80', border: '4px solid #121218' }}></span>
            </div>
            <h1 className="text-2xl font-semibold mb-2" style={{ color: '#f5f5f5' }}>Mohd Saqib Khan</h1>
            <p className="text-sm" style={{ color: '#9a9aa8' }}>Web Developer</p>
          </div>


          {/* Contact Info */}
          <div className="space-y-4 mb-6">
            <div className="flex gap-4 p-4 rounded-xl"
              style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>
              <i className="fas fa-envelope text-xl mt-1" style={{ color: '#ffcc33' }}></i>
              <div>
                <p className="text-xs uppercase mb-1" style={{ color: '#9a9aa8' }}>EMAIL</p>
                <a href="mailto:khansaqibkhan210@gmail.com"
                  className="text-sm break-all hover:opacity-80"
                  style={{ color: '#f5f5f5' }}>
                  khansaqibkhan210@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl"
              style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>
              <i className="fas fa-phone text-xl mt-1" style={{ color: '#ffcc33' }}></i>
              <div>
                <p className="text-xs uppercase mb-1" style={{ color: '#9a9aa8' }}>PHONE</p>
                <p className="text-sm" style={{ color: '#f5f5f5' }}>+91 8178249824</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl"
              style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>
              <i className="fas fa-map-marker-alt text-xl mt-1" style={{ color: '#ffcc33' }}></i>
              <div>
                <p className="text-xs uppercase mb-1" style={{ color: '#9a9aa8' }}>LOCATION</p>
                <p className="text-sm" style={{ color: '#f5f5f5' }}>Greater Noida, India</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a href="https://github.com/saqibibi"
              className="w-10 h-10 flex items-center justify-center rounded-lg transition hover:opacity-80"
              style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid', color: '#9a9aa8' }}>
              <i className="fab fa-github text-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/mohd-saqib-khan-b2a022298"
              className="w-10 h-10 flex items-center justify-center rounded-lg transition hover:opacity-80"
              style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid', color: '#9a9aa8' }}>
              <i className="fab fa-linkedin text-lg"></i>
            </a>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 rounded-2xl p-8"
          style={{ backgroundColor: '#121218', borderColor: '#2a2a35', border: '1px solid' }}>
          {/* Top Navigation */}
          <nav className="flex justify-end gap-2 mb-8">
            {['about', 'resume', 'projects', 'blog', 'contact'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-medium text-sm capitalize transition`}
                style={activeTab === tab
                  ? { backgroundColor: '#1a1a22', color: '#ffcc33', border: '1px solid #ffcc33' }
                  : { color: '#9a9aa8', border: '1px solid transparent' }
                }
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Content Area */}
          <main>
            {activeTab === 'about' && (
              <div>
                {/* About Me Title */}
                <h2 className="text-4xl font-semibold mb-4 pb-4 inline-block"
                  style={{ color: '#f5f5f5', borderBottom: '4px solid #ffcc33' }}>
                  About Me
                </h2>

                {/* About Me Paragraph */}
                <p className="leading-relaxed mt-6 mb-10" style={{ color: '#9a9aa8', lineHeight: '1.8' }}>
                  Motivated and detail-oriented Computer Science Engineering student specializing in CSE (R) at Noida Institute of Engineering and Technology with an 8.01 CGPA.
                  I build modern web applications and AI-assisted tools, from resume builders to mental wellness platforms.
                  Eager to learn new technologies, contribute to team-based environments, and build a strong foundation as a software professional.
                  Currently seeking frontend/web development internships and project opportunities to apply my programming, problem-solving, and development skills in real-world projects.
                </p>

                {/* What I'm Doing Section */}
                <h3 className="text-2xl font-semibold mb-6" style={{ color: '#f5f5f5' }}>What I'm Doing</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {/* Mobile Apps / Web Development Card */}
                  <div className="flex gap-4 p-6 rounded-xl transition hover:border-opacity-100"
                    style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>
                    <div className="flex-shrink-0">
                      <i className="fas fa-mobile-alt text-4xl" style={{ color: '#ffcc33' }}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>Web Development</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#9a9aa8' }}>
                        High-quality development of responsive websites and web applications using HTML, CSS, JavaScript, and React.
                      </p>
                    </div>
                  </div>

                  {/* Backend Development Card */}
                  <div className="flex gap-4 p-6 rounded-xl transition hover:border-opacity-100"
                    style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>
                    <div className="flex-shrink-0">
                      <i className="fas fa-server text-4xl" style={{ color: '#ffcc33' }}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>Backend Development</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#9a9aa8' }}>
                        High-performance backend services designed for scalability and seamless user experience with Node.js and databases.
                      </p>
                    </div>
                  </div>

                  {/* UI/UX Design Card */}
                  <div className="flex gap-4 p-6 rounded-xl transition hover:border-opacity-100"
                    style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>
                    <div className="flex-shrink-0">
                      <i className="fas fa-pencil-ruler text-4xl" style={{ color: '#ffcc33' }}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>UI/UX Design</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#9a9aa8' }}>
                        Creating modern and high-quality user interfaces focused on clean layouts, responsive design, and user experience.
                      </p>
                    </div>
                  </div>

                  {/* AI/ML Integration Card */}
                  <div className="flex gap-4 p-6 rounded-xl transition hover:border-opacity-100"
                    style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>
                    <div className="flex-shrink-0">
                      <i className="fas fa-brain text-4xl" style={{ color: '#ffcc33' }}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>AI/ML Integration</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#9a9aa8' }}>
                        Implementing AI-assisted features using LLMs, sentiment analysis, and machine learning with Python.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Section - Horizontal Scroll */}
                <h3 className="text-2xl font-semibold mb-6" style={{ color: '#f5f5f5' }}>Skills</h3>

                <div className="flex flex-wrap justify-center gap-6">

                  {/* React */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: '#1a1a22', border: '1px solid #2a2a35' }}>
                      <i className="fab fa-react text-5xl" style={{ color: '#61dafb' }}></i>
                    </div>
                  </div>

                  {/* JavaScript */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: '#1a1a22', border: '1px solid #2a2a35' }}>
                      <i className="fab fa-js text-5xl" style={{ color: '#f7df1e' }}></i>
                    </div>
                  </div>

                  {/* Node.js */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: '#1a1a22', border: '1px solid #2a2a35' }}>
                      <i className="fab fa-node text-5xl" style={{ color: '#68a063' }}></i>
                    </div>
                  </div>

                  {/* Python */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: '#1a1a22', border: '1px solid #2a2a35' }}>
                      <i className="fab fa-python text-5xl" style={{ color: '#3776ab' }}></i>
                    </div>
                  </div>

                  {/* HTML */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: '#1a1a22', border: '1px solid #2a2a35' }}>
                      <i className="fab fa-html5 text-5xl" style={{ color: '#e34c26' }}></i>
                    </div>
                  </div>

                  {/* CSS */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: '#1a1a22', border: '1px solid #2a2a35' }}>
                      <i className="fab fa-css3-alt text-5xl" style={{ color: '#264de4' }}></i>
                    </div>
                  </div>

                  {/* Git */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: '#1a1a22', border: '1px solid #2a2a35' }}>
                      <i className="fab fa-git-alt text-5xl" style={{ color: '#f34f29' }}></i>
                    </div>
                  </div>

                  {/* Database */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: '#1a1a22', border: '1px solid #2a2a35' }}>
                      <i className="fas fa-database text-5xl" style={{ color: '#ffcc33' }}></i>
                    </div>
                  </div>

                </div>


              </div>
            )}


            {activeTab === 'resume' && (
              <div>
                {/* Resume Title */}
                <h2 className="text-4xl font-semibold mb-8 pb-4 inline-block"
                  style={{ color: '#f5f5f5', borderBottom: '4px solid #ffcc33' }}>
                  Resume
                </h2>

                {/* Education Section */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <i className="fas fa-book text-2xl" style={{ color: '#ffcc33' }}></i>
                    <h3 className="text-2xl font-semibold" style={{ color: '#f5f5f5' }}>Education</h3>
                  </div>

                  <div className="space-y-6 relative pl-8 border-l-2" style={{ borderColor: '#2a2a35' }}>

                    {/* B.Tech */}
                    <div className="relative">
                      <span className="absolute -left-10 w-4 h-4 rounded-full"
                        style={{ backgroundColor: '#ffcc33' }}></span>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                        Bachelor of Technology (Computer Science)
                      </h4>
                      <p className="text-sm mb-2" style={{ color: '#9a9aa8' }}>
                        Noida Institute of Engineering and Technology
                      </p>
                      <p className="text-sm mb-3" style={{ color: '#ffcc33' }}>2023 - Present</p>
                      <p className="text-sm" style={{ color: '#9a9aa8' }}>CGPA: 8.01</p>
                    </div>

                    {/* 12th */}
                    <div className="relative">
                      <span className="absolute -left-10 w-4 h-4 rounded-full"
                        style={{ backgroundColor: '#ffcc33' }}></span>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                        Senior Secondary Education
                      </h4>
                      <p className="text-sm mb-2" style={{ color: '#9a9aa8' }}>
                        Radiant Academy (CBSE), Uttar Pradesh
                      </p>
                      <p className="text-sm mb-3" style={{ color: '#ffcc33' }}>2023</p>
                      <p className="text-sm" style={{ color: '#9a9aa8' }}>Percentage: 85%</p>
                    </div>

                    {/* 10th */}
                    <div className="relative">
                      <span className="absolute -left-10 w-4 h-4 rounded-full"
                        style={{ backgroundColor: '#ffcc33' }}></span>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                        High School Education
                      </h4>
                      <p className="text-sm mb-2" style={{ color: '#9a9aa8' }}>
                        Radiant Academy (CBSE), Uttar Pradesh
                      </p>
                      <p className="text-sm mb-3" style={{ color: '#ffcc33' }}>2021</p>
                      <p className="text-sm" style={{ color: '#9a9aa8' }}>Percentage: 75%</p>
                    </div>

                  </div>
                </div>

                {/* Experience Section */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <i className="fas fa-briefcase text-2xl" style={{ color: '#ffcc33' }}></i>
                    <h3 className="text-2xl font-semibold" style={{ color: '#f5f5f5' }}>Experience</h3>
                  </div>

                  <div className="space-y-6 relative pl-8 border-l-2" style={{ borderColor: '#2a2a35' }}>

                    {/* Prodigy Infotech */}
                    <div className="relative">
                      <span className="absolute -left-10 w-4 h-4 rounded-full"
                        style={{ backgroundColor: '#ffcc33' }}></span>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                        Web Developer Intern
                      </h4>
                      <p className="text-sm mb-2" style={{ color: '#9a9aa8' }}>Prodigy Infotech</p>
                      <p className="text-sm mb-3" style={{ color: '#ffcc33' }}>July 2024 - Aug 2024</p>
                      <ul className="space-y-2 text-sm" style={{ color: '#9a9aa8' }}>
                        <li className="flex gap-2">
                          <span style={{ color: '#ffcc33' }}>•</span>
                          <span>Developed functional web projects including a Stopwatch app, personal portfolio website, and Tic Tac Toe game using HTML, CSS and JavaScript.</span>
                        </li>
                        <li className="flex gap-2">
                          <span style={{ color: '#ffcc33' }}>•</span>
                          <span>Focused on responsive design, interactivity, and clean UI/UX principles.</span>
                        </li>
                        <li className="flex gap-2">
                          <span style={{ color: '#ffcc33' }}>•</span>
                          <span>Collaborated remotely to meet project deadlines while maintaining code quality and documentation standards.</span>
                        </li>
                      </ul>
                    </div>

                    {/* CodSoft */}
                    <div className="relative">
                      <span className="absolute -left-10 w-4 h-4 rounded-full"
                        style={{ backgroundColor: '#ffcc33' }}></span>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                        Python Developer Intern
                      </h4>
                      <p className="text-sm mb-2" style={{ color: '#9a9aa8' }}>CodSoft</p>
                      <p className="text-sm mb-3" style={{ color: '#ffcc33' }}>August 2024 - Sept 2024</p>
                      <ul className="space-y-2 text-sm" style={{ color: '#9a9aa8' }}>
                        <li className="flex gap-2">
                          <span style={{ color: '#ffcc33' }}>•</span>
                          <span>Built Python-based applications including a Calculator, Rock-Paper-Scissors game, and Password Generator.</span>
                        </li>
                        <li className="flex gap-2">
                          <span style={{ color: '#ffcc33' }}>•</span>
                          <span>Applied clean, modular coding practices with proper error handling and user interaction.</span>
                        </li>
                        <li className="flex gap-2">
                          <span style={{ color: '#ffcc33' }}>•</span>
                          <span>Strengthened core Python fundamentals such as loops, functions, conditionals, and logic building while meeting deadlines.</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Download CV Button */}
                <div className="flex justify-end mt-8">
                  <a href="/Mohd_Saqib_Khan_Resume.pdf"
                    download
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition hover:opacity-90"
                    style={{ backgroundColor: '#ffcc33', color: '#0a0a0f' }}>
                    <i className="fas fa-download"></i>
                    <span>Download CV</span>
                  </a>
                </div>

              </div>
            )}


            {activeTab === 'projects' && (
              <div>
                {/* Projects Title */}
                <h2 className="text-4xl font-semibold mb-8 pb-4 inline-block"
                  style={{ color: '#f5f5f5', borderBottom: '4px solid #ffcc33' }}>
                  Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Resume Builder Project */}
                  <div className="rounded-xl p-6 transition hover:border-opacity-100"
                    style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>

                    {/* Project Thumbnail */}
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden"
                      style={{ backgroundColor: '#0a0a0f' }}>
                      <img
                        src="/resume-builder.jpeg"
                        alt="Resume Builder Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                      Resume Builder
                    </h3>

                    {/* Project Description */}
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#9a9aa8' }}>
                      Developed a web-based resume builder that allows users to create structured professional resumes dynamically.
                      Implemented form-based input handling and real-time resume preview for better usability.
                      Built using HTML, CSS, and JavaScript with a focus on clean UI and responsive design.
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-md text-xs font-medium"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>HTML</span>
                      <span className="px-3 py-1 rounded-md text-xs font-medium"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>CSS</span>
                      <span className="px-3 py-1 rounded-md text-xs font-medium"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>JavaScript</span>
                      <span className="px-3 py-1 rounded-md text-xs font-medium"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>PDF Generation</span>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <a href="https://resumebuilder-zeta-ten.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-80"
                        style={{ backgroundColor: '#ffcc33', color: '#0a0a0f' }}>
                        <i className="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                      <a href="https://github.com/saqibibi/resumebuilder.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-80"
                        style={{ backgroundColor: '#0a0a0f', color: '#f5f5f5', border: '1px solid #2a2a35' }}>
                        <i className="fab fa-github"></i>
                        <span>View Code</span>
                      </a>
                    </div>

                  </div>

                  {/* 
      ============================================
      TEMPLATE FOR NEW PROJECT CARD
      ============================================
      Copy this entire block, uncomment it, and edit the details:
      
      <div className="rounded-xl p-6 transition hover:border-opacity-100"
        style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>
        
        <div className="w-full h-48 rounded-lg mb-4 overflow-hidden"
          style={{ backgroundColor: '#0a0a0f' }}>
          <img 
            src="/your-project-image.jpeg" 
            alt="Your Project Name" 
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold mb-2" style={{ color: '#f5f5f5' }}>
          Your Project Name
        </h3>

        <p className="text-sm mb-4 leading-relaxed" style={{ color: '#9a9aa8' }}>
          Write your project description here. Explain what the project does and what technologies you used.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 rounded-md text-xs font-medium"
            style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>Tech 1</span>
          <span className="px-3 py-1 rounded-md text-xs font-medium"
            style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>Tech 2</span>
          <span className="px-3 py-1 rounded-md text-xs font-medium"
            style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>Tech 3</span>
        </div>

        <div className="flex gap-3">
          <a href="YOUR_LIVE_DEMO_LINK" 
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-80"
             style={{ backgroundColor: '#ffcc33', color: '#0a0a0f' }}>
            <i className="fas fa-external-link-alt"></i>
            <span>Live Demo</span>
          </a>
          <a href="YOUR_GITHUB_REPO_LINK" 
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-80"
             style={{ backgroundColor: '#0a0a0f', color: '#f5f5f5', border: '1px solid #2a2a35' }}>
            <i className="fab fa-github"></i>
            <span>View Code</span>
          </a>
        </div>

      </div>
      */}

                </div>
              </div>
            )}



            {activeTab === 'blog' && (
              <div>
                {/* Blog Title */}
                <h2 className="text-4xl font-semibold mb-8 pb-4 inline-block"
                  style={{ color: '#f5f5f5', borderBottom: '4px solid #ffcc33' }}>
                  Blog
                </h2>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {/* Blog Post 1 */}
                  <div className="rounded-xl p-6 transition hover:border-opacity-100 cursor-pointer"
                    style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>

                    <div className="flex items-center gap-2 mb-3">
                      <i className="fas fa-calendar-alt text-sm" style={{ color: '#ffcc33' }}></i>
                      <span className="text-xs" style={{ color: '#9a9aa8' }}>January 2026</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 leading-tight" style={{ color: '#f5f5f5' }}>
                      Building a Resume Builder: My First Real Web Project
                    </h3>

                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#9a9aa8' }}>
                      A deep dive into how I built a dynamic resume builder using vanilla JavaScript,
                      HTML, and CSS. I share the challenges I faced with form handling, PDF generation,
                      and creating a real-time preview feature that updates as users type.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>JavaScript</span>
                      <span className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>Web Development</span>
                      <span className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>UI/UX</span>
                    </div>

                    <div className="text-sm font-medium" style={{ color: '#ffcc33' }}>
                      Read more →
                    </div>
                  </div>

                  {/* Blog Post 2 */}
                  <div className="rounded-xl p-6 transition hover:border-opacity-100 cursor-pointer"
                    style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>

                    <div className="flex items-center gap-2 mb-3">
                      <i className="fas fa-calendar-alt text-sm" style={{ color: '#ffcc33' }}></i>
                      <span className="text-xs" style={{ color: '#9a9aa8' }}>December 2025</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 leading-tight" style={{ color: '#f5f5f5' }}>
                      MindWell: Building an AI Mental Wellness Platform
                    </h3>

                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#9a9aa8' }}>
                      How we developed an anonymous mental wellness platform with multilingual AI chatbot
                      support using LLMs and the Bhashini API. Learn about the technical challenges of
                      implementing sentiment analysis and maintaining user privacy in healthcare tech.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>AI/ML</span>
                      <span className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>Healthcare Tech</span>
                      <span className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>React</span>
                    </div>

                    <div className="text-sm font-medium" style={{ color: '#ffcc33' }}>
                      Read more →
                    </div>
                  </div>

                  {/* Blog Post 3 */}
                  <div className="rounded-xl p-6 transition hover:border-opacity-100 cursor-pointer"
                    style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>

                    <div className="flex items-center gap-2 mb-3">
                      <i className="fas fa-calendar-alt text-sm" style={{ color: '#ffcc33' }}></i>
                      <span className="text-xs" style={{ color: '#9a9aa8' }}>November 2025</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 leading-tight" style={{ color: '#f5f5f5' }}>
                      My Journey from Python Basics to Web Development
                    </h3>

                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#9a9aa8' }}>
                      From building simple calculators and games during my CodSoft internship to creating
                      full-stack web applications with React and Node.js. Here's what I learned about
                      transitioning from Python to JavaScript and modern web frameworks.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>Career</span>
                      <span className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>Python</span>
                      <span className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33' }}>Learning</span>
                    </div>

                    <div className="text-sm font-medium" style={{ color: '#ffcc33' }}>
                      Read more →
                    </div>
                  </div>

                </div>

                {/* Optional: More Coming Soon */}
                <div className="mt-8 text-center">
                  <p className="text-sm" style={{ color: '#9a9aa8' }}>
                    More articles coming soon! Stay tuned for tutorials on React, data structures, and web development tips.
                  </p>
                </div>

              </div>
            )}


            {activeTab === 'contact' && (
              <div>
                {/* Contact Title */}
                <h2 className="text-4xl font-semibold mb-8 pb-4 inline-block"
                  style={{ color: '#f5f5f5', borderBottom: '4px solid #ffcc33' }}>
                  Contact
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                  {/* Left Column - Contact Info */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6" style={{ color: '#f5f5f5' }}>
                      Get in Touch
                    </h3>

                    <p className="text-sm mb-8 leading-relaxed" style={{ color: '#9a9aa8' }}>
                      I'm currently looking for new opportunities and collaborations.
                      Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

                    {/* Contact Details */}
                    <div className="space-y-6">

                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#0a0a0f' }}>
                          <i className="fas fa-envelope text-xl" style={{ color: '#ffcc33' }}></i>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1" style={{ color: '#f5f5f5' }}>Email</h4>
                          <a href="mailto:khansaqibkhan210@gmail.com"
                            className="text-sm hover:underline"
                            style={{ color: '#9a9aa8' }}>
                            khansaqibkhan210@gmail.com
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#0a0a0f' }}>
                          <i className="fas fa-phone text-xl" style={{ color: '#ffcc33' }}></i>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1" style={{ color: '#f5f5f5' }}>Phone</h4>
                          <a href="tel:+918178249824"
                            className="text-sm hover:underline"
                            style={{ color: '#9a9aa8' }}>
                            +91 8178249824
                          </a>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#0a0a0f' }}>
                          <i className="fas fa-map-marker-alt text-xl" style={{ color: '#ffcc33' }}></i>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-1" style={{ color: '#f5f5f5' }}>Location</h4>
                          <p className="text-sm" style={{ color: '#9a9aa8' }}>
                            Greater Noida, Uttar Pradesh, India
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Social Links */}
                    <div className="mt-8">
                      <h4 className="text-sm font-medium mb-4" style={{ color: '#f5f5f5' }}>Connect With Me</h4>
                      <div className="flex gap-4">
                        <a href="https://github.com/saqibibi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-lg flex items-center justify-center transition hover:opacity-80"
                          style={{ backgroundColor: '#0a0a0f' }}>
                          <i className="fab fa-github text-xl" style={{ color: '#ffcc33' }}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mohd-saqib-khan-b2a022298"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-lg flex items-center justify-center transition hover:opacity-80"
                          style={{ backgroundColor: '#0a0a0f' }}>
                          <i className="fab fa-linkedin text-xl" style={{ color: '#ffcc33' }}></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Contact Form */}
                  <div className="rounded-xl p-6"
                    style={{ backgroundColor: '#1a1a22', borderColor: '#2a2a35', border: '1px solid' }}>

                    <h3 className="text-xl font-semibold mb-6" style={{ color: '#f5f5f5' }}>
                      Send Message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">

                      {/* Name Field */}
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#f5f5f5' }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="from_name"
                          value={formData.from_name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          required
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition focus:border-opacity-100"
                          style={{
                            backgroundColor: '#0a0a0f',
                            color: '#f5f5f5',
                            border: '1px solid #2a2a35'
                          }}
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#f5f5f5' }}>
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="from_email"
                          value={formData.from_email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition focus:border-opacity-100"
                          style={{
                            backgroundColor: '#0a0a0f',
                            color: '#f5f5f5',
                            border: '1px solid #2a2a35'
                          }}
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#f5f5f5' }}>
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition focus:border-opacity-100"
                          style={{
                            backgroundColor: '#0a0a0f',
                            color: '#f5f5f5',
                            border: '1px solid #2a2a35'
                          }}
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#f5f5f5' }}>
                          Message
                        </label>
                        <textarea
                          rows="5"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Write your message here..."
                          required
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition focus:border-opacity-100 resize-none"
                          style={{
                            backgroundColor: '#0a0a0f',
                            color: '#f5f5f5',
                            border: '1px solid #2a2a35'
                          }}
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSending}
                        className="w-full px-6 py-3 rounded-lg text-sm font-medium transition hover:opacity-80 flex items-center justify-center gap-2"
                        style={{
                          backgroundColor: isSending ? '#666' : '#ffcc33',
                          color: '#0a0a0f',
                          cursor: isSending ? 'not-allowed' : 'pointer'
                        }}>
                        <i className={isSending ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"}></i>
                        <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                      </button>

                    </form>

                  </div>

                </div>
              </div>
            )}

          </main>
        </div>

      </div>
      {/* Profile Modal */}
{/* Profile Modal */}
{showProfileModal && (
  <div 
    onClick={() => setShowProfileModal(false)}
    className="fixed inset-0 flex items-center justify-center z-50"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
    
    <div 
      onClick={(e) => e.stopPropagation()}
      className="rounded-3xl p-12 max-w-lg w-full mx-4 relative"
      style={{ backgroundColor: '#1a1a22', border: '3px solid #ffcc33' }}>
      
      {/* Close Button */}
      <button 
        onClick={() => setShowProfileModal(false)}
        className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition hover:opacity-80"
        style={{ backgroundColor: '#0a0a0f', color: '#ffcc33', fontSize: '20px' }}>
        <i className="fas fa-times"></i>
      </button>

      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <div className="w-64 h-64 rounded-full overflow-hidden"
          style={{ border: '5px solid #ffcc33' }}>
          <img 
            src="/profile.jpg"
            alt="Mohd Saqib Khan" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center">
        <h3 className="text-4xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
          Mohd Saqib Khan
        </h3>
        <p className="text-lg mb-3" style={{ color: '#ffcc33' }}>
          Web Developer | CSE Student
        </p>
        <p className="text-base" style={{ color: '#9a9aa8' }}>
          NIET, Greater Noida
        </p>
      </div>

    </div>
  </div>
)}


    </div>
  )
}

export default App
