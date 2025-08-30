/**
 * Custom hook for managing bilingual language state
 * Provides language toggle functionality for Spanish/English CV content
 * 
 * @returns {Object} Language state and toggle function
 * - language: Current language ('es' | 'en')
 * - toggleLanguage: Function to switch between languages
 */

import { useState } from 'react';

export type Language = 'es' | 'en';

export const useLanguage = () => {
  // Initialize with Spanish as default language
  const [language, setLanguage] = useState<Language>('es');

  /**
   * Toggle between Spanish and English
   */
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return {
    language,
    toggleLanguage
  };
};