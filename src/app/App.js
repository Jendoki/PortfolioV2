import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../components/pages/home/HomePage';
import SkillsPage from '../components/pages/skills/SkillsPage';
import ProjectsPage from '../components/pages/projects/ProjectsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* redirect unknown paths to homepage */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
