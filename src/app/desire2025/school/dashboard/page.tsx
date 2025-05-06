'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '../../../components/desire2025/DashboardLayout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { useAuth } from '../../../context/AuthContext';
import { getStudents, Student } from '../../../utils/database';

export default function SchoolDashboard() {
  const { schoolId } = useAuth();
  const [students, setStudents] = useState<Student[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      if (!schoolId) return;
      
      try {
        const studentsData = await getStudents(schoolId);
        setStudents(studentsData);
      } catch (err) {
        console.error('Error fetching students:', err);
        setError('Failed to load students');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [schoolId]);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">School Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your students for the Desire 2025 program
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-sage-50 p-4 rounded-lg border border-sage-200">
              <p className="text-sm font-medium text-sage-600">Total Students</p>
              <p className="text-2xl font-bold text-sage-800">
                {loading ? '...' : students?.length || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Students</h2>
          </div>
          
          {loading ? (
            <div className="p-6 text-center text-gray-500">Loading students...</div>
          ) : error ? (
            <div className="p-6 text-center text-red-500">{error}</div>
          ) : students && students.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Class
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Age
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.slice(0, 5).map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {student.photo_url ? (
                            <img
                              className="h-10 w-10 rounded-full mr-3 object-cover"
                              src={student.photo_url}
                              alt={student.name}
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full mr-3 bg-sage-200 flex items-center justify-center">
                              <span className="text-sage-600 font-medium">
                                {student.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div>
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.class || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.age || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.phone || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href={`/desire2025/school/students/${student.id}`} className="text-sage-600 hover:text-sage-900 mr-3">
                          View
                        </a>
                        <a href={`/desire2025/school/students/${student.id}/edit`} className="text-sage-600 hover:text-sage-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              No students found. <a href="/desire2025/school/add-student" className="text-sage-600 hover:text-sage-900">Add your first student</a>.
            </div>
          )}
          
          {students && students.length > 5 && (
            <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-right">
              <a href="/desire2025/school/students" className="text-sm font-medium text-sage-600 hover:text-sage-900">
                View all students →
              </a>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
} 