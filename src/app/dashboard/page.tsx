'use client';
import ProtectedRoute from '../Components/ProtectedRoute';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div>
        {/* Your protected dashboard content */}
      </div>
    </ProtectedRoute>
  );
}
