import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handleErrors } from '../../api/utils';
import { useAuth } from '../../contexts/auth';
import { authService } from '../../services/authService';

export const useRegistration = () => {
  const { setIsAuthorized, setUserName } = useAuth();
  const history = useHistory();
  const { mutate, isLoading } = useMutation(authService.registration, {
    onSuccess: ({ data }) => {
      if (data?.token) {
        const { name, token } = data;
        setUserName(name);
        setIsAuthorized(true);
        localStorage.setItem('token', token);
        history.push('/');
        toast.success('Registration succeed');
      }
    },
    onError: (err) => {
      handleErrors(err);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return {
    onSubmit,
    isLoading,
  };
};
