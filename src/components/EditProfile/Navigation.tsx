import { stepType } from '../../types/stepType';

type navigationPropsType = {
  steps: stepType[];
  currentStep: number;
};

const Navigation: React.FC<navigationPropsType> = ({ steps, currentStep }) => {
  if (currentStep >= steps.length) {
    throw new Error(
      'Current navigation step cannot be greater than avaialble steps'
    );
  }

  const getStepClassName = (step: number, currentStep: number) => {
    const className = 'navigation__bar';

    if (step < currentStep) {
      return `${className} navigation__bar--completed`;
    } else if (step === currentStep) {
      return `${className} navigation__bar--current`;
    } else {
      return className;
    }
  };

  return (
    <nav className="navigation">
      <div className={`navigation__indicator`}>
        {steps.map((step) => {
          return (
            <div
              key={step.name}
              className={getStepClassName(step.step, currentStep)}
            ></div>
          );
        })}
      </div>
      <h1 className="navigation__step-name">{steps[currentStep].name}</h1>
    </nav>
  );
};

export default Navigation;
