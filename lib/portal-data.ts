export type PortalSection = 'Overview' | 'My Academics' | 'Grades' | 'Schedule' | 'Payments' | 'Registrar' | 'Library' | 'Help & Support'

export const student = {
  name: 'Maria Clara Santos',
  firstName: 'Maria Clara',
  id: '2026-00142',
  program: 'Bachelor of Science in Agricultural Business',
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
  { code: 'GENED 01', name: 'Purposive Communication', grade: '1.50', progress: 92 },
  { code: 'AGRI 101', name: 'Introduction to Agricultural Business', grade: '1.75', progress: 88 },
  { code: 'ENTR 101', name: 'Fundamentals of Entrepreneurship', grade: '1.75', progress: 86 },
  { code: 'MATH 101', name: 'Mathematics in the Modern World', grade: '2.00', progress: 82 },
]

export const announcements = [
  { date: 'SEP 05', title: 'Enrollment validation period is now open', tag: 'Registrar' },
  { date: 'SEP 03', title: 'Library orientation for first-year students', tag: 'Library' },
  { date: 'AUG 28', title: 'College Foundation Day activities', tag: 'Student Affairs' },
]

export const payments = [
  { label: 'Tuition & miscellaneous fees', amount: '₱18,450.00', status: 'Balance due', due: 'September 20, 2026' },
  { label: 'Student organization fee', amount: '₱250.00', status: 'Paid', due: 'August 30, 2026' },
]

export const registrarRequests = [
  { type: 'Certificate of Enrollment', date: 'Sep 02, 2026', status: 'Processing', ref: 'REG-2609021' },
  { type: 'Student ID replacement', date: 'Aug 26, 2026', status: 'Ready for pickup', ref: 'REG-2608264' },
]

export const libraryItems = [
  { title: 'Agricultural Economics and Agribusiness', author: 'John Penson', due: 'Sep 18, 2026', type: 'Book' },
  { title: 'Entrepreneurship: Successfully Launching New Ventures', author: 'Bruce Barringer', due: 'Sep 22, 2026', type: 'E-book' },
]

export const navItems: { label: PortalSection; icon: string }[] = [
  { label: 'Overview', icon: 'LayoutDashboard' }, { label: 'My Academics', icon: 'BookOpen' }, { label: 'Grades', icon: 'ChartNoAxesColumnIncreasing' }, { label: 'Schedule', icon: 'CalendarDays' }, { label: 'Payments', icon: 'CreditCard' }, { label: 'Registrar', icon: 'FileText' }, { label: 'Library', icon: 'Library' }, { label: 'Help & Support', icon: 'CircleHelp' },
]
