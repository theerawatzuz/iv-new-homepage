import { useContext } from 'react';
import { ErrorContext } from 'stores/errorContext';

export const useGlobalError = () => useContext(ErrorContext);
