export const registrarRooms = ['201-Orlandez', '202-España', '203-Irisari', '204-National', '205-Dario Otaza', 'ComLab', 'Speech Lab']

export const registrarStudents = [
  { id: '2026-00142', name: 'Maria Clara Santos', program: 'BS Agricultural Business', section: 'BSAB 1A', status: 'Enrolled', credentials: 'Active' },
  { id: '2026-00143', name: 'Juan Miguel Dela Cruz', program: 'BS Entrepreneurship', section: 'BSENT 1A', status: 'Enrolled', credentials: 'Active' },
  { id: '2026-00144', name: 'Sofia Mae Villanueva', program: 'BSTM', section: 'BSTM 2A', status: 'Enrolled', credentials: 'Pending' },
]

export const registrarInstructors = [
  { id: 'FAC-001', name: 'Dr. Elena Ramos', department: 'Agribusiness', degree: 'Doctor of Philosophy', specialty: 'Agricultural Economics', loads: 4 },
  { id: 'FAC-002', name: 'Prof. Marco Villareal', department: 'Entrepreneurship', degree: 'Master of Business Administration', specialty: 'Small Business Management', loads: 3 },
  { id: 'FAC-003', name: 'Ms. Liza Orlandez', department: 'General Education', degree: 'Master of Arts in Education', specialty: 'Curriculum and Instruction', loads: 5 },
]

export const registrarSections = [
  { name: 'BSAB 1A', program: 'BS Agricultural Business', year: '1st Year', students: 28, adviser: 'Dr. Elena Ramos' },
  { name: 'BSENT 1A', program: 'BS Entrepreneurship', year: '1st Year', students: 24, adviser: 'Prof. Marco Villareal' },
  { name: 'BSTM 2A', program: 'BS Tourism Management', year: '2nd Year', students: 31, adviser: 'Ms. Liza Orlandez' },
]

export const registrarSubjects = [
  { code: 'AGRI 101', name: 'Introduction to Agricultural Business', units: 3, instructor: 'Dr. Elena Ramos', section: 'BSAB 1A', room: '201-Orlandez', schedule: 'MWF · 8:00–9:00 AM' },
  { code: 'ENTR 101', name: 'Fundamentals of Entrepreneurship', units: 3, instructor: 'Prof. Marco Villareal', section: 'BSENT 1A', room: '202-España', schedule: 'TTh · 10:00–11:30 AM' },
  { code: 'GENED 01', name: 'Purposive Communication', units: 3, instructor: 'Ms. Liza Orlandez', section: 'BSAB 1A', room: 'ComLab', schedule: 'MWF · 1:00–2:00 PM' },
]

export const registrarPrograms = ['BS Agricultural Business', 'BTVTEd', 'BS Entrepreneurship', 'Bachelor of Public Administration', 'BS Tourism Management']
