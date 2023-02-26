import { useState } from 'react';

export const useDataForm = () => {
  const [value, setValue] = useState('');
  
  return {value, setValue};
};