import { useForm } from 'react-hook-form';
import { UserModel } from '../UserModel';

type UserFormProps = {
    user: UserModel;
    onFormSubmit: (formData: UserModel) => void;
    setUser: (formData: UserModel) => void;
  }
  
export function UserStepForm({ user, setUser,  onFormSubmit}: UserFormProps) {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<UserModel>();

  const handleFormSubmit = handleSubmit((formData) => {
    user.email = formData.email;
    user.password = formData.password;
    setUser(formData);
    console.log(user);
    onFormSubmit(user);
    console.log(errors);
  });
  
  return (
    <form onSubmit={handleFormSubmit}>
      <h3>User Information</h3>
      <p>
        <label htmlFor="email">Email Id</label>
        <input type="email" aria-invalid={errors.email ? "true" : "false"}
         id="email" {...register("email", {
      required: "You must enter your email."
    })}/>
    {errors.email &&
    <span role="alert" className="field-errors">{errors.email.message}</span>}
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="pwd"
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password",{required: "Please choose a password.",
          minLength: { value: 8, message: "Password must be at least 8 characters." }
        })}/>
        {errors.password &&
    <span role="alert" className="field-errors">{errors.password.message}</span>}
      </p>
      <p>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input type="password" id="pwd"
          aria-invalid={errors.confirmPassword ? "true" : "false"}
          {...register("confirmPassword", {
            required: "Please type your password again here to confirm.",
            validate: (val: string) => {
              if (getValues("password") !== val) {
                return "Your passwords do not match."
              }
            }
          })}/>
          {errors.confirmPassword &&
          <span role="alert" className="field-errors">{errors.confirmPassword.message}</span>}

      </p>
      <p>
        <label htmlFor="terms">Terms</label>
        <input type="checkbox" id="terms"
          aria-invalid={errors.terms ? "true" : "false"}
          {...register("terms",{required: "You must accept the terms in order to continue."
        })}/>
          <span>I accept the terms and conditions</span>
          {errors.terms &&
          <span role="alert" className="field-errors">{errors.terms.message}</span>}

      </p>
      <p>
        <label htmlFor="newsTerms">Newsletter</label>
        <input type="checkbox" id="newsletter"
          {...register("newsletter")}/>
          <span>I would like to recieve email updates!</span>
      </p>
      <p>
        <button type="submit">Get Started</button>
      </p>
    </form>
  );
}