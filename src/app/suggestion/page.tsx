import React from 'react';
import { Metadata } from 'next';
import SuggestedPage from '../components/suggested-page/page';
import FetchComponent from '../server-components/fetch-activities';

export const metadata: Metadata = {
  title: 'Profile',
};

export default function ProfilePage(){

  return (
    <div>
      <SuggestedPage child={<FetchComponent/>}/>
    </div>
  );
};
