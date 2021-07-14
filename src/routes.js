import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('./pages/Home.vue');
const TaxesDocuments = () => import('./pages/documents/Taxes.vue');
const TravelDocuments = () => import('./pages/documents/Travel.vue');
const InsuranceDocuments = () => import('./pages/documents/Insurance.vue');

const WeddingEvents = () => import('./pages/events/Weddings.vue');
const NetworkingEvents = () => import('./pages/events/Networking.vue');
const Documentation = () => import('./pages/guides/Documentation.vue');

const UnboxMessages = () => import('./pages/messages/Unbox.vue');
const UnreadMessages = () => import('./pages/messages/Unread.vue');
const ArchivedMessages = () => import('./pages/messages/Archived.vue');

const VacationsPictures = () => import('./pages/pictures/Vacations.vue');
const UniversityPictures = () => import('./pages/pictures/University.vue');
const AnniversaryPictures = () => import('./pages/pictures/Anniversary.vue');

const CallStats = () => import('./pages/statistics/CallStats.vue');
const FinancesStatistics = () => import('./pages/statistics/Finances.vue');
const TripLogsStatistics = () => import('./pages/statistics/TripLogs.vue');

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'TaxesDocuments',
    path: '/documents/taxes',
    component: TaxesDocuments,
  },
  {
    name: 'TravelDocuments',
    path: '/documents/travel',
    component: TravelDocuments,
  },
  {
    name: 'InsuranceDocuments',
    path: '/documents/insurance',
    component: InsuranceDocuments,
  },
  {
    name: 'NetworkingEvents',
    path: '/events/networking',
    component: NetworkingEvents,
  },
  {
    name: 'WeddingsEvents',
    path: '/events/weddings',
    component: WeddingEvents,
  },
  {
    name: 'Documentation',
    path: '/guides/documentation',
    component: Documentation,
  },
  {
    name: 'ArchivedMessages',
    path: '/messages/archived',
    component: ArchivedMessages,
  },
  {
    name: 'UnboxMessages',
    path: '/messages/unbox',
    component: UnboxMessages,
  },
  {
    name: 'UnreadMessages',
    path: '/messages/unread',
    component: UnreadMessages,
  },
  {
    name: 'AnniversaryPictures',
    path: '/pictures/anniversary',
    component: AnniversaryPictures,
  },
  {
    name: 'UniversityPictures',
    path: '/pictures/university',
    component: UniversityPictures,
  },
  {
    name: 'VacationsPictures',
    path: '/pictures/vacations',
    component: VacationsPictures,
  },
  {
    name: 'CallStats',
    path: '/statistics/call-stats',
    component: CallStats,
  },
  {
    name: 'FinancesStatistics',
    path: '/statistics/finances',
    component: FinancesStatistics,
  },
  {
    name: 'TripLogs',
    path: '/statistics/trip-logs',
    component: TripLogsStatistics,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
