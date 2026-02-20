import { Switch, Route } from 'wouter';
import './styles/pjazza.css';

import Portal from './pages/Portal';
import Discover from './pages/Discover';
import HowItWorks from './pages/HowItWorks';
import Sectors from './pages/Sectors';
import People from './pages/People';
import BusinessOnboard from './pages/BusinessOnboard';
import BusinessDashboard from './pages/BusinessDashboard';
import RecordingStudio from './pages/RecordingStudio';

export default function PjazzaApp() {
  return (
    <div className="pjazza-world">
      <Switch>
        <Route path="/pjazza" component={Portal} />
        <Route path="/pjazza/discover" component={Discover} />
        <Route path="/pjazza/how-it-works" component={HowItWorks} />
        <Route path="/pjazza/sectors" component={Sectors} />
        <Route path="/pjazza/people" component={People} />
        <Route path="/pjazza/business/onboard" component={BusinessOnboard} />
        <Route path="/pjazza/business/dashboard" component={BusinessDashboard} />
        <Route path="/pjazza/business/stream" component={RecordingStudio} />
        <Route component={Portal} />
      </Switch>
    </div>
  );
}
