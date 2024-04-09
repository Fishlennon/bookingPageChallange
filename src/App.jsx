import  { useState } from 'react';
import Services from './components/services/services';
import Schedule from './components/schedule/schedule';
import Confirmation from './components/confirmation/confirmation';
import Reserved from './components/reserved/reserved';

import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [FinalSelectedServices, setFinalSelectedServices] = useState([]);
  const [schedule, setSchedule] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const resetStep = () => {
    setStep(1);
  };

  const handleFinalSelectedServices = (service) => {
    setFinalSelectedServices([...FinalSelectedServices, service.name]);
  };

  const handleSchedule = (fecha, hora) => {
    setSchedule([fecha, hora]);
  };

  // switch (step) {
  //   case 1:
  //     return  <div>  <Services FinalSelectedServices={handleFinalSelectedServices} onContinue={nextStep} /> </div> ;
  //   case 2:
  //     return <div>  <Schedule onBack={prevStep} onContinue={nextStep}  scheduleSelection={handleSchedule}/> </div>;
  //   case 3:
  //     return <div>  <Confirmation FinalSelectedServices={FinalSelectedServices} schedule={schedule} onBack={prevStep} /> </div>;
  //   default:
  //     return <div>error</div>;
  // }

  return (
    <div className="container">
      
      <div className="progress-bar">
        <div className={`progress-bar-filled step-${step}`} />
      </div>
      <div className="progress-text">
      {step === 1 && "Choose Service"}
      {step === 2 && "Schedule"}
      {step === 3 && "Confirm"}
      {step === 4 && "Confirmed"}
    </div>
      {step === 1 && (
        <Services
          FinalSelectedServices={handleFinalSelectedServices}
          onContinue={nextStep}
        />
      )}
      {step === 2 && (
        <Schedule
          onBack={prevStep}
          onContinue={nextStep}
          scheduleSelection={handleSchedule}
        />
      )}
      {step === 3 && (
        <Confirmation
          FinalSelectedServices={FinalSelectedServices}
          schedule={schedule}
          onBack={prevStep}
          onContinue={nextStep}
        />
      )}
      {step === 4 && (
        <Reserved
          reset={resetStep}
        />
      )}
    </div>
  );


};

export default App;