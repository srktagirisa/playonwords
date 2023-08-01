import { UserModel } from "../UserModel";
import { useForm } from 'react-hook-form';

type UserFormProps = {
    user: UserModel;
    onFormSubmit: (formData: UserModel) => void;
    setUser: (formData: UserModel) => void;
}

export function ConfirmationStep({ user, setUser, onFormSubmit}: UserFormProps) {
    const { register, handleSubmit } = useForm<UserModel>();
    const handleFormSubmit = handleSubmit((formData) => {
        setUser(formData);
        console.log(user);
        onFormSubmit(user);
    });

    return (
    <form onSubmit={handleFormSubmit}>
        <p>Final Step:</p>
            <h3>Confirm your Registration</h3>
            <p><h4>User details</h4>
            Email: {user.email}<br/>
            Receive newsletter: {user.newsletter}
        </p>
        <p><h4>Wizard</h4>
            Name: {user.wizard ? user.wizard.name1 : ''}<br/>
            Level: {user.wizard ? user.wizard.level : ''}<br/>
            School: {user.wizard?.school}<br/>
            Alignment: {user.wizard?.alignment}
        </p>
        <p><h4>Sidekick</h4>
            Name: {user.sidekick?.name}<br/>
            Skill: {user.sidekick?.skill}
        </p>
        <p>
        <button type="submit">Confirm and Finish</button>
        </p>
    </form>
    );
}
