import  { useState } from 'react';
import Services from './components/services/services';
import Schedule from './components/schedule/schedule';
import Confirmation from './components/confirmation/confirmation';

const App = () => {
  const [step, setStep] = useState(1);
  const [FinalSelectedServices, setFinalSelectedServices] = useState([]);
  const [schedule, setSchedule] = useState('');
console.log("seleccionfinal:", FinalSelectedServices);
console.log("horafinal:", schedule);
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFinalSelectedServices = (service) => {
    setFinalSelectedServices([...FinalSelectedServices, service.name]);
  };

  const handleSchedule = (time) => {
    setSchedule(time);
  };

  switch (step) {
    case 1:
      return <Services FinalSelectedServices={handleFinalSelectedServices} onContinue={nextStep} />;
    case 2:
      return <Schedule onBack={prevStep} onContinue={nextStep}  scheduleSelection={handleSchedule}/>;
    case 3:
      return <Confirmation FinalSelectedServices={FinalSelectedServices} schedule={schedule} onBack={prevStep} />;
    default:
      return <div>Error: Paso desconocido</div>;
  }
};

export default App;