// Etudiant.jsx
import React, { useState } from "react";
import styles from "./Etudiant.module.css";
import { Users, UsersRound, User, Star, Trash2, Edit } from 'lucide-react';
import StatCard from '../Utils/StatCard';
import ErrorModal from '../Utils/ErrorModal'; // Assurez-vous que le chemin est correct

const Etudiant = () => {
  const initialUsersData = [
    // Étudiants en groupes individuels
    {
      idEleve: 1,
      nomEleve: 'Dupont',
      prenomEleve: 'Alice',
      anneeEleve: 1,
      numeroTel: '0600000001',
      idGroupe: 1,
      nomGroupe: 'Individuel 1',
      tarifSpecial: null,
    },
    {
      idEleve: 2,
      nomEleve: 'Martin',
      prenomEleve: 'Bob',
      anneeEleve: 2,
      numeroTel: '0600000002',
      idGroupe: 2,
      nomGroupe: 'Individuel 2',
      tarifSpecial: null,
    },
    {
      idEleve: 3,
      nomEleve: 'Durand',
      prenomEleve: 'Charlie',
      anneeEleve: 1,
      numeroTel: '0600000003',
      idGroupe: 3,
      nomGroupe: 'Individuel 3',
      tarifSpecial: 1500, // Tarif spécial
    },
    // Étudiants en groupes collectifs
    // Collectif 1
    {
      idEleve: 4,
      nomEleve: 'Leroy',
      prenomEleve: 'David',
      anneeEleve: 2,
      numeroTel: '0600000004',
      idGroupe: 4,
      nomGroupe: 'Collectif 1',
      tarifSpecial: null,
    },
    {
      idEleve: 5,
      nomEleve: 'Bernard',
      prenomEleve: 'Emma',
      anneeEleve: 3,
      numeroTel: '0600000005',
      idGroupe: 4,
      nomGroupe: 'Collectif 1',
      tarifSpecial: null,
    },
    {
      idEleve: 6,
      nomEleve: 'Petit',
      prenomEleve: 'Fiona',
      anneeEleve: 1,
      numeroTel: '0600000006',
      idGroupe: 4,
      nomGroupe: 'Collectif 1',
      tarifSpecial: null,
    },
    {
      idEleve: 7,
      nomEleve: 'Blanc',
      prenomEleve: 'George',
      anneeEleve: 2,
      numeroTel: '0600000007',
      idGroupe: 4,
      nomGroupe: 'Collectif 1',
      tarifSpecial: null,
    },
    {
      idEleve: 8,
      nomEleve: 'Richard',
      prenomEleve: 'Hannah',
      anneeEleve: 3,
      numeroTel: '0600000008',
      idGroupe: 4,
      nomGroupe: 'Collectif 1',
      tarifSpecial: null,
    },
    // Collectif 2
    {
      idEleve: 9,
      nomEleve: 'Moreau',
      prenomEleve: 'Isabelle',
      anneeEleve: 2,
      numeroTel: '0600000009',
      idGroupe: 5,
      nomGroupe: 'Collectif 2',
      tarifSpecial: null,
    },
    {
      idEleve: 10,
      nomEleve: 'Garnier',
      prenomEleve: 'Julien',
      anneeEleve: 1,
      numeroTel: '0600000010',
      idGroupe: 5,
      nomGroupe: 'Collectif 2',
      tarifSpecial: null,
    },
    {
      idEleve: 11,
      nomEleve: 'Roger',
      prenomEleve: 'Karen',
      anneeEleve: 2,
      numeroTel: '0600000011',
      idGroupe: 5,
      nomGroupe: 'Collectif 2',
      tarifSpecial: null,
    },
    {
      idEleve: 12,
      nomEleve: 'Vincent',
      prenomEleve: 'Louis',
      anneeEleve: 3,
      numeroTel: '0600000012',
      idGroupe: 5,
      nomGroupe: 'Collectif 2',
      tarifSpecial: null,
    },
    {
      idEleve: 13,
      nomEleve: 'Lambert',
      prenomEleve: 'Marie',
      anneeEleve: 1,
      numeroTel: '0600000013',
      idGroupe: 5,
      nomGroupe: 'Collectif 2',
      tarifSpecial: null,
    },
    // Collectif 3
    {
      idEleve: 14,
      nomEleve: 'Bonnet',
      prenomEleve: 'Nathan',
      anneeEleve: 2,
      numeroTel: '0600000014',
      idGroupe: 6,
      nomGroupe: 'Collectif 3',
      tarifSpecial: null,
    },
    {
      idEleve: 15,
      nomEleve: 'François',
      prenomEleve: 'Olivia',
      anneeEleve: 1,
      numeroTel: '0600000015',
      idGroupe: 6,
      nomGroupe: 'Collectif 3',
      tarifSpecial: null,
    },
    {
      idEleve: 16,
      nomEleve: 'Fournier',
      prenomEleve: 'Paul',
      anneeEleve: 3,
      numeroTel: '0600000016',
      idGroupe: 6,
      nomGroupe: 'Collectif 3',
      tarifSpecial: null,
    },
    {
      idEleve: 17,
      nomEleve: 'Girard',
      prenomEleve: 'Quentin',
      anneeEleve: 2,
      numeroTel: '0600000017',
      idGroupe: 6,
      nomGroupe: 'Collectif 3',
      tarifSpecial: null,
    },
    {
      idEleve: 18,
      nomEleve: 'Clément',
      prenomEleve: 'Rose',
      anneeEleve: 1,
      numeroTel: '0600000018',
      idGroupe: 6,
      nomGroupe: 'Collectif 3',
      tarifSpecial: null,
    },
    {
      idEleve: 19,
      nomEleve: 'Pereira',
      prenomEleve: 'Simon',
      anneeEleve: 2,
      numeroTel: '0600000019',
      idGroupe: 6,
      nomGroupe: 'Collectif 3',
      tarifSpecial: null,
    },
    // Collectif 4
    {
      idEleve: 20,
      nomEleve: 'Dubois',
      prenomEleve: 'Thomas',
      anneeEleve: 3,
      numeroTel: '0600000020',
      idGroupe: 7,
      nomGroupe: 'Collectif 4',
      tarifSpecial: null,
    },
    {
      idEleve: 21,
      nomEleve: 'Lopez',
      prenomEleve: 'Ursula',
      anneeEleve: 1,
      numeroTel: '0600000021',
      idGroupe: 7,
      nomGroupe: 'Collectif 4',
      tarifSpecial: null,
    },
    {
      idEleve: 22,
      nomEleve: 'Moulin',
      prenomEleve: 'Victor',
      anneeEleve: 2,
      numeroTel: '0600000022',
      idGroupe: 7,
      nomGroupe: 'Collectif 4',
      tarifSpecial: null,
    },
    {
      idEleve: 23,
      nomEleve: 'Rousseau',
      prenomEleve: 'Wendy',
      anneeEleve: 3,
      numeroTel: '0600000023',
      idGroupe: 7,
      nomGroupe: 'Collectif 4',
      tarifSpecial: null,
    },
    {
      idEleve: 24,
      nomEleve: 'Fontaine',
      prenomEleve: 'Xavier',
      anneeEleve: 1,
      numeroTel: '0600000024',
      idGroupe: 7,
      nomGroupe: 'Collectif 4',
      tarifSpecial: null,
    },
    {
      idEleve: 25,
      nomEleve: 'Leroy',
      prenomEleve: 'Yasmine',
      anneeEleve: 2,
      numeroTel: '0600000025',
      idGroupe: 7,
      nomGroupe: 'Collectif 4',
      tarifSpecial: null,
    },
    {
      idEleve: 26,
      nomEleve: 'Colin',
      prenomEleve: 'Zacharie',
      anneeEleve: 3,
      numeroTel: '0600000026',
      idGroupe: 7,
      nomGroupe: 'Collectif 4',
      tarifSpecial: null,
    },
    // Collectif 5
    {
      idEleve: 27,
      nomEleve: 'Vidal',
      prenomEleve: 'Antoine',
      anneeEleve: 1,
      numeroTel: '0600000027',
      idGroupe: 8,
      nomGroupe: 'Collectif 5',
      tarifSpecial: null,
    },
    {
      idEleve: 28,
      nomEleve: 'Martel',
      prenomEleve: 'Brigitte',
      anneeEleve: 2,
      numeroTel: '0600000028',
      idGroupe: 8,
      nomGroupe: 'Collectif 5',
      tarifSpecial: null,
    },
    {
      idEleve: 29,
      nomEleve: 'Teixeira',
      prenomEleve: 'Cédric',
      anneeEleve: 3,
      numeroTel: '0600000029',
      idGroupe: 8,
      nomGroupe: 'Collectif 5',
      tarifSpecial: null,
    },
    {
      idEleve: 30,
      nomEleve: 'Leroy',
      prenomEleve: 'Delphine',
      anneeEleve: 1,
      numeroTel: '0600000030',
      idGroupe: 8,
      nomGroupe: 'Collectif 5',
      tarifSpecial: null,
    },
    {
      idEleve: 31,
      nomEleve: 'Giraud',
      prenomEleve: 'Élodie',
      anneeEleve: 2,
      numeroTel: '0600000031',
      idGroupe: 8,
      nomGroupe: 'Collectif 5',
      tarifSpecial: null,
    },
    // Collectif 6
    {
      idEleve: 32,
      nomEleve: 'Boucher',
      prenomEleve: 'François',
      anneeEleve: 3,
      numeroTel: '0600000032',
      idGroupe: 9,
      nomGroupe: 'Collectif 6',
      tarifSpecial: null,
    },
    {
      idEleve: 33,
      nomEleve: 'Lemoine',
      prenomEleve: 'Gabrielle',
      anneeEleve: 1,
      numeroTel: '0600000033',
      idGroupe: 9,
      nomGroupe: 'Collectif 6',
      tarifSpecial: null,
    },
    {
      idEleve: 34,
      nomEleve: 'André',
      prenomEleve: 'Henri',
      anneeEleve: 2,
      numeroTel: '0600000034',
      idGroupe: 9,
      nomGroupe: 'Collectif 6',
      tarifSpecial: null,
    },
    {
      idEleve: 35,
      nomEleve: 'Perrin',
      prenomEleve: 'Inès',
      anneeEleve: 3,
      numeroTel: '0600000035',
      idGroupe: 9,
      nomGroupe: 'Collectif 6',
      tarifSpecial: null,
    },
    {
      idEleve: 36,
      nomEleve: 'Leclerc',
      prenomEleve: 'Jacques',
      anneeEleve: 1,
      numeroTel: '0600000036',
      idGroupe: 9,
      nomGroupe: 'Collectif 6',
      tarifSpecial: null,
    },
    {
      idEleve: 37,
      nomEleve: 'Rolland',
      prenomEleve: 'Karim',
      anneeEleve: 2,
      numeroTel: '0600000037',
      idGroupe: 9,
      nomGroupe: 'Collectif 6',
      tarifSpecial: null,
    },
    {
      idEleve: 38,
      nomEleve: 'Lefevre',
      prenomEleve: 'Laura',
      anneeEleve: 3,
      numeroTel: '0600000038',
      idGroupe: 9,
      nomGroupe: 'Collectif 6',
      tarifSpecial: null,
    },
    {
      idEleve: 39,
      nomEleve: 'Leger',
      prenomEleve: 'Martin',
      anneeEleve: 1,
      numeroTel: '0600000039',
      idGroupe: 9,
      nomGroupe: 'Collectif 6',
      tarifSpecial: null,
    },
    // Étudiants sans groupe
    {
      idEleve: 40,
      nomEleve: 'Dubois',
      prenomEleve: 'Sophie',
      anneeEleve: 2,
      numeroTel: '0600000040',
      idGroupe: null,
      nomGroupe: null,
      tarifSpecial: null,
    },
    {
      idEleve: 41,
      nomEleve: 'Marchand',
      prenomEleve: 'Lucas',
      anneeEleve: 3,
      numeroTel: '0600000041',
      idGroupe: null,
      nomGroupe: null,
      tarifSpecial: null,
    },
  ];

  const [usersData, setUsersData] = useState(initialUsersData);
  const [users, setUsers] = useState(initialUsersData);
  const [searchType, setSearchType] = useState("prenom");
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const [showModalModifyUser, setShowModalModifyUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Données statiques pour les groupes
  const groupeInfo = [
    { idGroupe: 1, nomGroupe: 'Individuel 1' },
    { idGroupe: 2, nomGroupe: 'Individuel 2' },
    { idGroupe: 3, nomGroupe: 'Individuel 3' },
    { idGroupe: 4, nomGroupe: 'Collectif 1' },
    { idGroupe: 5, nomGroupe: 'Collectif 2' },
    { idGroupe: 6, nomGroupe: 'Collectif 3' },
    { idGroupe: 7, nomGroupe: 'Collectif 4' },
    { idGroupe: 8, nomGroupe: 'Collectif 5' },
    { idGroupe: 9, nomGroupe: 'Collectif 6' },
  ];

  const handleSearch = (searchQuery) => {
    if (searchType === "prenom") {
      setUsers(usersData.filter(user => user.prenomEleve.toLowerCase().includes(searchQuery.toLowerCase())));
    } else if (searchType === "nom") {
      setUsers(usersData.filter(user => user.nomEleve.toLowerCase().includes(searchQuery.toLowerCase())));
    } else if (searchType === "numero") {
      setUsers(usersData.filter(user => user.numeroTel.toString().includes(searchQuery)));
    } else if (searchType === "groupe") {
      if (searchQuery.toLowerCase() === "aucun")
        setUsers(usersData.filter(user => user.idGroupe === null));
      else
        setUsers(usersData.filter(user => user.nomGroupe && user.nomGroupe.toLowerCase().includes(searchQuery.toLowerCase())));
    }

    if (!searchQuery)
      setUsers(usersData);
  };

  const handleDelete = (id) => {
    setErrorMessage('Functionality not available in this preview version');
    setShowErrorModal(true);
  };

  const confirmDelete = () => {
    // Fonctionnalité non disponible
    setErrorMessage('Functionality not available in this preview version');
    setShowErrorModal(true);
    setShowDeleteConfirm(false);
  };

  const openModalAddUser = () => {
    setShowModalAddUser(true);
  };

  const closeModalAddUser = () => {
    setShowModalAddUser(false);
  };

  const openModalModifyUser = (user) => {
    setShowModalModifyUser(true);
    setCurrentUser(user);
  };

  const closeModalModifyUser = () => {
    setShowModalModifyUser(false);
    setCurrentUser(null);
  };

  function sendPostRequest(e) {
    e.preventDefault();
    // Fonctionnalité non disponible
    setErrorMessage('Functionality not available in this preview version');
    setShowErrorModal(true);
    closeModalAddUser();
  }

  function sendPutRequest(e) {
    e.preventDefault();
    // Fonctionnalité non disponible
    setErrorMessage('Functionality not available in this preview version');
    setShowErrorModal(true);
    closeModalModifyUser();
  }

  function countUsersNotAloneInGroup(users) {
    const groupCounts = {};

    users.forEach(user => {
      const groupName = user.nomGroupe;
      if (groupName) {
        if (groupCounts[groupName]) {
          groupCounts[groupName]++;
        } else {
          groupCounts[groupName] = 1;
        }
      }
    });

    let count = 0;
    users.forEach(user => {
      const groupName = user.nomGroupe;
      if (groupName && groupCounts[groupName] > 1) {
        count++;
      }
    });

    return count;
  }

  function countStudentsAloneInGroup(users) {
    const groupCounts = {};

    users.forEach(user => {
      const groupName = user.nomGroupe;
      if (groupName) {
        if (groupCounts[groupName]) {
          groupCounts[groupName]++;
        } else {
          groupCounts[groupName] = 1;
        }
      }
    });

    let count = 0;
    users.forEach(user => {
      const groupName = user.nomGroupe;
      if (groupName && groupCounts[groupName] === 1) {
        count++;
      }
    });

    return count;
  }

  return (
    <div className={styles['user-management']}>
      <div className={styles.header}>
        <h1>Liste des Étudiants</h1>
      </div>

      <div className={styles.stats}>
        <StatCard
          title="Total d'étudiants"
          value={users.length}
          icon={Users}
          description="Total de tous les étudiants"
        />
        <StatCard
          title="Étudiants en groupe collectif"
          value={countUsersNotAloneInGroup(users)}
          icon={UsersRound}
          description="Étudiants dans des groupes collectifs"
        />
        <StatCard
          title="Étudiants en groupe individuel"
          value={countStudentsAloneInGroup(users)}
          icon={User}
          description="Étudiants dans des groupes individuels"
        />
      </div>

      <div className={styles['main-content']}>
        <div className={styles['search-Bar']}>
          <input
            type="text"
            placeholder={`Rechercher par ${searchType}`}
            onChange={(e) => handleSearch(e.target.value)}
            className={styles['input-search']}
          />
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className={styles['select-type-search']}
          >
            <option value="prenom">Prénom</option>
            <option value="nom">Nom</option>
            <option value="numero">Numéro de téléphone</option>
            <option value="groupe">Groupe</option>
          </select>

          <button className={styles['add-user-btn']} onClick={openModalAddUser}>Ajouter un étudiant</button>
        </div>
        <div className={styles["table-container"]}>
          <table className={styles['user-table']}>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Année</th>
                <th>Téléphone</th>
                <th>Groupe</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.idEleve}>
                  <td>
                    {user.nomEleve}
                    {user.tarifSpecial && (
                      <Star className={styles['tarif-special-icon']} size={16} />
                    )}
                  </td>
                  <td>{user.prenomEleve}</td>
                  <td>{user.anneeEleve}</td>
                  <td>{user.numeroTel}</td>
                  <td>
                    <span className={`${styles['role-badge']} ${user.nomGroupe === null ? styles.admin : styles.coordinator}`}>
                      {user.nomGroupe ? user.nomGroupe : "Aucun"}
                    </span>
                  </td>
                  <td>
                    <button className={`${styles['action-btn']} ${styles.edit}`} onClick={() => openModalModifyUser(user)}>{<Edit />}</button>
                    <button className={`${styles['action-btn']} ${styles.delete}`} onClick={() => handleDelete(user.idEleve)}>{<Trash2 />}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModalAddUser && (
        <div className={styles['modal']}>
          <div className={styles['modal-content']}>
            <span className={styles.close} onClick={closeModalAddUser}>&times;</span>
            <h2>Ajouter un étudiant</h2>
            <form className={styles['form-ajout-etudiant']} onSubmit={(e) => sendPostRequest(e)}>
              <div className={styles['form-group']}>
                <label>Nom:</label>
                <input type="text" name="nom" className={styles['form-control']} required />
              </div>
              <div className={styles['form-group']}>
                <label>Prénom:</label>
                <input type="text" name="prenom" className={styles['form-control']} required />
              </div>
              <div className={styles['form-group']}>
                <label>Année:</label>
                <input type="number" name="annee" className={styles['form-control']} required />
              </div>
              <div className={styles['form-group']}>
                <label>Téléphone:</label>
                <input type="text" name="telephone" className={styles['form-control']} />
              </div>
              <div className={styles['form-group']}>
                <label>Tarif Spécial:</label>
                <input type="number" name="tarifSpecial" className={styles['form-control']} />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="idGroupe">Groupe:</label>
                <select id="idGroupe" name="idGroupe" className={styles['form-control']} >
                  <option key={99999} value="">Aucun</option>
                  {groupeInfo.map(groupe => (
                    <option key={groupe.idGroupe} value={groupe.idGroupe}>{groupe.nomGroupe}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className={styles['btn-ajouter']}>Ajouter</button>
            </form>
          </div>
        </div>
      )}

      {showModalModifyUser && currentUser && (
        <section className={styles.modal}>
          <div className={styles['modal-content']}>
            <span className={styles.close} onClick={closeModalModifyUser}>&times;</span>
            <h2>Modifier les informations</h2>
            <form className={styles['form-modifier-etudiant']} onSubmit={(e) => sendPutRequest(e)}>
              <div className={styles['form-group']}>
                <label>Nom:</label>
                <input type="text" name="nom" className={styles['form-control']} defaultValue={currentUser.nomEleve} required />
              </div>
              <div className={styles['form-group']}>
                <label>Prénom:</label>
                <input type="text" name="prenom" className={styles['form-control']} defaultValue={currentUser.prenomEleve} required />
              </div>
              <div className={styles['form-group']}>
                <label>Année:</label>
                <input type="number" name="annee" className={styles['form-control']} defaultValue={currentUser.anneeEleve} required />
              </div>
              <div className={styles['form-group']}>
                <label>Téléphone:</label>
                <input type="text" name="telephone" className={styles['form-control']} defaultValue={currentUser.numeroTel} />
              </div>
              <div className={styles['form-group']}>
                <label>Tarif spécial:</label>
                <input type="number" name="tarifSpecial" className={styles['form-control']} defaultValue={currentUser.tarifSpecial} />
              </div>
              <div className={styles['form-group']}>
                <label>Groupe:</label>
                <select id="idGroupe"
                  name="idGroupe"
                  className={styles['form-control']}
                  defaultValue={currentUser.idGroupe || ''}
                >
                  <option key={99999} value="">Aucun</option>
                  {groupeInfo.map(groupe => (
                    <option key={groupe.idGroupe} value={groupe.idGroupe}>{groupe.nomGroupe}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className={styles['btn-ajouter']}>Modifier</button>
            </form>
          </div>
        </section>
      )}

      {showDeleteConfirm && (
        <div className={styles.modal}>
          <div className={styles['modal-content']}>
            <h2>Confirmer la suppression</h2>
            <p>Êtes-vous sûr de vouloir supprimer cet étudiant ?</p>
            <div className={styles['modal-actions']}>
              <button onClick={() => setShowDeleteConfirm(false)}>Annuler</button>
              <button onClick={confirmDelete}>Confirmer</button>
            </div>
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

export default Etudiant;
