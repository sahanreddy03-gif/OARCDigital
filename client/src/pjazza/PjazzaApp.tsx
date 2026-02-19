import { Switch, Route } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import './styles/pjazza.css';

import Portal from './pages/Portal';
import Discover from './pages/Discover';
import BusinessOnboard from './pages/BusinessOnboard';
import BusinessDashboard from './pages/BusinessDashboard';
import RecordingStudio from './pages/RecordingStudio';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

export default function PjazzaApp() {
  return (
    <div className="pjazza-world">
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/pjazza">
            <AnimatedPage><Portal /></AnimatedPage>
          </Route>
          <Route path="/pjazza/discover">
            <AnimatedPage><Discover /></AnimatedPage>
          </Route>
          <Route path="/pjazza/business/onboard">
            <AnimatedPage><BusinessOnboard /></AnimatedPage>
          </Route>
          <Route path="/pjazza/business/dashboard">
            <AnimatedPage><BusinessDashboard /></AnimatedPage>
          </Route>
          <Route path="/pjazza/business/stream">
            <AnimatedPage><RecordingStudio /></AnimatedPage>
          </Route>
          <Route>
            <AnimatedPage><Portal /></AnimatedPage>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
