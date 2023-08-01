import { Sidekick } from "./SidekickModel";
import { Wizard } from "./WizardModel";

export interface UserModel {
    email: string;
    password: string;
    newsletter: boolean;
    wizard?: Wizard;
    sidekick?: Sidekick;
  
  
    terms: boolean;
    confirmPassword: string;
  }