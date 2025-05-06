import { supabase } from './supabase';
import { v4 as uuidv4 } from 'uuid';

// Types for our database entities
export interface School {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

export interface Student {
  id: string;
  school_id: string;
  name: string;
  age?: number;
  class?: string;
  phone?: string;
  address?: string;
  photo_url?: string;
  created_at: string;
}

export interface Certificate {
  id: string;
  name: string;
  template_url: string;
  created_at: string;
}

export interface IdCard {
  id: string;
  name: string;
  template_url: string;
  created_at: string;
}

export interface CheckIn {
  id: string;
  student_id: string;
  event_id: string;
  event_date: string;
  checked_in: boolean;
  checked_in_at?: string;
  created_at: string;
}

export interface Event {
  id: string;
  name: string;
  description?: string;
  date: string;
  created_at: string;
}

// School functions
export const getSchools = async (): Promise<School[] | null> => {
  const { data, error } = await supabase
    .from('schools')
    .select('*')
    .order('name');
  
  if (error) {
    console.error('Error fetching schools:', error);
    return null;
  }
  
  return data;
};

export const getSchoolById = async (id: string): Promise<School | null> => {
  const { data, error } = await supabase
    .from('schools')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching school:', error);
    return null;
  }
  
  return data;
};

export const createSchool = async (school: Omit<School, 'id' | 'created_at'>): Promise<School | null> => {
  const { data, error } = await supabase
    .from('schools')
    .insert([school])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating school:', error);
    return null;
  }
  
  return data;
};

export const updateSchool = async (id: string, updates: Partial<School>): Promise<School | null> => {
  const { data, error } = await supabase
    .from('schools')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating school:', error);
    return null;
  }
  
  return data;
};

export const deleteSchool = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('schools')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting school:', error);
    return false;
  }
  
  return true;
};

// Student functions
export const getStudents = async (schoolId?: string): Promise<Student[] | null> => {
  let query = supabase.from('students').select('*').order('name');
  
  if (schoolId) {
    query = query.eq('school_id', schoolId);
  }
  
  const { data, error } = await query;
  
  if (error) {
    console.error('Error fetching students:', error);
    return null;
  }
  
  return data;
};

export const getStudentById = async (id: string): Promise<Student | null> => {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching student:', error);
    return null;
  }
  
  return data;
};

export const createStudent = async (student: Omit<Student, 'id' | 'created_at'>): Promise<Student | null> => {
  const { data, error } = await supabase
    .from('students')
    .insert([student])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating student:', error);
    return null;
  }
  
  return data;
};

export const updateStudent = async (id: string, updates: Partial<Student>): Promise<Student | null> => {
  const { data, error } = await supabase
    .from('students')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating student:', error);
    return null;
  }
  
  return data;
};

export const deleteStudent = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('students')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting student:', error);
    return false;
  }
  
  return true;
};

// Certificate functions
export const getCertificates = async (): Promise<Certificate[] | null> => {
  const { data, error } = await supabase
    .from('certificates')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching certificates:', error);
    return null;
  }
  
  return data;
};

export const createCertificate = async (certificate: Omit<Certificate, 'id' | 'created_at'>): Promise<Certificate | null> => {
  const { data, error } = await supabase
    .from('certificates')
    .insert([certificate])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating certificate:', error);
    return null;
  }
  
  return data;
};

export const deleteCertificate = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('certificates')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting certificate:', error);
    return false;
  }
  
  return true;
};

// ID Card functions
export const getIdCards = async (): Promise<IdCard[] | null> => {
  const { data, error } = await supabase
    .from('id_cards')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching ID cards:', error);
    return null;
  }
  
  return data;
};

export const createIdCard = async (idCard: Omit<IdCard, 'id' | 'created_at'>): Promise<IdCard | null> => {
  const { data, error } = await supabase
    .from('id_cards')
    .insert([idCard])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating ID card:', error);
    return null;
  }
  
  return data;
};

export const deleteIdCard = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('id_cards')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting ID card:', error);
    return false;
  }
  
  return true;
};

// Check-in functions
export const getCheckIns = async (eventId: string): Promise<CheckIn[] | null> => {
  const { data, error } = await supabase
    .from('check_ins')
    .select('*, students(*)')
    .eq('event_id', eventId)
    .order('checked_in_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching check-ins:', error);
    return null;
  }
  
  return data;
};

export const checkInStudent = async (studentId: string, eventId: string): Promise<CheckIn | null> => {
  const checkInData = {
    student_id: studentId,
    event_id: eventId,
    event_date: new Date().toISOString().split('T')[0],
    checked_in: true,
    checked_in_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from('check_ins')
    .insert([checkInData])
    .select()
    .single();
  
  if (error) {
    console.error('Error checking in student:', error);
    return null;
  }
  
  return data;
};

// File storage functions
export const uploadStudentPhoto = async (schoolId: string, studentId: string, file: File): Promise<string | null> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${schoolId}/${studentId}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('students')
    .upload(filePath, file, { upsert: true });

  if (uploadError) {
    console.error('Error uploading student photo:', uploadError);
    return null;
  }

  const { data } = supabase.storage.from('students').getPublicUrl(filePath);
  return data.publicUrl;
};

export const uploadTemplate = async (bucketName: 'certificates' | 'id_cards', file: File): Promise<string | null> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const filePath = fileName;

  const { error: uploadError } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file, { upsert: true });

  if (uploadError) {
    console.error(`Error uploading ${bucketName} template:`, uploadError);
    return null;
  }

  const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
  return data.publicUrl;
}; 