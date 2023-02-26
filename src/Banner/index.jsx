import React, { Suspense } from 'react';
const Profile = React.lazy(() => import('../Profile'));
import { DataProvider } from '../Contexts/DataContext';
import { loadProfile } from '../../server/dal/api';
import './styles.css';
import { Skeleton } from '../UI';
import { CoffeeIcon } from '../UI/Icons';

export const Banner = () => {
  return (
    <div className="banner-wrapper">
      <CoffeeIcon className="banner-icon" />
      <div className="banner-title">Bulldog Coffee</div>
      <DataProvider data={loadProfile()}>
        <Suspense
          fallback={
            <span className="avatar profile-avatar" style={{ marginRight: 30 }}>
              <Skeleton circle width={50} height={50} />
            </span>
          }
        >
          <Profile />
        </Suspense>
      </DataProvider>
    </div>
  );
};
