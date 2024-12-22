import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Sidebar from './element/sidebar/Sidebar.jsx'
import Dashboard from './element/Dashboard/Dashboard.jsx';
import Etudiant from './element/Etudiant/Etudiant.jsx';
import Groupe from './element/Groupe/Groupe.jsx';
import Seance from './element/Seance/Seance.jsx';
import Paiement from './element/Paiement/Paiement.jsx';
import Header from './Header.js';

function AppTaalim() {
  return (
    <div className="AppTaalim">
      <Header />
      <div className='sidebarLeft'>
        <Sidebar/>
      </div>
      <div className='main'>
        
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/etudiant" element={<Etudiant/>} />
          <Route path="/groupe" element={<Groupe/>} />
          <Route path="/seance" element={<Seance/>} />
          <Route path="/paiement" element={<Paiement/>} />
          <Route path="*" element={<h1>PAGE DON'T EXIST</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default AppTaalim;