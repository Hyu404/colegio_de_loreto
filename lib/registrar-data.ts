export const registrarRooms = ['RM1-ORLANDEZ', 'RM2-ESPANA', 'RM3-IRISARI', 'RM4-NACIONAL', 'RM5-DARIO OTAZA', 'COMLAB 1', 'SPEECH LAB']

export const registrarStudents = [
  { id: '2026-00142', name: 'Maria Clara Santos', program: 'BS Agricultural Business', section: 'BSAB', status: 'Enrolled', credentials: 'Active' },
  { id: '2026-00143', name: 'Juan Miguel Dela Cruz', program: 'BS Entrepreneurship', section: 'BSE-1A', status: 'Enrolled', credentials: 'Active' },
  { id: '2026-00144', name: 'Sofia Mae Villanueva', program: 'BS Tourism Management', section: 'BSTM 1-A', status: 'Enrolled', credentials: 'Pending' },
  { id: '2026-00145', name: 'Ana Mae Torres', program: 'BTVTEd', section: 'BTVTED 1-A', status: 'Enrolled', credentials: 'Active' },
  { id: '2026-00146', name: 'Carlos Miguel Reyes', program: 'Bachelor of Public Administration', section: 'BPA', status: 'Enrolled', credentials: 'Active' },
]

export const registrarInstructors = [
  { id: 'FAC-LORO', name: 'Prof. Loro', department: 'General Education', degree: 'MA', specialty: 'Communication', loads: 4 },
  { id: 'FAC-LUNGAY', name: 'Prof. Lungay', department: 'General Education', degree: 'MA', specialty: 'Science & Technology', loads: 3 },
  { id: 'FAC-GEROCHE', name: 'Prof. Geroche', department: 'General Education', degree: 'MA', specialty: 'Arts & Culture', loads: 3 },
  { id: 'FAC-ACUNA', name: 'Prof. Acuña', department: 'General Education', degree: 'MA', specialty: 'Ethics / UTS', loads: 4 },
  { id: 'FAC-RAMOS', name: 'Dr. Ramos', department: 'Mathematics', degree: 'PhD', specialty: 'Mathematics', loads: 3 },
  { id: 'FAC-LAGNO', name: 'Prof. Lagno', department: 'Environmental Science', degree: 'MA', specialty: 'Environmental Science', loads: 3 },
  { id: 'FAC-MASCARINAS', name: 'Prof. Mascariñas', department: 'NSTP', degree: 'MA', specialty: 'NSTP', loads: 2 },
  { id: 'FAC-MIEL', name: 'Prof. Miel', department: 'PE', degree: 'MA', specialty: 'Physical Education', loads: 2 },
  { id: 'FAC-MAGADAN', name: 'Prof. Magadan', department: 'Computer', degree: 'MS', specialty: 'Computer Operations', loads: 2 },
  { id: 'FAC-CENTINA', name: 'Prof. Centina', department: 'History', degree: 'MA', specialty: 'Philippine History', loads: 3 },
  { id: 'FAC-GONZALES', name: 'Prof. Gonzales', department: 'General Education', degree: 'MA', specialty: 'Values / Life & Works', loads: 3 },
  { id: 'FAC-MARINO', name: 'Prof. Mariño', department: 'NSTP', degree: 'MA', specialty: 'NSTP', loads: 1 },
  { id: 'FAC-RENO', name: 'Prof. Reño', department: 'Computer', degree: 'MS', specialty: 'Computer Operations', loads: 3 },
  { id: 'FAC-ALIH', name: 'Prof. Alih', department: 'NSTP', degree: 'MA', specialty: 'NSTP', loads: 1 },
  { id: 'FAC-VILLAVER', name: 'Prof. Villaver', department: 'NSTP', degree: 'MA', specialty: 'NSTP', loads: 1 },
  { id: 'FAC-AMANTES', name: 'Prof. Amantes', department: 'NSTP', degree: 'MA', specialty: 'NSTP', loads: 1 },
  { id: 'FAC-RAMOS-E', name: 'Dr. Elena Ramos', department: 'Agribusiness', degree: 'Doctor of Philosophy', specialty: 'Agricultural Economics', loads: 1 },
]

