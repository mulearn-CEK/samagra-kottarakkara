'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../../../components/desire2025/DashboardLayout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { useAuth } from '../../../context/AuthContext';
import { createStudent, uploadStudentPhoto } from '../../../utils/database';

export default function AddStudentPage() {
  const { schoolId } = useAuth();
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [className, setClassName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoFile(file);
      
      // Create a preview
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!schoolId) {
      setError('School ID not found. Please try logging in again.');
      return;
    }
    
    if (!name.trim()) {
      setError('Student name is required');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Create a temporary student ID to use for the photo upload
      const tempStudentId = crypto.randomUUID();
      
      // Upload photo if one is selected
      let photoUrl = undefined;
      if (photoFile) {
        const uploadedUrl = await uploadStudentPhoto(schoolId, tempStudentId, photoFile);
        if (!uploadedUrl) {
          setError('Failed to upload photo. Please try again.');
          setLoading(false);
          return;
        }
        photoUrl = uploadedUrl;
      }
      
      // Create the student
      const studentData = {
        school_id: schoolId,
        name: name.trim(),
        age: age ? parseInt(age, 10) : undefined,
        class: className.trim() || undefined,
        phone: phone.trim() || undefined,
        address: address.trim() || undefined,
        photo_url: photoUrl,
      };
      
      const newStudent = await createStudent(studentData);
      
      if (!newStudent) {
        setError('Failed to create student. Please try again.');
        return;
      }
      
      // Redirect to the student list page
      router.push('/desire2025/school/students');
    } catch (err) {
      console.error('Error creating student:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Add New Student</h1>
          <p className="mt-1 text-sm text-gray-500">
            Add a new student to the Desire 2025 program
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Student photo preview"
                        className="h-32 w-32 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-32 w-32 rounded-full bg-sage-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-sage-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Upload Photo
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="1"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <div>
                <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">
                  Class
                </label>
                <input
                  type="text"
                  id="class"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sage-500 focus:border-sage-500"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sage-500 focus:border-sage-500"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => router.back()}
                className="mr-3 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sage-600 hover:bg-sage-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500 ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Saving...' : 'Add Student'}
              </button>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
} 