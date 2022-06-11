import { useCurrentUserQuery } from '../../api/hooks/useCurrentUserQuery';
import { useAuth } from '../../contexts/auth';

export const useMainLayout = () => {
  const {
    setIsLoading, setIsAuthorized, isLoading, isAuthorized, setUserName, userName,
  } = useAuth();
  useCurrentUserQuery({
    onSuccess: ({ data }) => {
      if (data) {
        setIsAuthorized(true);
        setUserName(data.name);
      }
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  return {
    userName,
    isAuthorized,
    isLoading,
  };
};
