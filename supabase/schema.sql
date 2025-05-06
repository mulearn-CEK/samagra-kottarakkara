-- Create schemas
CREATE SCHEMA IF NOT EXISTS auth;
CREATE SCHEMA IF NOT EXISTS public;
CREATE SCHEMA IF NOT EXISTS storage;

-- Create schools table
CREATE TABLE public.schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create students table
CREATE TABLE public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  age INTEGER,
  class TEXT,
  phone TEXT,
  address TEXT,
  photo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create certificates table (templates)
CREATE TABLE public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  template_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create id_cards table (templates)
CREATE TABLE public.id_cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  template_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create check_ins table
CREATE TABLE public.check_ins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  event_id TEXT NOT NULL,
  event_date DATE NOT NULL,
  checked_in BOOLEAN DEFAULT false,
  checked_in_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create events table
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.id_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.check_ins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Create policy for schools
-- Admin can view all schools
CREATE POLICY admin_view_schools ON public.schools
  FOR SELECT TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- Admin can insert schools
CREATE POLICY admin_insert_schools ON public.schools
  FOR INSERT TO authenticated
  WITH CHECK (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- Admin can update schools
CREATE POLICY admin_update_schools ON public.schools
  FOR UPDATE TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- Admin can delete schools
CREATE POLICY admin_delete_schools ON public.schools
  FOR DELETE TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- Create policy for students
-- Admin can view all students
CREATE POLICY admin_view_students ON public.students
  FOR SELECT TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- School users can view only their students
CREATE POLICY school_view_students ON public.students
  FOR SELECT TO authenticated
  USING (school_id::text = auth.jwt() -> 'user_metadata' ->> 'school_id');

-- Admin can insert students
CREATE POLICY admin_insert_students ON public.students
  FOR INSERT TO authenticated
  WITH CHECK (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- School users can insert only their students
CREATE POLICY school_insert_students ON public.students
  FOR INSERT TO authenticated
  WITH CHECK (school_id::text = auth.jwt() -> 'user_metadata' ->> 'school_id');

-- Admin can update students
CREATE POLICY admin_update_students ON public.students
  FOR UPDATE TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- School users can update only their students
CREATE POLICY school_update_students ON public.students
  FOR UPDATE TO authenticated
  USING (school_id::text = auth.jwt() -> 'user_metadata' ->> 'school_id');

-- Admin can delete students
CREATE POLICY admin_delete_students ON public.students
  FOR DELETE TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- School users can delete only their students
CREATE POLICY school_delete_students ON public.students
  FOR DELETE TO authenticated
  USING (school_id::text = auth.jwt() -> 'user_metadata' ->> 'school_id');

-- Create policy for certificates and ID cards (admin only)
-- Only admin can view, insert, update, delete certificates
CREATE POLICY admin_manage_certificates ON public.certificates
  FOR ALL TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- Only admin can view, insert, update, delete ID cards
CREATE POLICY admin_manage_id_cards ON public.id_cards
  FOR ALL TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- Create policy for check-ins
-- Admin can view all check-ins
CREATE POLICY admin_view_check_ins ON public.check_ins
  FOR SELECT TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- School users can view check-ins for their students
CREATE POLICY school_view_check_ins ON public.check_ins
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.students
    WHERE students.id = check_ins.student_id
    AND students.school_id::text = auth.jwt() -> 'user_metadata' ->> 'school_id'
  ));

-- Admin can manage all check-ins
CREATE POLICY admin_manage_check_ins ON public.check_ins
  FOR ALL TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- School users can manage check-ins for their students
CREATE POLICY school_manage_check_ins ON public.check_ins
  FOR INSERT TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.students
    WHERE students.id = check_ins.student_id
    AND students.school_id::text = auth.jwt() -> 'user_metadata' ->> 'school_id'
  ));

-- Storage policies
-- Enable everyone to read public files
CREATE POLICY allow_public_read ON storage.objects
  FOR SELECT TO authenticated, anon
  USING (bucket_id = 'public');

-- Enable authenticated users to upload to specific folders
CREATE POLICY allow_authenticated_uploads ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'certificates' OR
    bucket_id = 'id_cards' OR
    bucket_id = 'students'
  );

-- Enable admins to manage all files
CREATE POLICY allow_admin_all ON storage.objects
  FOR ALL TO authenticated
  USING (auth.jwt() -> 'user_metadata' ->> 'role' = 'admin');

-- Enable schools to manage their own student photos
CREATE POLICY allow_school_student_photos ON storage.objects
  FOR ALL TO authenticated
  USING (
    bucket_id = 'students' AND
    (storage.foldername(name))[1] = auth.jwt() -> 'user_metadata' ->> 'school_id'
  ); 