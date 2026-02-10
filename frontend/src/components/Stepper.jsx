import React from 'react';

export function Stepper({ steps = [], currentStep = 0 }) {
  return (
    <div className="flex items-center justify-between gap-1 sm:gap-2">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {/* Step Circle */}
          <div className="flex flex-col items-center flex-1 min-w-0">
            <div
              className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center font-medium text-xs sm:text-sm transition-all flex-shrink-0 ${
                index <= currentStep
                  ? 'bg-primary-600 text-white'
                  : 'bg-surface-200 text-surface-600'
              }`}
            >
              {index + 1}
            </div>
            <p className="text-xs font-medium text-surface-700 mt-1 sm:mt-2 text-center break-words leading-tight">
              {step}
            </p>
          </div>

          {/* Line */}
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 sm:h-1 my-4 sm:my-6 transition-all ${
                index < currentStep ? 'bg-primary-600' : 'bg-surface-200'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
