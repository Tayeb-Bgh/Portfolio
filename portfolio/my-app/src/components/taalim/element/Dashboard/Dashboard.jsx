import React, { useState, useEffect } from 'react';
import { Users, Calendar, School, ChartPie } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
  CartesianGrid, Tooltip
} from 'recharts';
import StatCard from '../Utils/StatCard';
import styles from './Dashboard.module.css';
import { getDate } from 'date-fns';


// Simuler les données du dashboard
const fakeStats = {
  totalStudents: 150,
  activeGroups: 10,
  weekSessions: 15,
  monthlyRevenue: 30000
};

const fakeRevenueData = [
  { month: '2024-09', total: 40000 },
  { month: '2024-10', total: 53000},
  { month: '2024-11', total: 35000 },
  { month: '2024-12', total: 19500 }
];

const fakeNextSessions = [
  { dateSeance: '2023-12-06 08:00:00', nomGroupe: 'Groupe A', totalAmount: 500 },
  { dateSeance: '2023-12-06 10:00:00', nomGroupe: 'Groupe B', totalAmount: 600 },
  { dateSeance: '2023-12-06 14:00:00', nomGroupe: 'Groupe C', totalAmount: 700 }
];

const fakePendingPayments = [
  { nomEleve: 'Alice', prenomEleve: 'Dupont', unpaidSessions: 2, totalAmount: 1000 },
  { nomEleve: 'Bob', prenomEleve: 'Martin', unpaidSessions: 1, totalAmount: 500 },
  { nomEleve: 'Charlie', prenomEleve: 'Durand', unpaidSessions: 3, totalAmount: 1500 }
];

const fakeAttendanceRate = 85;

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeGroups: 0,
    weekSessions: 0,
    monthlyRevenue: 0
  });

  const [revenueData, setRevenueData] = useState([]);
  const [nextSessions, setNextSessions] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);
  const [attendanceRate, setAttendanceRate] = useState(0);
  const [nextSessionDate, setNextSessionDate] = useState('');


  useEffect(() => {
    // Mettre à jour les états avec les données simulées
    setStats(fakeStats);
    const processedRevenueData = processRevenueData(fakeRevenueData);
    console.log(processedRevenueData); // Vérifie ici les données
    setRevenueData(processedRevenueData);
    setNextSessions(fakeNextSessions);
    setPendingPayments(fakePendingPayments);
    setAttendanceRate(fakeAttendanceRate);
    setNextSessionDate(new Date(fakeNextSessions[0].dateSeance));
  }, []);

 const processRevenueData = (data) => {
  // Liste des mois pour l'affichage sur l'axe X
  const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];

  // Récupérer l'année actuelle
  const currentYear = new Date().getFullYear();

  // Mapper les mois aux données
  return months.map((month, index) => {
    // Calcul du mois sous forme numérique, Septembre commence à 9
    let monthNum = index + 9; // Septembre (9), Octobre (10), ..., Mai (5)
    
    // Si le mois est plus grand que 12, cela signifie que nous sommes dans l'année suivante
    const year = monthNum > 12 ? currentYear + 1 : currentYear;
    
    // Ajuster le mois au format MM
    const monthStr = String(monthNum > 12 ? monthNum - 12 : monthNum).padStart(2, '0');

    // Recherche de la donnée correspondante à l'année et au mois
    const dataPoint = data.find(d => {
      const [dataYear, dataMonth] = d.month.split('-');
      return dataYear === String(year) && dataMonth === monthStr;
    });

    return {
      name: month,
      total: dataPoint ? dataPoint.total : 0, // Si aucune donnée, retour de 0
    };
  });
};




  const getEndOfToday = () => {
    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);
    return endOfToday;
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.headerTitle}>Tableau de Bord</h1>
      <div className={styles.statsGrid}>
        <StatCard
          title="Total Étudiants"
          value={stats.totalStudents}
          icon={Users}
          description="Total d'étudiants enregistrés"
        />
        <StatCard
          title="Groupes Actifs"
          value={stats.activeGroups}
          icon={School}
          description="Total de groupes enregistrés"
        />
        <StatCard
          title="Séances Cette Semaine"
          value={stats.weekSessions}
          icon={Calendar}
          description="Séances programmées pour cette semaine"
        />
        <StatCard
          title="Taux de Présence"
          value={`${attendanceRate}%`}
          icon={ChartPie}
          description="Étudiants présents cette semaine"
        />
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.chartSection}>
          <div className={styles.chartCard}>
            <h3>Aperçu des Revenus</h3>
            <ResponsiveContainer width="100%" height={200} className={styles["graphe"]}>
              <BarChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  dy={5}
                  interval={0}
                  tickMargin={8}
                />
                <YAxis
                  tickFormatter={(value) => `${value} DA`}
                  axisLine={false}
                  tickLine={false}
                  dx={-5}
                  width={80}
                />
                <Tooltip
                  formatter={(value) => `${value} DA`}
                  contentStyle={{
                    background: '#fff',
                    border: '1px solid #E5E7EB',
                    borderRadius: '6px',
                    padding: '8px'
                  }}
                  cursor={{ fill: 'transparent' }}
                  labelStyle={{ color: '#111827' }}
                />
                <Bar
                  dataKey="total"
                  fill="#3F4D6B" // Changer la couleur des barres si nécessaire
                  radius={[4, 4, 0, 0]}
                  maxBarSize={50}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>
          <div className={styles.paymentsCard}>
            <h3>Paiements en Attente</h3>
            <div className={styles.paymentsListContainer}>
              <div className={styles.paymentsList}>
                {pendingPayments.map((payment, index) => (
                  <div key={index} className={styles.paymentItem}>
                    <div className={styles.paymentInfo}>
                      <p className={styles.studentName}>{payment.nomEleve} {payment.prenomEleve}</p>
                      <p className={styles.sessionsCount}>{payment.unpaidSessions} séance(s) impayée(s)</p>
                    </div>
                    <div className={styles.paymentAmount}>
                      {payment.totalAmount} DA
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.paymentsTotal}>
              <span>Total des paiements en attente:</span>
              <span>{pendingPayments.reduce((sum, payment) => sum + payment.totalAmount, 0)} DA</span>
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.sessionsCard}>
            <h3>{
              new Date(nextSessionDate) > getEndOfToday() ? `Séances du ${new Date(nextSessionDate).toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
              })}` : "Séances d'Aujourd'hui"
            }</h3>
            <div className={styles.sessionsList}>
              {nextSessions.map((session, index) => (
                <div key={index} className={styles.sessionItem}>
                  <div className={styles.sessionInfo}>
                    <span className={styles.sessionTime}>
                      {new Date(session.dateSeance).toLocaleTimeString('fr-FR', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <span>{session.nomGroupe}</span>
                  </div>
                  <div className={styles.sessionPayment}>
                    {session.totalAmount} DA
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.sessionsTotal}>
              <span>Total attendu:</span>
              <span>{nextSessions.reduce((sum, session) => sum + session.totalAmount, 0)} DA</span>
            </div>
          </div>

          <div className={styles.attendanceCard}>
            <h3>Revenus du Mois</h3>
            <div className={styles.attendanceContent}>
              <div className={styles.attendanceRate}>{stats.monthlyRevenue} DA</div>
              <p className={styles.attendanceTrend}>Cumul des revenus depuis le début du mois</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
