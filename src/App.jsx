import './App.css';
import { ComponentThatErrors } from './ComponentThatErrors';
import ErrorBoundary from './ErrorBoundary';// OJO class component must be
//imported without using (...)

export default function App() {
  return (
    <div className="App">
      <h1>Error Boundary Exercise</h1>
      <ErrorBoundary>
        <ComponentThatErrors />
        <ComponentThatErrors />
      </ErrorBoundary>
    </div>
  );
}
