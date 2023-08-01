import React, { useState } from "react";
import { UserStepForm } from "./UserStepForm";
import { WizardStepForm } from "./WizardStepForm";
import { UserModel } from "../UserModel";
import { Wizard } from "../WizardModel";
import { Alignment } from "../WizardModel";
import { Sidekick } from "../SidekickModel";
import { SidekickStepForm } from "./SidekickStepForm";
import { ConfirmationStep } from "./ConfirmationStep";

  export function SignupFlow() {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [user, setUser] = useState<UserModel>({
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false,
        terms: false
    });

    const [sidekick, setSidekick] = useState<Sidekick>({
      // Initialize the user object with empty values or defaults
        name: "",
        skill: ""
    });

    const [wizard, setWizard] = useState<Wizard>({
      // Initialize the user object with empty values or defaults
        name1: "",
        level: 1,
        school: "",
        alignment: Alignment.GOOD
      // Add other properties from the UserModel
    });

    const handleFormSubmit = (formData: UserModel) => {
        setUser((prevUser) => ({ ...prevUser, ...formData }));
        setCurrentStep((prevStep) => prevStep + 1);
      };
    
      const handleWizardFormSubmit = (formData: Wizard) => {
        setWizard((prevWizard) => ({ ...prevWizard, ...formData }));
        user.wizard = wizard;
        setCurrentStep((prevStep) => prevStep + 1);
      };

      const handleSidekickFormSubmit = (formData: Sidekick) => {
        setSidekick((prevSidekick) => ({ ...prevSidekick, ...formData }));
        user.sidekick = sidekick;
        setCurrentStep((prevStep) => prevStep + 1);
      };

      const handleConfirmSubmit = (formData: UserModel) => {
        setUser(formData);
        setCurrentStep(1);
      };
      const renderForm = () => {
        switch (currentStep) {
          case 1:
            return <UserStepForm user={user} setUser={setUser} onFormSubmit={handleFormSubmit} />;
          case 2:
            return <WizardStepForm wizard={wizard} setWizard={setWizard} onFormSubmit={handleWizardFormSubmit} />;
          case 3:
            return <SidekickStepForm sidekick={sidekick} setSidekick={setSidekick} onFormSubmit={handleSidekickFormSubmit} />;
          case 4:
            return <ConfirmationStep user={user} setUser={setUser} onFormSubmit={handleConfirmSubmit} />;              
          default:
            return <></>;
        }
      };

      return (
        <div>
          <h1>Wizard Signup Wizard</h1>
          {renderForm()}
        </div>
      );
  }