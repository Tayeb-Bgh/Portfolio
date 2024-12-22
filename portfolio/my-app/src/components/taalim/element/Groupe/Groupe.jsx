// Groupe.jsx
import React, { useState } from 'react';
import styles from './Groupe.module.css';
import StatCard from '../Utils/StatCard';
import { User, Users } from 'lucide-react';
import ErrorModal from '../Utils/ErrorModal'; // Assurez-vous que le chemin est correct

const Groupe = () => {
  // Données statiques pour les groupes et les élèves
  const initialGroupes = [
    // Groupes individuels
    {
      idGroupe: 1,
      nomGroupe: 'Individuel 1',
      typeGroupe: 1,
      tarifGroupe: 2000,
      elevesGroupe: [{ idEleve: 1, nomComplet: 'Alice Dupont' }],
    },
    {
      idGroupe: 2,
      nomGroupe: 'Individuel 2',
      typeGroupe: 1,
      tarifGroupe: 2000,
      elevesGroupe: [{ idEleve: 2, nomComplet: 'Bob Martin' }],
    },
    {
      idGroupe: 3,
      nomGroupe: 'Individuel 3',
      typeGroupe: 1,
      tarifGroupe: 2000,
      elevesGroupe: [{ idEleve: 3, nomComplet: 'Charlie Durand' }],
    },
    // Groupes collectifs
    {
      idGroupe: 4,
      nomGroupe: 'Collectif 1',
      typeGroupe: 0,
      tarifGroupe: 500,
      elevesGroupe: [
        { idEleve: 4, nomComplet: 'David Leroy' },
        { idEleve: 5, nomComplet: 'Emma Bernard' },
        { idEleve: 6, nomComplet: 'Fiona Petit' },
        { idEleve: 7, nomComplet: 'George Blanc' },
        { idEleve: 8, nomComplet: 'Hannah Richard' },
      ],
    },
    {
      idGroupe: 5,
      nomGroupe: 'Collectif 2',
      typeGroupe: 0,
      tarifGroupe: 500,
      elevesGroupe: [
        { idEleve: 9, nomComplet: 'Isabelle Moreau' },
        { idEleve: 10, nomComplet: 'Julien Garnier' },
        { idEleve: 11, nomComplet: 'Karen Roger' },
        { idEleve: 12, nomComplet: 'Louis Vincent' },
        { idEleve: 13, nomComplet: 'Marie Lambert' },
      ],
    },
    {
      idGroupe: 6,
      nomGroupe: 'Collectif 3',
      typeGroupe: 0,
      tarifGroupe: 500,
      elevesGroupe: [
        { idEleve: 14, nomComplet: 'Nathan Bonnet' },
        { idEleve: 15, nomComplet: 'Olivia François' },
        { idEleve: 16, nomComplet: 'Paul Fournier' },
        { idEleve: 17, nomComplet: 'Quentin Girard' },
        { idEleve: 18, nomComplet: 'Rose Clement' },
        { idEleve: 19, nomComplet: 'Simon Pereira' },
      ],
    },
    {
      idGroupe: 7,
      nomGroupe: 'Collectif 4',
      typeGroupe: 0,
      tarifGroupe: 500,
      elevesGroupe: [
        { idEleve: 20, nomComplet: 'Thomas Dubois' },
        { idEleve: 21, nomComplet: 'Ursula Lopez' },
        { idEleve: 22, nomComplet: 'Victor Moulin' },
        { idEleve: 23, nomComplet: 'Wendy Rousseau' },
        { idEleve: 24, nomComplet: 'Xavier Fontaine' },
        { idEleve: 25, nomComplet: 'Yasmine Leroy' },
        { idEleve: 26, nomComplet: 'Zacharie Colin' },
      ],
    },
    {
      idGroupe: 8,
      nomGroupe: 'Collectif 5',
      typeGroupe: 0,
      tarifGroupe: 500,
      elevesGroupe: [
        { idEleve: 27, nomComplet: 'Antoine Vidal' },
        { idEleve: 28, nomComplet: 'Brigitte Martel' },
        { idEleve: 29, nomComplet: 'Cédric Teixeira' },
        { idEleve: 30, nomComplet: 'Delphine Leroy' },
        { idEleve: 31, nomComplet: 'Élodie Giraud' },
      ],
    },
    {
      idGroupe: 9,
      nomGroupe: 'Collectif 6',
      typeGroupe: 0,
      tarifGroupe: 500,
      elevesGroupe: [
        { idEleve: 32, nomComplet: 'François Boucher' },
        { idEleve: 33, nomComplet: 'Gabrielle Lemoine' },
        { idEleve: 34, nomComplet: 'Henri André' },
        { idEleve: 35, nomComplet: 'Inès Perrin' },
        { idEleve: 36, nomComplet: 'Jacques Leclerc' },
        { idEleve: 37, nomComplet: 'Karim Rolland' },
        { idEleve: 38, nomComplet: 'Laura Lefevre' },
        { idEleve: 39, nomComplet: 'Martin Leger' },
      ],
    },
  ];

  const [groupes, setGroupes] = useState(initialGroupes);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModalAddGroupe, setShowModalAddGroupe] = useState(false);
  const [currentGroupe, setCurrentGroupe] = useState(null);
  const [showModalModifyGroupe, setShowModalModifyGroupe] = useState(false);
  const [studentsWithoutGroup, setStudentsWithoutGroup] = useState([
    { idEleve: 40, nomComplet: 'Nouveau Étudiant 1' },
    { idEleve: 41, nomComplet: 'Nouveau Étudiant 2' },
    { idEleve: 42, nomComplet: 'Nouveau Étudiant 3' },
    { idEleve: 43, nomComplet: 'Nouveau Étudiant 4' },
    { idEleve: 44, nomComplet: 'Nouveau Étudiant 5' },
    { idEleve: 45, nomComplet: 'Nouveau Étudiant 6' },
    { idEleve: 46, nomComplet: 'Nouveau Étudiant 7' },
    { idEleve: 47, nomComplet: 'Nouveau Étudiant 8' },
    { idEleve: 48, nomComplet: 'Nouveau Étudiant 9' },
    { idEleve: 49, nomComplet: 'Nouveau Étudiant 10' },
  ]);
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [currentType, setCurrentType] = useState(1);
  const [showAddSection, setShowAddSection] = useState(false);

  // États pour le modal d'erreur
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Gestion des filtres
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredGroupes = groupes.filter((groupe) => {
    if (filter === 'collectif') return groupe.typeGroupe === 0;
    if (filter === 'individuel') return groupe.typeGroupe === 1;
    return true;
  });

  // Ouverture et fermeture des modals
  const openModalAddGroupe = () => {
    setShowModalAddGroupe(true);
  };

  const closeModalAddGroupe = () => {
    setShowModalAddGroupe(false);
    setSelectedStudent([]);
  };

  const openModalModifyGroupe = (groupe) => {
    setCurrentGroupe(groupe);
    setShowModalModifyGroupe(true);
  };

  const closeModalModifyGroupe = () => {
    setCurrentGroupe(null);
    setShowModalModifyGroupe(false);
    setSelectedStudent([]);
    setShowAddSection(false);
  };

  // Gestion des types de groupe
  const setGroupeType = (e) => {
    setCurrentType(parseInt(e.target.value));
    setSelectedStudent([]);
  };

  // Gestion de la sélection des étudiants
  const handleStudentSelect = (e) => {
    const idStd = e.target.value;

    if (currentType === 1) {
      if (e.target.checked) {
        setSelectedStudent([idStd]); // Une seule personne pour les groupes individuels
      } else {
        setSelectedStudent([]);
      }
    } else if (currentType === 0) {
      if (e.target.checked) {
        setSelectedStudent([...selectedStudent, idStd]);
      } else {
        setSelectedStudent(selectedStudent.filter((id) => id !== idStd));
      }
    }
  };

  // Création d'un nouveau groupe (affiche le modal d'erreur)
  const createGroupe = (e) => {
    e.preventDefault();
    setErrorMessage('Functionality not available in this preview version');
    setShowErrorModal(true);
    closeModalAddGroupe();
  };

  // Suppression d'un groupe (affiche le modal d'erreur)
  const supprimerGroupe = (idGroupe) => {
    setErrorMessage('Functionality not available in this preview version');
    setShowErrorModal(true);
    closeModalModifyGroupe();
  };

  // Retirer un élève d'un groupe (affiche le modal d'erreur)
  const retirerEleve = (idEleve) => {
    setErrorMessage('Functionality not available in this preview version');
    setShowErrorModal(true);
  };

  // Ajouter des élèves à un groupe (affiche le modal d'erreur)
  const ajouterEleves = () => {
    setErrorMessage('Functionality not available in this preview version');
    setShowErrorModal(true);
  };

  // Gestion des changements dans les cases à cocher lors de l'ajout d'élèves
  const handleSelectionChange = (e, idEleve) => {
    if (e.target.checked) {
      setSelectedStudent([...selectedStudent, idEleve.toString()]);
    } else {
      setSelectedStudent(selectedStudent.filter((id) => id !== idEleve.toString()));
    }
  };

  return (
    <div className={styles['groupe-container']}>
      <div className={styles.entete}>
        <h1>Liste des Groupes</h1>
        <button
          className={styles['add-group-btn']}
          onClick={() => {
            openModalAddGroupe();
          }}
        >
          Ajouter un groupe
        </button>
      </div>

      {showModalAddGroupe && (
        <div className={styles['modal-overlay']}>
          <div className={styles['modal-content']}>
            <h2>Ajouter un groupe</h2>
            <form onSubmit={(e) => createGroupe(e)}>
              <div className={styles['form-group']}>
                <label htmlFor="nomGroupe">Nom du groupe</label>
                <input type="text" id="nomGroupe" name="nomGroupe" required />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="tarifGroupe">Tarif du groupe</label>
                <input type="number" id="tarifGroupe" name="tarifGroupe" required />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="typeGroupe">Type de groupe</label>
                <select
                  id="typeGroupe"
                  name="typeGroupe"
                  onChange={(e) => setGroupeType(e)}
                  required
                >
                  <option value={1}>Individuel</option>
                  <option value={0}>Collectif</option>
                </select>
              </div>

              <div className={styles['form-group']}>
                <label>Ajouter des étudiants sans groupe</label>
                <div className={styles['students-list']}>
                  {studentsWithoutGroup.map((student) => (
                    <div key={student.idEleve}>
                      <input
                        type="checkbox"
                        id={`student-${student.idEleve}`}
                        value={student.idEleve}
                        onChange={handleStudentSelect}
                        checked={selectedStudent.includes(student.idEleve.toString())}
                      />
                      <label htmlFor={`student-${student.idEleve}`}>
                        {student.nomComplet}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles['modal-actions']}>
                <button type="submit" className={styles['submit-button']}>
                  Créer le groupe
                </button>
                <button
                  type="button"
                  className={styles['cancel-button']}
                  onClick={() => {
                    closeModalAddGroupe();
                    setSelectedStudent([]);
                  }}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <br />
      <div className={styles.stats}>
        <StatCard
          title="Total de groupes"
          value={groupes.length}
          icon={Users}
          description="Total des groupes collectifs et individuels"
        />
        <StatCard
          title="Groupes Collectifs"
          value={groupes.filter((g) => g.typeGroupe === 0).length}
          icon={Users}
          description="Groupes constitués de plusieurs personnes"
        />
        <StatCard
          title="Groupes Individuels"
          value={groupes.filter((g) => g.typeGroupe === 1).length}
          icon={User}
          description="Groupes constitués d'une seule personne"
        />
      </div>

      <div className={styles['filter-tabs']}>
        <button
          className={`${styles['filter-tab']} ${
            filter === 'all' ? styles.active : ''
          }`}
          onClick={() => handleFilterChange('all')}
        >
          Tout
        </button>
        <button
          className={`${styles['filter-tab']} ${
            filter === 'collectif' ? styles.active : ''
          }`}
          onClick={() => handleFilterChange('collectif')}
        >
          Collectifs
        </button>
        <button
          className={`${styles['filter-tab']} ${
            filter === 'individuel' ? styles.active : ''
          }`}
          onClick={() => handleFilterChange('individuel')}
        >
          Individuels
        </button>
      </div>

      <div className={styles['groupes-component']}>
        <div className={styles['groupes-list']}>
          {filteredGroupes.map((groupe) => (
            <div
              key={groupe.idGroupe}
              className={styles['groupe-card']}
              onClick={() => openModalModifyGroupe(groupe)}
            >
              <h2 className={styles['title-groupe']}>{groupe.nomGroupe}</h2>
              <div className={styles['groupe-info']}>
                <p>
                  <strong>Type:</strong>{' '}
                  {groupe.typeGroupe === 0 ? 'Collectif' : 'Individuel'}
                </p>
                <p>
                  <strong>Tarif:</strong> {groupe.tarifGroupe} DA
                </p>
              </div>
              <div className={styles['groupe-eleves']}>
                <p>
                  <strong>Liste des élèves:</strong>
                </p>
                <p className={styles['eleves-count']}>
                  {groupe.elevesGroupe.length} élève(s)
                </p>
              </div>
              <ul>
                {groupe.elevesGroupe.slice(0, 2).map((eleve, index) => (
                  <li key={index}>{eleve.nomComplet}</li>
                ))}
                {groupe.elevesGroupe.length > 2 && (
                  <li className={styles['more-dots']}>
                    + {groupe.elevesGroupe.length - 2} autres
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {showModalModifyGroupe && currentGroupe && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span
              className={styles.close}
              onClick={() => {
                closeModalModifyGroupe();
                setSelectedStudent([]);
                setShowAddSection(false);
              }}
            >
              &times;
            </span>

            {!showAddSection ? (
              <>
                <h2 className={styles.modalTitle}>{currentGroupe.nomGroupe}</h2>

                <div className={styles.groupInfo}>
                  <div>
                    <span>Type</span>
                    <span className={styles.infoValue}>
                      {currentGroupe.typeGroupe === 0
                        ? 'Collectif'
                        : 'Individuel'}
                    </span>
                  </div>
                  <div>
                    <span>Tarif</span>
                    <span className={styles.infoValue}>
                      {currentGroupe.tarifGroupe} DA
                    </span>
                  </div>
                </div>

                <div className={styles['headerListEleve']}>
                  <h3>Liste des élèves:</h3>
                  <p className={styles['eleves-count']}>
                    {currentGroupe.elevesGroupe.length} élève(s)
                  </p>
                </div>

                <ul className={styles.studentList}>
                  {currentGroupe.elevesGroupe.map((eleve) => (
                    <li key={eleve.idEleve} className={styles.studentItem}>
                      <span>{eleve.nomComplet}</span>
                      <button
                        className={styles.removeButton}
                        onClick={() => retirerEleve(eleve.idEleve)}
                      >
                        Retirer
                      </button>
                    </li>
                  ))}
                </ul>

                {currentGroupe.elevesGroupe.length === 0 && (
                  <button
                    className={styles['delete-button']}
                    onClick={() => supprimerGroupe(currentGroupe.idGroupe)}
                  >
                    Supprimer le groupe
                  </button>
                )}

                <button
                  onClick={() => setShowAddSection(true)}
                  className={styles['btn-primary']}
                >
                  Ajouter des élèves au groupe
                </button>
              </>
            ) : (
              <div className={styles['add-users-parts']}>
                <h2 className={styles.modalTitle}>Ajouter des élèves</h2>
                <div className={styles.searchContainer}>
                  <input
                    type="text"
                    placeholder="Rechercher des élèves..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <ul className={styles.studentList}>
                  {studentsWithoutGroup.length > 0 ? (
                    studentsWithoutGroup
                      .filter((eleve) =>
                        eleve.nomComplet
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((eleve) => (
                        <li
                          htmlFor={'checkboxAddUser'}
                          key={eleve.idEleve}
                          className={styles.studentItem}
                        >
                          <label htmlFor={`checkbox-${eleve.idEleve}`}>
                            <input
                              id={`checkbox-${eleve.idEleve}`}
                              type="checkbox"
                              value={eleve.idEleve}
                              onChange={(e) =>
                                handleSelectionChange(e, eleve.idEleve)
                              }
                              checked={selectedStudent.includes(
                                eleve.idEleve.toString()
                              )}
                            />
                            {eleve.nomComplet}
                          </label>
                        </li>
                      ))
                  ) : (
                    <p>Aucun élève sans groupe disponible.</p>
                  )}
                </ul>
                <div className={styles['modal-actions']}>
                  <button
                    className={`${styles['submit-button']} ${
                      selectedStudent.length === 0 ? styles.disabled : ''
                    }`}
                    onClick={ajouterEleves}
                    disabled={selectedStudent.length === 0}
                  >
                    Ajouter ({selectedStudent.length})
                  </button>
                  <button
                    className={styles['cancel-button']}
                    onClick={() => {
                      setShowAddSection(false);
                      setSelectedStudent([]);
                    }}
                  >
                    Annuler
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Affichage du modal d'erreur */}
      {showErrorModal && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setShowErrorModal(false)}
        />
      )}
    </div>
  );
};

export default Groupe;
