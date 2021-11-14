import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { LoggedOut } from '../pages/loggedOut';

function AppRouter() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<LoggedOut/>} />
        </Routes>
      </div>
  )
}

export default AppRouter;