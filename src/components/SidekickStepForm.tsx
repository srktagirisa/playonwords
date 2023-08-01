import { useForm } from 'react-hook-form';
import { Sidekick } from '../SidekickModel';

type SidekickFormProps = {
  sidekick: Sidekick;
  onFormSubmit: (formData: Sidekick) => void;
  setSidekick: (formData: Sidekick) => void;
}

export function SidekickStepForm({ sidekick, setSidekick, onFormSubmit}: SidekickFormProps) {
    const { register, handleSubmit } = useForm<Sidekick>();
  
    const handleSidekickFormSubmit = handleSubmit((formData) => {
      setSidekick(formData);
      console.log(sidekick);
      onFormSubmit(sidekick);
    });
    return (
      <form onSubmit={handleSidekickFormSubmit}>
        <p>Third Step:</p>
        <h3>Your Sidekick</h3>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name")}/>
        </p>
        <p>
          <label htmlFor="skill">Skill</label>
          <input type="text" id="skill"
            {...register("skill")}/>
        </p>
        <p>
          <button type="submit">Finish</button>
        </p>
      </form>
    );
  }