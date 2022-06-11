import { useQuery } from 'react-query';
import { queryKeys } from '../queryKeys';
import { authService } from '../../services/authService';

export function useCurrentUserQuery(options) {
  const { isLoading, data } = useQuery(queryKeys.currentUser, authService.getCurrentUser, {
    ...options,
  });

  return {
    isLoading,
    data,
  };
}
