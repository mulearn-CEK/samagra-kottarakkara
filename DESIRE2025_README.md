# Desire 2025 - Student Registration Program

This is a comprehensive system for managing student registrations across 30 schools, built on top of the Samagra Kottarakkara website using Next.js, React, and Supabase.

## Features

- Authentication system with email/password login
- Two user types: school administrators and system admin
- Role-based access control
- School-specific dashboards
- Student registration with photo upload
- Certificate and ID card generation
- Check-in system for events with QR code support

## Setup Instructions

### 1. Supabase Setup

1. Create a new project at [Supabase](https://supabase.com)
2. Set up the database schema by running the SQL in `supabase/schema.sql`
3. Create storage buckets:
   - `students` - For student photos
   - `certificates` - For certificate templates
   - `id_cards` - For ID card templates
4. Set up email/password auth in the Authentication settings

### 2. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Creating Admin User

1. Sign up a user through the application
2. In the Supabase dashboard, go to Authentication > Users
3. Find the user and edit their metadata to add: `{"role": "admin"}`

### 6. Creating School Admin Users

As the admin user:

1. Add schools in the admin dashboard
2. Create users with email and password
3. Assign each user to a school by setting their metadata: `{"school_id": "school_uuid"}`

## Directory Structure

- `/src/app/desire2025` - Main application code
  - `/admin` - Admin dashboard and features
  - `/school` - School dashboard and features
  - `/login` - Authentication pages
- `/src/app/utils` - Utility functions
  - `supabase.ts` - Supabase client and auth functions
  - `database.ts` - Database interaction functions
- `/src/app/components/desire2025` - Shared UI components

## Technologies Used

- Next.js 14+
- React 19
- TypeScript
- Supabase (Authentication, Database, Storage)
- TailwindCSS
- QR Code generation and scanning

## Security Considerations

- Row Level Security (RLS) is implemented on all tables
- School users can only access their own students
- Admin can access all data
- File uploads are secured with proper permissions 