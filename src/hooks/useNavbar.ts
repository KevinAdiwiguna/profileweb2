'use client'
import { useState } from 'react';

export const useNavbar = (initialNavigation = 'about') => {
  const [navigation, setNavigation] = useState(initialNavigation);
  return {
    navigation,
    setNavigation,
  };
};
