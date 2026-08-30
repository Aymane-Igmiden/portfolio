import 'animate.css';
import { Suspense, lazy } from "react";
import { Oval } from 'react-loader-spinner'

import NavBar from './NavBar';
import Footer from './Footer';

const LazyProfile = lazy(() => import('./Profile'));
const LazyProjects = lazy(() => import('./Projects'));
const LazyWork = lazy(() => import('./Work'));
const LazyBanner = lazy(() => import('./Banner'));

export const Home = () => {
    return (
        <div className="main">
            <NavBar />
            <Suspense fallback={
                <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#B8B8B8"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass="spinner"
                />
            }>
                <LazyBanner />
                <LazyWork />
                <LazyProjects />
                <LazyProfile />
            </Suspense>
            <Footer />
        </div>
    )
}
