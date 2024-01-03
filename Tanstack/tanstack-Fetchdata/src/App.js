import { QueryClientProvider , QueryClient } from '@tanstack/react-query';
import './App.css';
import Home from './Component/Home';

function App() {
  // define QueryClient
  const client = new QueryClient();
  return (
    <>
      {/* // QueryClient provide mai Client pass kr diya */}
      <QueryClientProvider client={client}> 
        <div>
          <Home />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
