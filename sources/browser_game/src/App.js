import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import GameView from './components/Game/GameView';
import ResultsTable from './components/ResultsTable/ResultsTable';

function App() {
  return (
    <Routes>
      <Route path="/singleplayer" element={<GameView />} />
      <Route path="/statistic" element={<ResultsTable />} />
      <Route path="/" element={<Menu />} />
      <Route path="*" element={<Menu />} />
    </Routes>
  );
}

export default App;
