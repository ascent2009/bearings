import { lazy, Suspense } from 'react'
import OldContainer from './components/OldVersion/Container'
import Container from './components/Container'
import Spinner from './components/Spinner';

// const Container = () => lazy(() => import('./components/Container'));

function App() {
  return (
      <Suspense fallback={<Spinner />}>
        <Container/>   
      </Suspense>
    );
}

export default App; 
