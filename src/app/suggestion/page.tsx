import React from 'react';
import { Metadata } from 'next';
import SuggestedPage from "../components/suggested-page/page";
import Data from "../server-components/fetch-activities";

export const metadata: Metadata = {
    title: 'Profile',
  }

const ProfilePage: React.FC = () => {
  return (
    <div>
        <SuggestedPage Data={Data} />
    </div>
  );
}

export default ProfilePage;
