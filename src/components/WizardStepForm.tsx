import { useForm } from 'react-hook-form';
import { Wizard } from '../WizardModel';

type WizardFormProps = {
  wizard: Wizard;
  onFormSubmit: (formData: Wizard) => void;
  setWizard: (formData: Wizard) => void;
}

export function WizardStepForm({ wizard, setWizard, onFormSubmit}: WizardFormProps) {
  const { register, handleSubmit } = useForm<Wizard>();

  const handleWizardFormSubmit = handleSubmit((formData) => {
    setWizard(formData);
    console.log(wizard);
    onFormSubmit(wizard);
  });

  return (
    <form onSubmit={handleWizardFormSubmit}>
      <p>Second Step:</p>
      <h3>Your Wizard</h3>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name1")}/>
      </p>
      <p>
        <label htmlFor="level">Level</label>
        <input type="text" id="level"
          {...register("level", { valueAsNumber: true })}/>
      </p>
      <p>
        <label htmlFor="school">School</label>
        <select id="school"
          {...register("school")}>
            <option value="Abjuration">Abjuration</option>
            <option value="Conjuration">Conjuration</option>
            <option value="Divination">Divination</option>
            <option value="Enchantment">Enchantment</option>
            <option value="Evocation">Evocation</option>
            <option value="Illusion">Illusion</option>
            <option value="Necromancy">Necromancy</option>
          </select>
      </p>
      <p>
        <label htmlFor="alignment">Alignment</label>
        <input type="radio" id="alignment"
          {...register("alignment")}/>
      </p>
      <p>
        <button type="submit">Next</button>
      </p>
    </form>
  )
}