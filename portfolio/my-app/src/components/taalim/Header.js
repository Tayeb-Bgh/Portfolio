import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="back-button">Back to Portfolio</Link>
          <h1 className="header-title">This is a preview version, you can explore but not create/update/delete data</h1>
          <button className="info-button" onClick={() => setOpenModal(true)}>Details About Project</button>
        </div>
      </header>
      {openModal && (
        <div className="modal-overlay" onClick={() => setOpenModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenModal(false)}>×</button>
            <div className="modal-body">
              <h2>Taalim+</h2>
              <div className="project-description-taalim">
                <p>
                  <strong>Taalim+</strong> is a course management application developed with <strong>React</strong> and <strong>Express.js</strong>, using <strong>SQLite</strong> for local storage. It simplifies the daily management of tutoring sessions by providing an all-in-one solution for teachers and training centers.
                </p>
                <h3 className="fonctionnalite-title">Key Features:</h3>
                <ul>
                  <li><strong>Group Management:</strong> Easily organize your groups and their activities.</li>
                  <li><strong>Session Scheduling:</strong> Plan and review session history.</li>
                  <li><strong>Absence Tracking:</strong> Monitor and manage student absences.</li>
                  <li><strong>Payment Management:</strong> Record and view payment history.</li>
                  <li><strong>Revenue Analysis:</strong>
                    <ul>
                      <li>Current and past monthly revenues.</li>
                      <li>Estimated revenues for the next day.</li>
                      <li>Detailed revenue breakdown by group and day.</li>
                    </ul>
                  </li>
                  <li><strong>Detailed History:</strong> Access session and payment histories.</li>
                </ul>
                <p>
                  With <strong>Taalim+</strong>, efficiently manage your educational activities and maximize productivity through an intuitive interface and powerful features.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
