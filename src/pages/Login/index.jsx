import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useLogin } from './useLogin';
import st from './styles.module.scss';

export default function Login() {
  const { onSubmit } = useLogin();

  return (
    <div className={st.loginContainer}>
      <div className={st.loginForm}>
        <div className={st.title}>Login</div>
        <Formik
          initialValues={{
            name: '',
            password: '',
          }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form className={st.form} onSubmit={handleSubmit}>
              <Field name="name" placeholder="name" />
              <Field name="password" placeholder="password" />
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>

        <Link to="/registration">
          <div className={st.hint}>Doesn't have an account? Create it!</div>
        </Link>
      </div>
    </div>
  );
}