export const registrarSections = [
  { name: 'BTVTED 1-A', program: 'BTVTEd', year: '1st Year', students: 45, adviser: 'Prof. Geroche' },
  { name: 'BPA', program: 'Bachelor of Public Administration', year: '1st Year', students: 45, adviser: 'Prof. Magadan' },
  { name: 'BSAB', program: 'BS Agricultural Business', year: '1st Year', students: 45, adviser: 'Prof. Acuña' },
  { name: 'BSE-1A', program: 'BS Entrepreneurship', year: '1st Year', students: 45, adviser: 'Prof. Lagno' },
  { name: 'BSTM 1-A', program: 'BS Tourism Management', year: '1st Year', students: 45, adviser: 'Prof. Centina' },
]

export const registrarSubjects = [
  // BTVTED 1-A — FIRST SEMESTER AY 2026-2027 (PDF p1)
  { code: 'GE-101', name: 'Purposive Communication', units: 3, instructor: 'Prof. Loro', section: 'BTVTED 1-A', room: 'RM1-ORLANDEZ', schedule: 'Mon 8:00–10:00 AM' },
  { code: 'GE-105', name: 'Science, Technology and Society', units: 3, instructor: 'Prof. Lungay', section: 'BTVTED 1-A', room: 'RM1-ORLANDEZ', schedule: 'Tue 8:00–9:00 AM' },
  { code: 'GE-107', name: 'Art Appreciation', units: 3, instructor: 'Prof. Geroche', section: 'BTVTED 1-A', room: 'RM3-IRISARI', schedule: 'Mon 9:00–10:00 AM' },
  { code: 'GE-106', name: 'Ethics', units: 3, instructor: 'Prof. Acuña', section: 'BTVTED 1-A', room: 'RM3-IRISARI', schedule: 'Tue 11:00 AM–12:00 PM' },
  { code: 'GE-103', name: 'Mathematics in the Modern World', units: 3, instructor: 'Dr. Ramos', section: 'BTVTED 1-A', room: 'RM1-ORLANDEZ', schedule: 'Tue 2:00–3:00 PM' },
  { code: 'GE-Elect 3', name: 'Environmental Science', units: 3, instructor: 'Prof. Lagno', section: 'BTVTED 1-A', room: 'RM2-ESPANA', schedule: 'Mon 8:00–9:00 AM' },
  { code: 'GE-108', name: 'The Contemporary World', units: 3, instructor: 'Prof. Geroche', section: 'BTVTED 1-A', room: 'RM3-IRISARI', schedule: 'Mon 11:00 AM–12:00 PM' },
  { code: 'NSTP 1', name: 'National Service Training Program 1 (CWTS/LTS/ROTC)', units: 3, instructor: 'Prof. Mascariñas', section: 'BTVTED 1-A', room: 'SPEECH LAB', schedule: 'Sem' },
  { code: 'PATHFIT 1', name: 'Physical Activities Toward Health and Fitness 1 (Movement Competency)', units: 2, instructor: 'Prof. Miel', section: 'BTVTED 1-A', room: 'SPEECH LAB', schedule: 'Sem' },
  // BPA — FIRST SEMESTER (PDF p2)
  { code: 'GE-101', name: 'Purposive Communication', units: 3, instructor: 'Prof. Loro', section: 'BPA', room: 'RM4-NACIONAL', schedule: 'Mon 11:00 AM–12:00 PM' },
  { code: 'GE-103', name: 'Mathematics in the Modern World', units: 3, instructor: 'Dr. Ramos', section: 'BPA', room: 'RM3-IRISARI', schedule: 'Mon 8:00–9:00 AM' },
  { code: 'IR 1', name: 'Basic Computer Operations with Laboratory', units: 3, instructor: 'Prof. Magadan', section: 'BPA', room: 'COMLAB 1', schedule: 'Mon 10:00–11:00 AM' },
  { code: 'IR 4', name: 'English for Professionals', units: 3, instructor: 'Prof. Loro', section: 'BPA', room: 'RM5-DARIO OTAZA', schedule: 'Mon 9:00–10:00 AM' },
  { code: 'GE-102', name: 'Readings in Philippine History', units: 3, instructor: 'Prof. Centina', section: 'BPA', room: 'RM4-NACIONAL', schedule: 'Tue 10:00–11:00 AM' },
  { code: 'GE-104', name: 'Understanding the Self', units: 3, instructor: 'Prof. Gonzales', section: 'BPA', room: 'RM5-DARIO OTAZA', schedule: 'Tue 10:00–11:00 AM' },
  { code: 'IR 2', name: 'Values Education', units: 3, instructor: 'Prof. Gonzales', section: 'BPA', room: 'RM2-ESPANA', schedule: 'Mon 11:00 AM–12:00 PM' },
  { code: 'NSTP 1', name: 'National Service Training Program 1', units: 3, instructor: 'Prof. Mariño', section: 'BPA', room: 'SPEECH LAB', schedule: 'Sem' },
  { code: 'PATHFIT 1', name: 'Physical Activities Toward Health and Fitness 1', units: 2, instructor: 'TBA', section: 'BPA', room: 'TBA', schedule: 'Sem' },
  // BSAB — FIRST SEMESTER (PDF p3)
  { code: 'GE-104', name: 'Understanding the Self', units: 3, instructor: 'Prof. Acuña', section: 'BSAB', room: 'RM5-DARIO OTAZA', schedule: 'Mon 8:00–9:00 AM' },
  { code: 'IR 1', name: 'Basic Computer Operations with Laboratory', units: 3, instructor: 'Prof. Reño', section: 'BSAB', room: 'COMLAB 1', schedule: 'Mon 5:00–6:00 PM' },
  { code: 'GE-109', name: 'Life and Works of Rizal', units: 3, instructor: 'Prof. Gonzales', section: 'BSAB', room: 'RM1-ORLANDEZ', schedule: 'Mon 9:00–10:00 AM' },
  { code: 'GE-108', name: 'The Contemporary World', units: 3, instructor: 'Prof. Centina', section: 'BSAB', room: 'RM1-ORLANDEZ', schedule: 'Tue 11:00 AM–12:00 PM' },
  { code: 'GE-101', name: 'Purposive Communication', units: 3, instructor: 'Prof. Loro', section: 'BSAB', room: 'RM4-NACIONAL', schedule: 'Tue 4:00–5:00 PM' },
  { code: 'GE-102', name: 'Readings in Philippine History', units: 3, instructor: 'Prof. Centina', section: 'BSAB', room: 'RM4-NACIONAL', schedule: 'Tue 1:00–2:00 PM' },
  { code: 'GE-105', name: 'Science, Technology, and Society', units: 3, instructor: 'Prof. Lungay', section: 'BSAB', room: 'RM1-ORLANDEZ', schedule: 'Tue 2:00–3:00 PM' },
  { code: 'NSTP 1', name: 'National Service Training Program 1', units: 3, instructor: 'Prof. Alih', section: 'BSAB', room: 'SPEECH LAB', schedule: 'Sem' },
  { code: 'PATHFIT 1', name: 'Physical Activities Toward Health and Fitness 1', units: 2, instructor: 'TBA', section: 'BSAB', room: 'TBA', schedule: 'Sem' },
  // BSE-1A — FIRST SEMESTER (PDF p4)
  { code: 'GE-104', name: 'Understanding the Self', units: 3, instructor: 'Prof. Acuña', section: 'BSE-1A', room: 'RM2-ESPANA', schedule: 'Mon 10:00–11:00 AM' },
  { code: 'GE-Elect 3', name: 'Environmental Science', units: 3, instructor: 'Prof. Lagno', section: 'BSE-1A', room: 'RM2-ESPANA', schedule: 'Tue 3:00–4:00 PM' },
  { code: 'GE-108', name: 'The Contemporary World', units: 3, instructor: 'Prof. Geroche', section: 'BSE-1A', room: 'RM3-IRISARI', schedule: 'Tue 10:00–11:00 AM' },
  { code: 'IR 2', name: 'Values Education', units: 3, instructor: 'Prof. Gonzales', section: 'BSE-1A', room: 'RM2-ESPANA', schedule: 'Tue 4:00–5:00 PM' },
  { code: 'GE-107', name: 'Art Appreciation', units: 3, instructor: 'Prof. Geroche', section: 'BSE-1A', room: 'RM3-IRISARI', schedule: 'Tue 4:00–5:00 PM' },
  { code: 'GE-Elect 1', name: 'Gender and Society', units: 3, instructor: 'Prof. Lagno', section: 'BSE-1A', room: 'RM3-IRISARI', schedule: 'Tue 10:00–11:00 AM' },
  { code: 'IR 1', name: 'Basic Computer Operations with Laboratory', units: 3, instructor: 'Prof. Reño / Prof. Magadan', section: 'BSE-1A', room: 'COMLAB 1', schedule: 'Tue 1:00–2:00 PM' },
  { code: 'NSTP 1', name: 'National Service Training Program 1', units: 3, instructor: 'Prof. Villaver', section: 'BSE-1A', room: 'SPEECH LAB', schedule: 'Sem' },
  { code: 'PATHFIT 1', name: 'Physical Activities Toward Health and Fitness 1', units: 2, instructor: 'Prof. Miel', section: 'BSE-1A', room: 'SPEECH LAB', schedule: 'Sem' },
  // BSTM 1-A — FIRST SEMESTER (PDF p5)
  { code: 'GE-102', name: 'Readings in Philippine History', units: 3, instructor: 'Prof. Centina', section: 'BSTM 1-A', room: 'RM4-NACIONAL', schedule: 'Tue 10:00–11:00 AM' },
  { code: 'GE-103', name: 'Mathematics in the Modern World', units: 3, instructor: 'Dr. Ramos', section: 'BSTM 1-A', room: 'RM3-IRISARI', schedule: 'Tue 8:00–9:00 AM' },
  { code: 'GE-Elect 1', name: 'Gender and Society', units: 3, instructor: 'Prof. Lagno', section: 'BSTM 1-A', room: 'RM3-IRISARI', schedule: 'Tue 10:00–11:00 AM' },
  { code: 'GE-104', name: 'Understanding the Self', units: 3, instructor: 'Prof. Acuña', section: 'BSTM 1-A', room: 'RM5-DARIO OTAZA', schedule: 'Tue 4:00–5:00 PM' },
  { code: 'GE-105', name: 'Science, Technology and Society', units: 3, instructor: 'Prof. Lungay', section: 'BSTM 1-A', room: 'RM1-ORLANDEZ', schedule: 'Tue 8:00–9:00 AM' },
  { code: 'IR 1', name: 'Basic Computer Operation with Laboratory', units: 3, instructor: 'Dr. Ramos', section: 'BSTM 1-A', room: 'COMLAB 1', schedule: 'Mon 6:00–7:00 PM' },
  { code: 'GE-Elect 2b', name: 'Philippine Indigenous Communities', units: 3, instructor: 'Prof. Lungay', section: 'BSTM 1-A', room: 'RM3-IRISARI', schedule: 'Tue 1:00–2:00 PM' },
  { code: 'NSTP 1', name: 'National Service Training Program 1', units: 3, instructor: 'Prof. Amantes', section: 'BSTM 1-A', room: 'SPEECH LAB', schedule: 'Sem' },
  { code: 'PATHFIT 1', name: 'Physical Activities Toward Health and Fitness 1', units: 2, instructor: 'Prof. Miel', section: 'BSTM 1-A', room: 'SPEECH LAB', schedule: 'Sem' },
]

export const registrarPrograms = ['BS Agricultural Business', 'BTVTEd', 'BS Entrepreneurship', 'Bachelor of Public Administration', 'BS Tourism Management']
