import React, { lazy, Suspense } from 'react';

const LazyCardDetails = lazy(() => import('./CardDetails'));

const CardDetails = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCardDetails {...props} />
  </Suspense>
);

export default CardDetails;
