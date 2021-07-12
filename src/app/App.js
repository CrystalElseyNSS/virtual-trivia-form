import { QuizForm } from '../components/QuizForm';
import { DataProvider } from '../providers/DataProvider';
import './App.css';

export const App = () => {
  return (
    <>
      <DataProvider>
        <QuizForm />
      </DataProvider>
    </>
  );
}