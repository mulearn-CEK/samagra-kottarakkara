'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '../../../components/desire2025/DashboardLayout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { getSchools, getStudents, School, Student } from '../../../utils/database';

export default function AdminDashboard() {
  const [schools, setSchools] = useState<School[] | null>(null);
  const [students, setStudents] = useState<Student[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch schools and all students
        const [schoolsData, studentsData] = await Promise.all([
          getSchools(),
          getStudents(),
        ]);
        
        setSchools(schoolsData);
        setStudents(studentsData);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProtectedRoute requireAdmin>
      <DashboardLayout>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage the Desire 2025 program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Schools</h2>
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : (
              <>
                <p className="text-3xl font-bold text-sage-700">
                  {schools?.length || 0}
                </p>
                <p className="text-sm text-gray-500 mt-1">Total schools</p>
                <div className="mt-4">
                  <a
                    href="/desire2025/admin/schools"
                    className="text-sm font-medium text-sage-600 hover:text-sage-800"
                  >
                    View all schools →
                  </a>
                </div>
              </>
            )}
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Students</h2>
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : (
              <>
                <p className="text-3xl font-bold text-sage-700">
                  {students?.length || 0}
                </p>
                <p className="text-sm text-gray-500 mt-1">Total students</p>
                <div className="mt-4">
                  <a
                    href="/desire2025/admin/students"
                    className="text-sm font-medium text-sage-600 hover:text-sage-800"
                  >
                    View all students →
                  </a>
                </div>
              </>
            )}
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Tools</h2>
            <div className="space-y-2 mt-4">
              <a
                href="/desire2025/admin/check-in"
                className="block text-sm font-medium text-sage-600 hover:text-sage-800"
              >
                Student Check-in
              </a>
              <a
                href="/desire2025/admin/certificates"
                className="block text-sm font-medium text-sage-600 hover:text-sage-800"
              >
                Certificate Generation
              </a>
              <a
                href="/desire2025/admin/id-cards"
                className="block text-sm font-medium text-sage-600 hover:text-sage-800"
              >
                ID Card Generation
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Schools</h2>
          </div>
          
          {loading ? (
            <div className="p-6 text-center text-gray-500">Loading schools...</div>
          ) : error ? (
            <div className="p-6 text-center text-red-500">{error}</div>
          ) : schools && schools.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      School Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {schools.slice(0, 5).map((school) => {
                    const schoolStudents = students?.filter(s => s.school_id === school.id) || [];
                    return (
                      <tr key={school.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{school.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{school.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{schoolStudents.length}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href={`/desire2025/admin/schools/${school.id}`} className="text-sage-600 hover:text-sage-900 mr-3">
                            View
                          </a>
                          <a href={`/desire2025/admin/schools/${school.id}/edit`} className="text-sage-600 hover:text-sage-900">
                            Edit
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              No schools found. <a href="/desire2025/admin/schools/add" className="text-sage-600 hover:text-sage-900">Add a school</a>.
            </div>
          )}
          
          {schools && schools.length > 5 && (
            <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-right">
              <a href="/desire2025/admin/schools" className="text-sm font-medium text-sage-600 hover:text-sage-900">
                View all schools →
              </a>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
} 