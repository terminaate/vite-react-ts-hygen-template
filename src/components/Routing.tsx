import React, {lazy, Suspense} from 'react';
import Loader from '@/components/Loader';
import {Route, Routes, useLocation} from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';

const HomePage = lazy(() => import('@/pages/HomePage'));

const Routing = () => {
    const location = useLocation();

    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader/>}>
                <Routes location={location} key={location.key}>
                    <Route path={'/'} element={<HomePage/>}/>
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
};

export default Routing;
