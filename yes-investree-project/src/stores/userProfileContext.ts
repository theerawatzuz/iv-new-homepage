'use client';

import { createContext } from 'react';

export type UserProfileType = {
  displayName: string;
  pictureUrl: string;
  session: string;
  consented?: boolean | null;
  uuid?: string;
  gclid?: string;
};

export const UserProfileContext = createContext({
  profile: {
    displayName: '',
    pictureUrl: '',
    session: '',
    consented: null,
    utm: null,
    uuid: '',
    gclid: '',
  },
  setProfile: (profile: any) => {},
});
