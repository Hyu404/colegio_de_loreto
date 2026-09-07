export type PortalSection = 'Overview' | 'My Academics' | 'Curriculum' | 'Grades' | 'Schedule' | 'Payments' | 'Registrar' | 'Library' | 'Help & Support'

export const student = {
  name: 'Maria Clara Santos',
  firstName: 'Maria Clara',
  id: '2026-00142',
  program: 'Bachelor of Science in Agribusiness',
  programCode: 'BSAB',
  year: '1st Year',
  email: 'maria.santos@student.cdl.edu.ph',
  avatar: '/images/cdl-logo.jpg',
}

export const academicSummary = { semester: '1st Semester, AY 2026–2027', units: 18, gpa: '1.75', standing: 'Good Academic Standing' }

export const courses = [
  { code: 'AGRI 101', name: 'Introduction to Agricultural Business', units: 3, instructor: 'Prof. Elena Ramos', room: 'Room 204' },
  { code: 'ENTR 101', name: 'Fundamentals of Entrepreneurship', units: 3, instructor: 'Prof. Miguel Dela Cruz', room: 'Room 301' },
  { code: 'GENED 01', name: 'Purposive Communication', units: 3, instructor: 'Prof. Ana Villanueva', room: 'Room 105' },
  { code: 'MATH 101', name: 'Mathematics in the Modern World', units: 3, instructor: 'Prof. Carlo Mendoza', room: 'Room 202' },
  { code: 'NSTP 01', name: 'National Service Training Program 1', units: 3, instructor: 'Prof. Jose Lim', room: 'Gymnasium' },
  { code: 'PE 101', name: 'Physical Fitness', units: 3, instructor: 'Prof. Liza Bautista', room: 'Covered Court' },
]

export const schedule = [
  { day: 'Monday', date: '09', classes: [{ time: '8:00 – 9:30 AM', code: 'AGRI 101', name: 'Introduction to Agricultural Business', room: 'Room 204' }, { time: '1:00 – 2:30 PM', code: 'MATH 101', name: 'Mathematics in the Modern World', room: 'Room 202' }] },
  { day: 'Tuesday', date: '10', classes: [{ time: '10:00 – 11:30 AM', code: 'GENED 01', name: 'Purposive Communication', room: 'Room 105' }, { time: '2:00 – 3:30 PM', code: 'ENTR 101', name: 'Fundamentals of Entrepreneurship', room: 'Room 301' }] },
  { day: 'Wednesday', date: '11', classes: [{ time: '8:00 – 9:30 AM', code: 'NSTP 01', name: 'National Service Training Program 1', room: 'Gymnasium' }] },
  { day: 'Thursday', date: '12', classes: [{ time: '10:00 – 11:30 AM', code: 'AGRI 101', name: 'Introduction to Agricultural Business', room: 'Room 204' }, { time: '1:00 – 2:30 PM', code: 'PE 101', name: 'Physical Fitness', room: 'Covered Court' }] },
  { day: 'Friday', date: '13', classes: [{ time: '2:00 – 3:30 PM', code: 'ENTR 101', name: 'Fundamentals of Entrepreneurship', room: 'Room 301' }] },
]

export const grades = [
  { code: 'AGRI 101', name: 'Introduction to Agricultural Business', units: 3, grade: '1.25', progress: 100 },
  { code: 'ENTR 101', name: 'Fundamentals of Entrepreneurship', units: 3, grade: '1.50', progress: 100 },
  { code: 'GENED 01', name: 'Purposive Communication', units: 3, grade: '1.75', progress: 100 },
  { code: 'MATH 101', name: 'Mathematics in the Modern World', units: 3, grade: '1.50', progress: 100 },
  { code: 'PE 101', name: 'Physical Fitness', units: 2, grade: '1.00', progress: 100 },
]

export const announcements = [
  { title: 'Midterm Examination Schedule Released', date: 'SEP 08', tag: 'Academic' },
  { title: 'Library Extended Hours During Exam Week', date: 'SEP 05', tag: 'Campus Services' },
  { title: 'Student Council Leadership Assembly', date: 'SEP 01', tag: 'Student Life' },
]

export const payments = [
  { label: 'Downpayment & Matriculation', due: 'Aug 15, 2026', amount: '₱5,000.00', status: 'Paid' },
  { label: '1st Prelim Installment', due: 'Sep 20, 2026', amount: '₱4,500.00', status: 'Pending' },
  { label: 'Midterm Installment', due: 'Oct 25, 2026', amount: '₱4,500.00', status: 'Upcoming' },
  { label: 'Finals Installment', due: 'Nov 30, 2026', amount: '₱4,450.00', status: 'Upcoming' },
]

export const registrarRequests = [
  { type: 'Certificate of Enrollment', ref: 'REQ-2026-089', date: 'Aug 28, 2026', status: 'Completed' },
  { type: 'Transcript of Records (Informal)', ref: 'REQ-2026-104', date: 'Sep 02, 2026', status: 'Processing' },
]

export const libraryItems = [
  { title: 'Principles of Agricultural Economics (5th Ed.)', author: 'Andrew Barkley', status: 'Available', type: 'Book', due: 'Sep 20, 2026' },
  { title: 'Journal of Agribusiness & Applied Economics', author: 'CDL Academic Press', status: 'Digital Copy', type: 'E-Journal', due: 'Oct 05, 2026' },
]

export const navItems = [
  { label: 'Overview', icon: 'LayoutDashboard' },
  { label: 'My Academics', icon: 'BookOpen' },
  { label: 'Curriculum', icon: 'FileText' },
  { label: 'Grades', icon: 'ChartNoAxesColumnIncreasing' },
  { label: 'Schedule', icon: 'CalendarDays' },
  { label: 'Payments', icon: 'CreditCard' },
  { label: 'Registrar', icon: 'FileText' },
  { label: 'Library', icon: 'Library' },
  { label: 'Help & Support', icon: 'CircleHelp' },
]
