// Main.tsx
'use client';
import React, { useMemo } from 'react';
import { About } from '../organisms/About';
import { MeSection } from '../organisms/MeSection';
import { NavbarDesktop } from '../organisms/Navbar';
import { useNavbar } from '@/hooks/useNavbar';
import { Resume } from '../organisms/Resume';

export const Main = () => {
  const { navigation, setNavigation } = useNavbar();


  const renderedComponent = useMemo(() => {
    if (navigation === 'about') {
      return <About />;
    } else if (navigation === 'resume') {
      return <Resume />;
    } else {
      return 'hihihi'
    }
  }, [navigation]);

  return (
    <div className=''>
      <div className="xl:flex xl:items-start">
        <div className="xl:pt-10 xl:sticky xl:top-1">
          <MeSection />
        </div>
        <div className="mt-12 md:mx-8">
          <div className="rounded-2xl w-full h-fit bg-custom-primary">
            <NavbarDesktop navigation={navigation} setNavigation={setNavigation} />
            {renderedComponent}
          </div>
        </div>
      </div>
    </div>
  );
};
