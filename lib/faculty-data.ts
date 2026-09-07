export type FacultySection = 'Overview' | 'My Classes' | 'Students' | 'Gradebook' | 'Schedule' | 'Curriculum' | 'Announcements' | 'Help & Support'

export const faculty = { name: 'Dr. Elena Ramos', title: 'Associate Professor', id: 'FAC-0047', department: 'School of Business & Agriculture', email: 'elena.ramos@cdl.edu.ph', office: 'Faculty Room 2, Main Building', avatar: '/images/cdl-logo.jpg' }

export const facultyProfiles = [
  { name: 'Dr. Elena Ramos', title: 'Associate Professor', department: 'Business & Agriculture', credentials: 'PhD in Agricultural Economics', email: 'elena.ramos@cdl.edu.ph', office: 'Faculty Room 2', initials: 'ER' },
  { name: 'Prof. Miguel Dela Cruz', title: 'Program Head', department: 'Entrepreneurship', credentials: 'MBA, Certified Business Educator', email: 'miguel.delacruz@cdl.edu.ph', office: 'Faculty Room 1', initials: 'MD' },
  { name: 'Prof. Ana Villanueva', title: 'Assistant Professor', department: 'General Education', credentials: 'MA in Communication', email: 'ana.villanueva@cdl.edu.ph', office: 'Faculty Room 3', initials: 'AV' },
  { name: 'Prof. Carlo Mendoza', title: 'Assistant Professor', department: 'General Education', credentials: 'MS in Mathematics Education', email: 'carlo.mendoza@cdl.edu.ph', office: 'Faculty Room 3', initials: 'CM' },
  { name: 'Prof. Liza Bautista', title: 'Instructor', department: 'Tourism Management', credentials: 'MA in Hospitality Management', email: 'liza.bautista@cdl.edu.ph', office: 'Faculty Room 4', initials: 'LB' },
  { name: 'Prof. Jose Lim', title: 'Instructor', department: 'Technical-Vocational Education', credentials: 'MEd in Technology Education', email: 'jose.lim@cdl.edu.ph', office: 'Workshop Building', initials: 'JL' },
]

export const facultyClasses = [
  { code: 'AGRI 101', name: 'Introduction to Agricultural Business', schedule: 'Mon & Thu · 8:00 AM', room: 'Room 204', students: 32, pending: 8 },
  { code: 'AGRI 202', name: 'Farm Enterprise Management', schedule: 'Tue & Fri · 1:00 PM', room: 'Room 204', students: 28, pending: 0 },
  { code: 'RESEARCH 01', name: 'Research Methods', schedule: 'Wed · 10:00 AM', room: 'Room 302', students: 24, pending: 12 },
]

export const roster = [
  { name: 'Maria Clara Santos', id: '2026-00142', program: 'BS Agricultural Business', attendance: '96%', grade: '1.75' },
  { name: 'Juan Miguel Reyes', id: '2026-00118', program: 'BS Agricultural Business', attendance: '92%', grade: '2.00' },
  { name: 'Sofia Beatriz Cruz', id: '2026-00167', program: 'BS Agricultural Business', attendance: '100%', grade: '1.25' },
  { name: 'Paolo Andres Garcia', id: '2026-00102', program: 'BS Agricultural Business', attendance: '88%', grade: '2.25' },
]

export const facultySchedule = [
  { day: 'Monday', date: '09', items: [{ time: '8:00 – 9:30 AM', code: 'AGRI 101', room: 'Room 204' }, { time: '2:00 – 4:00 PM', code: 'Office Hours', room: 'Faculty Room 2' }] },
  { day: 'Tuesday', date: '10', items: [{ time: '1:00 – 2:30 PM', code: 'AGRI 202', room: 'Room 204' }] },
  { day: 'Wednesday', date: '11', items: [{ time: '10:00 – 11:30 AM', code: 'RESEARCH 01', room: 'Room 302' }, { time: '3:00 – 4:00 PM', code: 'Department Meeting', room: 'Conference Room' }] },
  { day: 'Thursday', date: '12', items: [{ time: '8:00 – 9:30 AM', code: 'AGRI 101', room: 'Room 204' }] },
  { day: 'Friday', date: '13', items: [{ time: '1:00 – 2:30 PM', code: 'AGRI 202', room: 'Room 204' }, { time: '2:30 – 4:00 PM', code: 'Research Work', room: 'Faculty Room 2' }] },
]

export const facultyAnnouncements = [
  { date: 'SEP 05', title: 'Grade submission deadline moved to September 19', tag: 'Academic Affairs' },
  { date: 'SEP 03', title: 'Faculty development workshop: Outcomes-based teaching', tag: 'Faculty Office' },
  { date: 'AUG 28', title: 'College Foundation Day faculty assignments', tag: 'Administration' },
]

export const facultyNavItems: { label: FacultySection; icon: string }[] = [
  { label: 'Overview', icon: 'LayoutDashboard' }, { label: 'My Classes', icon: 'BookOpen' }, { label: 'Students', icon: 'Users' }, { label: 'Gradebook', icon: 'ClipboardCheck' }, { label: 'Schedule', icon: 'CalendarDays' }, { label: 'Curriculum', icon: 'FileText' }, { label: 'Announcements', icon: 'Megaphone' }, { label: 'Help & Support', icon: 'CircleHelp' },
]

export const departments = ['All Departments', 'Business & Agriculture', 'Entrepreneurship', 'General Education', 'Tourism Management', 'Technical-Vocational Education']

export const portalStats = [{ label: 'Active Classes', value: '3', note: 'This semester' }, { label: 'Total Students', value: '84', note: 'Across all sections' }, { label: 'Pending Grades', value: '20', note: 'Needs your attention' }, { label: 'Office Hours', value: '4 hrs', note: 'This week' }]
