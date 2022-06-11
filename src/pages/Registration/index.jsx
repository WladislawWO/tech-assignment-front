import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import st from './styles.module.scss';
import { useRegistration } from './useRegistration';

export default function Registration() {
  const { onSubmit } = useRegistration();

  return (
    <div className={st.loginContainer}>
      <div className={st.loginForm}>
        <div className={st.title}>Registration</div>
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

        <Link to="/login">
          <div className={st.hint}>Does you have an account? Login!</div>
        </Link>
      </div>
    </div>
  );
}
