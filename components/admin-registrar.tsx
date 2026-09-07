'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BarChart3, BookOpen, CalendarDays, Check, ClipboardList, DoorOpen, Download, FileText, GraduationCap, LayoutDashboard, LogOut, Menu, Printer, Search, Settings, ShieldCheck, Upload, Users, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { registrarInstructors, registrarPrograms, registrarRooms, registrarSections, registrarStudents, registrarSubjects } from '@/lib/registrar-data'
import { registrarCurriculums, type ProgramCurriculum } from '@/lib/curriculum-data'

type Module = 'Overview' | 'Students' | 'Instructors' | 'Subject Loads' | 'Curriculum' | 'Sections' | 'Rooms' | 'Schedules' | 'Credentials'
const modules: { label: Module; icon: typeof LayoutDashboard }[] = [{label:'Overview',icon:LayoutDashboard},{label:'Students',icon:Users},{label:'Instructors',icon:GraduationCap},{label:'Subject Loads',icon:BookOpen},{label:'Curriculum',icon:FileText},{label:'Sections',icon:ClipboardList},{label:'Rooms',icon:DoorOpen},{label:'Schedules',icon:CalendarDays},{label:'Credentials',icon:ShieldCheck}]

export function AdminRegistrar() {
  const [signedIn, setSignedIn] = useState(false); const [active, setActive] = useState<Module>('Overview'); const [mobile, setMobile] = useState(false); const [notice, setNotice] = useState(''); const [query, setQuery] = useState('')
  if (!signedIn) return <AdminLogin onSignIn={() => setSignedIn(true)} />
  const go = (m: Module) => { setActive(m); setMobile(false); setNotice('') }
  return <div className="min-h-screen bg-muted/40 text-foreground"><aside className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-navy-dark text-primary-foreground transition-transform lg:translate-x-0 ${mobile ? 'translate-x-0' : '-translate-x-full'}`}><div className="flex h-24 items-center gap-3 border-b border-primary-foreground/10 px-7"><Image src="/images/cdl-logo.jpg" alt="Colegio De Loreto seal" width={52} height={52} className="h-12 w-auto object-contain"/><div><p className="font-serif text-lg font-bold">Colegio De Loreto</p><p className="text-[10px] uppercase tracking-[.16em] text-gold">Registrar admin</p></div><button className="ml-auto lg:hidden" aria-label="Close menu" onClick={()=>setMobile(false)}><X className="h-5 w-5"/></button></div><div className="px-5 py-6"><p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-primary-foreground/45">Management</p><nav className="flex flex-col gap-1">{modules.map(({label,icon:Icon})=><button key={label} onClick={()=>go(label)} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold ${active===label?'bg-gold text-navy-dark':'text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground'}`}><Icon className="h-[18px] w-[18px]"/>{label}</button>)}</nav></div><div className="mt-auto border-t border-primary-foreground/10 p-5"><div className="mb-4 flex items-center gap-3 rounded-lg bg-primary-foreground/5 p-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold font-bold text-navy-dark">RA</div><div><p className="text-sm font-semibold">Registrar Admin</p><p className="text-xs text-primary-foreground/50">Demo account</p></div></div><div className="flex flex-col gap-1"><Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm text-primary-foreground/60 hover:text-gold"><ArrowRight className="h-4 w-4 rotate-180"/> Return to main site</Link><button onClick={()=>setSignedIn(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-primary-foreground/60 hover:text-gold"><LogOut className="h-4 w-4"/> Sign out</button></div></div></aside>{mobile&&<button className="fixed inset-0 z-40 bg-navy-dark/50 lg:hidden" aria-label="Close navigation" onClick={()=>setMobile(false)}/>}<main className="lg:pl-72"><header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-border bg-background/90 px-5 backdrop-blur md:px-8"><div className="flex items-center gap-3"><button className="rounded-lg p-2 hover:bg-muted lg:hidden" aria-label="Open menu" onClick={()=>setMobile(true)}><Menu className="h-5 w-5"/></button><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-muted-foreground">Registrar system / <span className="text-navy">{active}</span></p><h1 className="font-serif text-xl font-bold text-navy md:text-2xl">{active}</h1></div></div><div className="flex items-center gap-3"><span className="hidden rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-navy sm:block">DEMO MODE</span><div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-xs font-bold text-primary-foreground">RA</div></div></header>{notice&&<div className="mx-5 mt-5 flex items-center gap-2 rounded-lg border border-gold/40 bg-accent px-4 py-3 text-sm text-navy md:mx-8"><Check className="h-4 w-4 text-gold-dark"/>{notice}</div>}<div className="mx-auto max-w-7xl p-5 md:p-8"><View active={active} query={query} setQuery={setQuery} notify={setNotice} /></div></main></div>
}

function AdminLogin({onSignIn}:{onSignIn:()=>void}) { const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); return <main className="flex min-h-screen items-center justify-center bg-navy-dark p-5"><div className="w-full max-w-md"><div className="mb-8 text-center"><Image src="/images/cdl-logo.jpg" alt="Colegio De Loreto seal" width={92} height={92} className="mx-auto mb-5 h-24 w-auto object-contain"/><p className="mb-2 text-xs font-bold uppercase tracking-[.25em] text-gold">Registrar system</p><h1 className="font-serif text-3xl font-bold text-primary-foreground">Admin workspace.</h1><p className="mt-2 text-sm leading-6 text-primary-foreground/60">Manage the academic records and campus operations of Colegio De Loreto.</p></div><div className="rounded-2xl bg-background p-7 shadow-2xl"><form onSubmit={e=>{e.preventDefault();onSignIn()}} className="flex flex-col gap-5"><label className="flex flex-col gap-2 text-sm font-semibold text-navy">Admin email<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="registrar@colegiodeloreto.edu.ph" className="h-11 rounded-lg border border-border px-3 font-normal outline-none ring-gold focus:ring-2"/></label><label className="flex flex-col gap-2 text-sm font-semibold text-navy">Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter password" className="h-11 rounded-lg border border-border px-3 font-normal outline-none ring-gold focus:ring-2"/></label><Button type="submit" className="h-11 bg-gold font-bold text-navy-dark hover:bg-gold-dark">Sign in <ArrowRight className="h-4 w-4"/></Button></form><button onClick={onSignIn} className="mt-5 w-full rounded-lg border border-dashed border-gold/70 bg-accent py-3 text-sm font-semibold text-navy hover:bg-gold/15">Enter demo workspace</button><p className="mt-5 text-center text-xs text-muted-foreground">Demo only · No real credentials are stored</p></div><Link href="/" className="mt-6 block text-center text-sm font-semibold text-primary-foreground/70 transition-colors hover:text-gold">← Return to main site</Link></div></main> }

function View({active,query,setQuery,notify}:{active:Module;query:string;setQuery:(x:string)=>void;notify:(x:string)=>void}) {
  if(active==='Overview') return <Overview go={notify}/>;
  if(active==='Schedules') return <ScheduleView query={query}/>;
  if(active==='Curriculum') return <CurriculumView notify={notify}/>;
  const titles:Record<Module,string>={Students:'Student records',Instructors:'Instructor records','Subject Loads':'Subject loads',Curriculum:'Curriculum management',Sections:'Sections and advisers',Rooms:'Campus rooms',Schedules:'Class schedules',Credentials:'Portal credentials',Overview:''};
  return <><div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-gold-dark">Registrar management</p><h2 className="font-serif text-3xl font-bold text-navy">{titles[active]}</h2><p className="mt-2 text-sm text-muted-foreground">Maintain accurate academic and campus records.</p></div>{active!=='Rooms'&&(active==='Students'?<Link href="/admin/students/new" className="inline-flex h-10 w-fit items-center gap-2 rounded-lg bg-navy px-4 text-sm font-bold text-primary-foreground hover:bg-navy-light">Add new <ArrowRight className="h-4 w-4"/></Link>:active==='Instructors'?<Link href="/admin/instructors/new" className="inline-flex h-10 w-fit items-center gap-2 rounded-lg bg-navy px-4 text-sm font-bold text-primary-foreground hover:bg-navy-light">Add profile <ArrowRight className="h-4 w-4"/></Link>:active==='Subject Loads'?<Link href="/admin/subject-loads" className="inline-flex h-10 w-fit items-center gap-2 rounded-lg bg-navy px-4 text-sm font-bold text-primary-foreground hover:bg-navy-light">Assign loads <ArrowRight className="h-4 w-4"/></Link>:<Button onClick={()=>notify(`New ${active.toLowerCase().replace('programs & subjects','subject load')} form opened in demo mode.`)} className="w-fit bg-navy text-primary-foreground hover:bg-navy-light">Add new <ArrowRight className="h-4 w-4"/></Button>)}</div><div className="mb-5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3"><Search className="h-4 w-4 text-muted-foreground"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={`Search ${active.toLowerCase()}...`} className="w-full bg-transparent text-sm outline-none"/></div><DataView active={active} query={query}/></>
}

function Overview({go}:{go:(x:string)=>void}) { return <><div className="mb-7 rounded-2xl bg-navy p-6 text-primary-foreground md:p-8"><p className="mb-2 text-sm text-gold">Colegio De Loreto · Academic year 2026–2027</p><h2 className="font-serif text-3xl font-bold md:text-4xl">Registrar command center.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-primary-foreground/65">Manage enrollment, faculty assignments, schedules, and student portal access from one workspace.</p></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{([
    ['Students', registrarStudents.length, Users],
    ['Instructors', registrarInstructors.length, GraduationCap],
    ['Sections', registrarSections.length, ClipboardList],
    ['Rooms', registrarRooms.length, DoorOpen],
  ] as Array<[string, number, typeof Users]>).map(([label,value,Icon])=><button key={label as string} onClick={()=>go(label as string)} className="rounded-xl border border-border bg-background p-5 text-left shadow-sm transition hover:border-gold"><Icon className="h-5 w-5 text-gold-dark"/><p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label as string}</p><p className="mt-1 font-serif text-4xl font-bold text-navy">{value as number}</p></button>)}</div><div className="mt-5 grid gap-5 lg:grid-cols-2"><section className="rounded-xl border border-border bg-background p-5"><h3 className="font-serif text-lg font-bold text-navy">Quick actions</h3><div className="mt-4 grid gap-3 sm:grid-cols-2">{['Add student','Add instructor','Create schedule','Manage credentials'].map(x=><button key={x} onClick={()=>go(x.includes('student')?'Students':x.includes('instructor')?'Instructors':x.includes('schedule')?'Schedules':'Credentials')} className="rounded-lg bg-accent p-4 text-left text-sm font-bold text-navy hover:bg-gold/20">{x}<ArrowRight className="mt-2 h-4 w-4 text-gold-dark"/></button>)}</div></section><section className="rounded-xl border border-gold/40 bg-accent p-5"><h3 className="font-serif text-lg font-bold text-navy">Scheduling note</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">There are {registrarRooms.length} rooms available for assignment. Use the schedules module to review room, section, and instructor allocations.</p></section></div></> }

function DataView({active,query}:{active:Module;query:string}) { const q=query.toLowerCase(); if(active==='Students') return <DirectoryView type="students" query={q}/>; if(active==='Instructors') return <DirectoryView type="instructors" query={q}/>; if(active==='Subject Loads') return <Table title="Subject loads" headers={['Code','Subject','Instructor','Section','Room / Schedule']} rows={registrarSubjects.map(x=>[x.code,x.name,x.instructor,x.section,`${x.room} · ${x.schedule}`])}/>; if(active==='Sections') return <Table title="Active sections" headers={['Section','Program','Year level','Students','Adviser']} rows={registrarSections.map(x=>[x.name,x.program,x.year,String(x.students),x.adviser])}/>; if(active==='Rooms') return <Table title={`${registrarRooms.length} rooms available`} headers={['Room','Availability','Assigned use']} rows={registrarRooms.map((x,i)=>[x,i<5?'Available':'Specialized',i===5?'Computer laboratory':i===6?'Speech laboratory':'General classroom'])}/>; if(active==='Schedules') return <ScheduleView query={query}/>; return <Table title="Portal access" headers={['Account','Role','Linked record','Access status','Last updated']} rows={registrarStudents.map(x=>[x.id,'Student',x.name,x.credentials,'September 9, 2026'])}/> }
function DirectoryView({type,query}:{type:'students'|'instructors';query:string}) { const isStudents=type==='students'; const records=isStudents?registrarStudents:registrarInstructors; const visible=records.filter((x)=>JSON.stringify(x).toLowerCase().includes(query)); const needsAttention=isStudents?registrarStudents.filter(x=>x.credentials!=='Complete').length:registrarInstructors.filter(x=>x.loads===0).length; return <div><div className="mb-5 grid gap-3 sm:grid-cols-3"><div className="border-l-4 border-gold bg-background p-4"><p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{isStudents?'Total students':'Active instructors'}</p><p className="mt-1 font-serif text-2xl font-bold text-navy">{records.length}</p><p className="mt-1 text-xs text-muted-foreground">Current records</p></div><div className="bg-background p-4"><p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{isStudents?'Programs represented':'Departments'}</p><p className="mt-1 font-serif text-2xl font-bold text-navy">{new Set(records.map((x)=>isStudents?(x as typeof registrarStudents[number]).program:(x as typeof registrarInstructors[number]).department)).size}</p><p className="mt-1 text-xs text-muted-foreground">Across the directory</p></div><div className="bg-background p-4"><p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Needs attention</p><p className="mt-1 font-serif text-2xl font-bold text-navy">{needsAttention}</p><p className="mt-1 text-xs text-amber-700">Follow-up records</p></div></div><div className="overflow-hidden rounded-xl border border-border bg-background shadow-sm"><div className="flex items-center justify-between border-b border-border px-5 py-4"><div><h3 className="font-serif text-lg font-bold text-navy">{isStudents?'Student directory':'Instructor directory'}</h3><p className="mt-1 text-xs text-muted-foreground">{visible.length} of {records.length} records shown · Demo data</p></div><span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-navy">{isStudents?'Enrollment':'Faculty'}</span></div><div className="divide-y divide-border">{visible.map((x)=>{ const item=isStudents?(x as typeof registrarStudents[number]):(x as typeof registrarInstructors[number]); const name=item.name; const initials=name.split(' ').map((n)=>n[0]).slice(0,2).join(''); return <div key={item.id} className="flex flex-col gap-4 p-4 transition-colors hover:bg-accent/20 sm:flex-row sm:items-center sm:justify-between sm:px-5"><div className="flex min-w-0 items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-black text-navy-dark">{initials}</div><div className="min-w-0"><p className="truncate font-bold text-navy">{name}</p><p className="mt-1 truncate text-xs text-muted-foreground">{item.id} · {isStudents?(item as typeof registrarStudents[number]).program:(item as typeof registrarInstructors[number]).department}</p></div></div><div className="grid grid-cols-2 gap-4 text-sm sm:flex sm:items-center"><div><p className="text-xs text-muted-foreground">{isStudents?'Section':'Specialty'}</p><p className="mt-1 font-semibold text-navy">{isStudents?(item as typeof registrarStudents[number]).section:(item as typeof registrarInstructors[number]).specialty}</p></div><div><p className="text-xs text-muted-foreground">{isStudents?'Status':'Loads'}</p><p className={`mt-1 font-semibold ${isStudents&& (item as typeof registrarStudents[number]).credentials!=='Complete'?'text-amber-700':'text-emerald-700'}`}>{isStudents?(item as typeof registrarStudents[number]).status:`${(item as typeof registrarInstructors[number]).loads} subjects`}</p></div><Link href={isStudents?'/admin/students/new':'/admin/instructors/new'} className="col-span-2 text-xs font-bold text-navy hover:underline sm:col-span-1">View record <ArrowRight className="ml-1 inline h-3 w-3"/></Link></div></div>})}{visible.length===0&&<div className="p-10 text-center"><p className="font-bold text-navy">No records found</p><p className="mt-1 text-sm text-muted-foreground">Try a different search term.</p></div>}</div></div></div> }

function ScheduleView({query}:{query:string}) {
  const [term, setTerm] = useState('Term 1');
  const [search, setSearch] = useState(query);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // Synced from CDL-Room-Assignment-Workload-Distribution.pdf — AY 2026-2027 FIRST SEMESTER
  // Rooms: RM1-ORLANDEZ | RM2-ESPANA | RM3-IRISARI | RM4-NACIONAL | RM5-DARIO OTAZA | COMLAB 1 | SPEECH LAB — Class size 45
  const slots = [
    // 8:00 AM – 9:00 AM — Monday (A-sections, per PDF grid p6)
    { day: 'Monday', time: '8:00 AM – 9:00 AM', subject: 'GE-105', name: 'Science, Tech and Society', instructor: 'Prof. Lungay', section: 'BTVTED 1-A', room: 'RM1-ORLANDEZ' },
    { day: 'Monday', time: '8:00 AM – 9:00 AM', subject: 'GE-Elect 3', name: 'Environmental Science', instructor: 'Prof. Lagno', section: 'BSE-1A', room: 'RM2-ESPANA' },
    { day: 'Monday', time: '8:00 AM – 9:00 AM', subject: 'GE-103', name: 'Mathematics in the Modern World', instructor: 'Dr. Ramos', section: 'BPA', room: 'RM4-NACIONAL' },
    { day: 'Monday', time: '8:00 AM – 9:00 AM', subject: 'GE-104', name: 'Understanding the Self', instructor: 'Prof. Acuña', section: 'BSAB', room: 'RM5-DARIO OTAZA' },
    // 9:00 AM – 10:00 AM
    { day: 'Monday', time: '9:00 AM – 10:00 AM', subject: 'GE-109', name: 'Life and Works of Rizal', instructor: 'Prof. Gonzales', section: 'BSAB', room: 'RM1-ORLANDEZ' },
    { day: 'Monday', time: '9:00 AM – 10:00 AM', subject: 'GE-103', name: 'Mathematics in the Modern World', instructor: 'Dr. Ramos', section: 'BSTM 1-A', room: 'RM2-ESPANA' },
    { day: 'Monday', time: '9:00 AM – 10:00 AM', subject: 'GE-107', name: 'Art Appreciation', instructor: 'Prof. Geroche', section: 'BTVTED 1-A', room: 'RM3-IRISARI' },
    { day: 'Monday', time: '9:00 AM – 10:00 AM', subject: 'IR 4', name: 'English for Professionals', instructor: 'Prof. Loro', section: 'BPA', room: 'RM5-DARIO OTAZA' },
    // 10:00 AM – 11:00 AM
    { day: 'Tuesday', time: '10:00 AM – 11:00 AM', subject: 'GE-102', name: 'Readings in Philippine History', instructor: 'Prof. Centina', section: 'BSTM 1-A', room: 'RM1-ORLANDEZ' },
    { day: 'Tuesday', time: '10:00 AM – 11:00 AM', subject: 'GE-108', name: 'The Contemporary World', instructor: 'Prof. Geroche', section: 'BSE-1A', room: 'RM2-ESPANA' },
    { day: 'Tuesday', time: '10:00 AM – 11:00 AM', subject: 'GE-Elect 1', name: 'Gender and Society', instructor: 'Prof. Lagno', section: 'BSTM 1-A', room: 'RM3-IRISARI' },
    { day: 'Tuesday', time: '10:00 AM – 11:00 AM', subject: 'GE-104', name: 'Understanding the Self', instructor: 'Prof. Acuña', section: 'BSE-1A', room: 'RM4-NACIONAL' },
    { day: 'Tuesday', time: '10:00 AM – 11:00 AM', subject: 'GE-101', name: 'Purposive Communication', instructor: 'Prof. Loro', section: 'BTVTED 1-A', room: 'RM5-DARIO OTAZA' },
    { day: 'Tuesday', time: '10:00 AM – 11:00 AM', subject: 'IR 1', name: 'Basic Computer Operations with Laboratory', instructor: 'Prof. Magadan', section: 'BPA', room: 'COMLAB 1' },
    // 11:00 AM – 12:00 PM
    { day: 'Tuesday', time: '11:00 AM – 12:00 PM', subject: 'GE-108', name: 'The Contemporary World', instructor: 'Prof. Centina', section: 'BSAB', room: 'RM1-ORLANDEZ' },
    { day: 'Tuesday', time: '11:00 AM – 12:00 PM', subject: 'GE-101', name: 'Purposive Communication', instructor: 'Prof. Loro', section: 'BPA', room: 'RM2-ESPANA' },
    { day: 'Tuesday', time: '11:00 AM – 12:00 PM', subject: 'IR 2', name: 'Values Education', instructor: 'Prof. Gonzales', section: 'BSE-1A', room: 'RM3-IRISARI' },
    { day: 'Tuesday', time: '11:00 AM – 12:00 PM', subject: 'GE-106', name: 'Ethics', instructor: 'Prof. Acuña', section: 'BTVTED 1-A', room: 'RM4-NACIONAL' },
    // 1:00 PM – 2:00 PM (B-sections)
    { day: 'Wednesday', time: '1:00 PM – 2:00 PM', subject: 'GE-102', name: 'Readings in Philippine History', instructor: 'Prof. Centina', section: 'BSTM 1-A', room: 'RM1-ORLANDEZ' },
    { day: 'Wednesday', time: '1:00 PM – 2:00 PM', subject: 'GE-Elect 1', name: 'Gender and Society', instructor: 'Prof. Lagno', section: 'BSTM 1-A', room: 'RM2-ESPANA' },
    { day: 'Wednesday', time: '1:00 PM – 2:00 PM', subject: 'GE-103', name: 'Mathematics in the Modern World', instructor: 'Dr. Ramos', section: 'BPA', room: 'RM3-IRISARI' },
    { day: 'Wednesday', time: '1:00 PM – 2:00 PM', subject: 'GE-106', name: 'Ethics', instructor: 'Prof. Acuña', section: 'BTVTED 1-A', room: 'RM4-NACIONAL' },
    { day: 'Wednesday', time: '1:00 PM – 2:00 PM', subject: 'IR 1', name: 'Basic Computer Operations with Laboratory', instructor: 'Prof. Magadan', section: 'BPA', room: 'COMLAB 1' },
    { day: 'Wednesday', time: '1:00 PM – 2:00 PM', subject: 'IR 4', name: 'English for Professionals', instructor: 'Prof. Loro', section: 'BPA', room: 'RM5-DARIO OTAZA' },
    // 2:00 PM – 3:00 PM
    { day: 'Wednesday', time: '2:00 PM – 3:00 PM', subject: 'GE-105', name: 'Science, Technology and Society', instructor: 'Prof. Lungay', section: 'BTVTED 1-A', room: 'RM1-ORLANDEZ' },
    { day: 'Wednesday', time: '2:00 PM – 3:00 PM', subject: 'GE-103', name: 'Mathematics in the Modern World', instructor: 'Dr. Ramos', section: 'BSTM 1-A', room: 'RM2-ESPANA' },
    { day: 'Wednesday', time: '2:00 PM – 3:00 PM', subject: 'GE-104', name: 'Understanding the Self', instructor: 'Prof. Acuña', section: 'BSE-1A', room: 'RM3-IRISARI' },
    { day: 'Wednesday', time: '2:00 PM – 3:00 PM', subject: 'GE-108', name: 'The Contemporary World', instructor: 'Prof. Centina', section: 'BSAB', room: 'RM4-NACIONAL' },
    // 3:00 PM – 4:00 PM
    { day: 'Thursday', time: '3:00 PM – 4:00 PM', subject: 'GE-104', name: 'Understanding the Self', instructor: 'Prof. Acuña', section: 'BSAB', room: 'RM1-ORLANDEZ' },
    { day: 'Thursday', time: '3:00 PM – 4:00 PM', subject: 'GE-108', name: 'The Contemporary World', instructor: 'Prof. Geroche', section: 'BSE-1A', room: 'RM2-ESPANA' },
    { day: 'Thursday', time: '3:00 PM – 4:00 PM', subject: 'GE-Elect 3', name: 'Environmental Science', instructor: 'Prof. Lagno', section: 'BSE-1A', room: 'RM3-IRISARI' },
    { day: 'Thursday', time: '3:00 PM – 4:00 PM', subject: 'GE-109', name: 'Life and Works of Rizal', instructor: 'Prof. Gonzales', section: 'BSAB', room: 'RM4-NACIONAL' },
    { day: 'Thursday', time: '3:00 PM – 4:00 PM', subject: 'GE-101', name: 'Purposive Communication', instructor: 'Prof. Loro', section: 'BTVTED 1-A', room: 'RM5-DARIO OTAZA' },
    // 4:00 PM – 5:00 PM
    { day: 'Thursday', time: '4:00 PM – 5:00 PM', subject: 'GE-101', name: 'Purposive Communication', instructor: 'Prof. Loro', section: 'BPA', room: 'RM1-ORLANDEZ' },
    { day: 'Thursday', time: '4:00 PM – 5:00 PM', subject: 'GE-107', name: 'Art Appreciation', instructor: 'Prof. Geroche', section: 'BTVTED 1-A', room: 'RM2-ESPANA' },
    { day: 'Thursday', time: '4:00 PM – 5:00 PM', subject: 'IR 2', name: 'Values Education', instructor: 'Prof. Gonzales', section: 'BSE-1A', room: 'RM3-IRISARI' },
    // 5:00 PM – 6:00 PM — Computer Lab per PDF
    { day: 'Friday', time: '5:00 PM – 6:00 PM', subject: 'IR 1', name: 'Basic Computer Operations with Laboratory', instructor: 'Prof. Reño', section: 'BSAB', room: 'COMLAB 1' },
    { day: 'Friday', time: '6:00 PM – 7:00 PM', subject: 'IR 1', name: 'Basic Computer Operations with Laboratory', instructor: 'Prof. Reño', section: 'BSAB', room: 'COMLAB 1' },
  ].filter(x => `${x.subject}${x.name}${x.instructor}${x.section}${x.room}`.toLowerCase().includes(search.toLowerCase()));

  const timeRows = [
    { key: 't1', label: '8:00 AM – 9:00 AM' },
    { key: 't2', label: '9:00 AM – 10:00 AM' },
    { key: 't3', label: '10:00 AM – 11:00 AM' },
    { key: 't4', label: '11:00 AM – 12:00 PM' },
    { key: 'noon', label: '12:00 PM – 1:00 PM', isBreak: true },
    { key: 't5', label: '1:00 PM – 2:00 PM' },
    { key: 't6', label: '2:00 PM – 3:00 PM' },
    { key: 't7', label: '3:00 PM – 4:00 PM' },
    { key: 't8', label: '4:00 PM – 5:00 PM' },
    { key: 't9', label: '5:00 PM – 6:00 PM' },
    { key: 't10', label: '6:00 PM – 7:00 PM' },
    { key: 't11', label: '7:00 PM – 8:00 PM' },
  ];

  return (
    <div className="schedule-print space-y-3">
      {/* Formal Header - Print Mode Only */}
      <div className="hidden print:flex items-center justify-between border-b-2 border-navy pb-2">
        <div className="flex items-center gap-3">
          <Image src="/images/cdl-logo.jpg" alt="Colegio De Loreto Seal" width={56} height={56} className="h-14 w-auto object-contain" />
          <div>
            <h1 className="font-serif text-lg font-bold uppercase tracking-wide text-navy">COLEGIO DE LORETO</h1>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">Loreto, Agusan del Sur · Office of the Registrar</p>
            <p className="text-[9px] font-bold text-gold-dark">Scientia ad Excellentiam</p>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-block rounded border border-navy/30 bg-accent px-2 py-0.5 text-[9px] font-bold text-navy uppercase tracking-wider">Weekly Class Timetable</span>
          <p className="mt-0.5 text-[10px] font-bold text-navy">AY 2026–2027 · 1st Semester · {term}</p>
          <p className="text-[8px] text-slate-500">Printed: September 3, 2026</p>
        </div>
      </div>

      {/* Screen Control Bar — theme-abiding, referencing codebase Table/Curriculum styles */}
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-background p-3.5 shadow-sm print:hidden sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <h2 className="font-serif text-xl font-bold text-navy">Weekly Timetable</h2>
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-navy">AY 2026–2027</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-3.5 w-3.5 text-muted-foreground" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search schedule..."
              className="h-8 w-44 rounded-md border border-border bg-background pl-8 pr-3 text-xs outline-none focus:ring-1 focus:ring-gold sm:w-56"
            />
          </div>

          <div className="flex rounded-md border border-border bg-muted/40 p-0.5">
            <button
              onClick={() => setTerm('Term 1')}
              className={`rounded px-2.5 py-1 text-xs font-bold transition ${term === 'Term 1' ? 'bg-gold text-navy-dark shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Term 1
            </button>
            <button
              onClick={() => setTerm('Term 2')}
              className={`rounded px-2.5 py-1 text-xs font-bold transition ${term === 'Term 2' ? 'bg-gold text-navy-dark shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Term 2
            </button>
          </div>

          <Button onClick={() => window.print()} className="h-8 gap-1.5 bg-navy px-3 text-xs font-bold text-primary-foreground hover:bg-navy-light">
            <Printer className="h-3.5 w-3.5" /> Print
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-background shadow-sm print:rounded-none print:border-navy print:shadow-none">
        <div className="grid min-w-[800px] grid-cols-[115px_repeat(5,1fr)] print:min-w-0 print:grid-cols-[100px_repeat(5,1fr)]">
          {/* Header Row — theme */}
          <div className="border-b border-r border-border bg-muted/60 p-2 text-xs font-bold uppercase tracking-wider text-muted-foreground print:p-1 print:text-[9px] print:border-navy print:bg-slate-100">
            Time Slot
          </div>
          {days.map(day => (
            <div key={day} className="border-b border-border bg-navy p-2 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground print:p-1 print:text-[9px] print:border-navy">
              {day}
            </div>
          ))}

          {/* Time Slot Rows — theme-abiding (gold/navy accents) compact, referencing codebase */}
          {timeRows.map(row => {
            if (row.isBreak) {
              return (
                <Fragment key={row.key}>
                  <div className="border-b border-r border-border bg-amber-500/15 p-1.5 text-center text-[11px] font-bold text-amber-900 print:p-0.5 print:text-[8px] print:border-navy">
                    12:00–1:00 PM
                  </div>
                  <div className="col-span-5 flex items-center justify-center border-b border-border bg-amber-500/15 py-1.5 text-[10px] font-bold tracking-widest text-amber-900 uppercase print:py-0.5 print:text-[8px] print:border-navy">
                    ☀️ Noon Break (12:00 PM – 1:00 PM)
                  </div>
                </Fragment>
              );
            }

            return (
              <Fragment key={row.key}>
                <div className="flex flex-col justify-center border-b border-r border-border bg-muted/20 px-2 py-1 text-xs font-semibold text-muted-foreground print:px-1 print:py-0.5 print:text-[8px] print:border-navy">
                  <span className="font-bold text-navy print:text-[8px]">{row.label}</span>
                </div>

                {days.map(day => {
                  const match = slots.find(s => s.day === day && s.time === row.label);
                  return (
                    <div key={`${day}-${row.key}`} className="min-h-[44px] border-b border-border p-1 print:min-h-[25px] print:p-0.5 print:border-navy">
                      {match && (
                        <div className="h-full rounded border border-gold/60 bg-accent/70 p-1.5 transition-all hover:border-gold print:rounded-none print:border-navy/40 print:bg-white print:p-0.5">
                          <div className="flex items-center justify-between gap-1">
                            <span className="rounded bg-navy px-1 py-0.5 text-[9px] font-black text-white print:bg-navy print:text-white print:text-[7px]">{match.subject}</span>
                            <span className="text-[9px] font-bold text-navy-light print:text-[7px]">{match.room}</span>
                          </div>
                          <p className="mt-0.5 text-[11px] font-bold leading-tight text-navy truncate print:text-[8px] print:mt-0">{match.name}</p>
                          <p className="text-[10px] text-muted-foreground truncate print:text-[7px] print:text-slate-700">{match.instructor} · <span className="font-semibold text-navy">{match.section}</span></p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="hidden print:flex justify-between items-end mt-3 pt-2 border-t border-navy/30">
        <div>
          <p className="text-[8px] font-bold uppercase tracking-wider text-slate-500 mb-3">PREPARED BY:</p>
          <div className="w-36 border-b border-slate-900"></div>
          <p className="font-bold text-navy mt-0.5 text-[9px]">College Registrar Assistant</p>
        </div>
        <div>
          <p className="text-[8px] font-bold uppercase tracking-wider text-slate-500 mb-3">RECOMMENDING APPROVAL:</p>
          <div className="w-36 border-b border-slate-900"></div>
          <p className="font-bold text-navy mt-0.5 text-[9px]">Head of Academic Affairs</p>
        </div>
        <div>
          <p className="text-[8px] font-bold uppercase tracking-wider text-slate-500 mb-4">APPROVED BY:</p>
          <div className="w-36 border-b border-slate-900"></div>
          <p className="font-bold text-navy mt-0.5 text-[9px]">College President / Registrar</p>
        </div>
      </div>
    </div>
  );
}
function CurriculumView({notify}:{notify:(x:string)=>void}) {
  const [curriculums, setCurriculums] = useState<ProgramCurriculum[]>(() => registrarCurriculums);
  const [selectedCode, setSelectedCode] = useState('BSAB');
  const [yearFilter, setYearFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);
  const [showAddProgram, setShowAddProgram] = useState(false);
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [newProgram, setNewProgram] = useState({ code: '', title: '', cmo: '', schoolYear: '2026–2027', totalUnits: 150 });
  const [newSubject, setNewSubject] = useState({ code: '', description: '', lec: 3, lab: 0, totalUnits: 3, prerequisite: 'None', term: '1st', yearLevel: 'First Year', semester: 'First Semester' });

  const prog = curriculums.find(c => c.code === selectedCode) || curriculums[0];

  const filteredSemesters = prog.semesters.map(sem => {
    if (yearFilter !== 'All' && !sem.yearLevel.toLowerCase().includes(yearFilter.toLowerCase())) {
      return null;
    }
    const filteredSubs = sem.subjects.filter(s =>
      `${s.code} ${s.description} ${s.prerequisite}`.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSubs.length === 0 && searchQuery) return null;
    return { ...sem, subjects: filteredSubs };
  }).filter(Boolean);

  const handleSimulateUpload = () => {
    setUploadNotice(`Official PDF Curriculum for ${prog.code} uploaded & published!`);
    notify(`PDF Curriculum uploaded for ${prog.code}. Students and instructors can now view it.`);
  };

  const handleDownload = () => {
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${prog.code} - ${prog.title}</title><style>@page{size:A4 portrait;margin:14mm 12mm}body{font-family:Arial,sans-serif;color:#111;font-size:10pt;line-height:1.45;margin:0;padding:20px}h1{font-size:16pt;text-align:center;margin:0 0 4px;font-weight:700;text-transform:uppercase} .sub{font-size:8pt;text-align:center;color:#555;margin-bottom:12px} table{width:100%;border-collapse:collapse} th,td{border:0.5pt solid #9ca3af;padding:4px 6px;font-size:8.5pt} th{background:#f3f4f6;text-transform:uppercase;font-size:7.5pt} .sem{font-weight:700;margin-top:14px;font-size:9pt} .logo{display:block;margin:0 auto 10px;height:56px}</style></head><body><div style="text-align:center"><img class="logo" src="/images/cdl-logo.jpg" alt="Colegio De Loreto seal" style="height:56px" /><div style="font-size:8pt;letter-spacing:.18em;text-transform:uppercase;color:#555">Colegio De Loreto · Loreto, Agusan del Sur · Office of the Registrar</div></div><h1>${prog.title}</h1><div class="sub">${prog.code} · ${prog.cmo} · AY ${prog.schoolYear} · ${prog.totalUnits} Units — Scientia ad Excellentiam</div>${prog.semesters.map(sem => `<div class="sem">${sem.yearLevel} · ${sem.semester}</div><table><thead><tr><th>Code</th><th>Description</th><th>Lec</th><th>Lab</th><th>Units</th><th>Prerequisite</th></tr></thead><tbody>${sem.subjects.map(s => `<tr><td><strong>${s.code}</strong></td><td>${s.description}</td><td style="text-align:center">${s.lec}</td><td style="text-align:center">${s.lab}</td><td style="text-align:center"><strong>${s.totalUnits}</strong></td><td>${s.prerequisite}</td></tr>`).join('')}</tbody></table>`).join('')}<div style="margin-top:18px;text-align:center;font-size:7pt;color:#666;border-top:0.5pt solid #ccc;padding-top:8px">Scientia ad Excellentiam · Office of the Registrar</div></body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = prog.docxFileName.replace('.docx', '.html'); document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    notify(`Downloaded ${prog.code} — portrait minimalist file with logo.`);
  };

  const handleAddProgram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProgram.code || !newProgram.title) { notify('Program code and title are required.'); return; }
    const codeUpper = newProgram.code.trim().toUpperCase();
    if (curriculums.some(c => c.code === codeUpper)) { notify(`Program ${codeUpper} already exists.`); return; }
    const newEntry: ProgramCurriculum = {
      id: codeUpper.toLowerCase(),
      code: codeUpper,
      title: newProgram.title.trim().toUpperCase(),
      cmo: newProgram.cmo || `School Year ${newProgram.schoolYear}`,
      schoolYear: newProgram.schoolYear,
      totalUnits: Number(newProgram.totalUnits) || 0,
      docxFileName: `${codeUpper}.docx`,
      semesters: [
        { yearLevel: 'First Year', semester: 'First Semester', subjects: [] },
        { yearLevel: 'First Year', semester: 'Second Semester', subjects: [] },
      ],
    };
    setCurriculums(prev => [...prev, newEntry]);
    setSelectedCode(codeUpper);
    setShowAddProgram(false);
    setNewProgram({ code: '', title: '', cmo: '', schoolYear: '2026–2027', totalUnits: 150 });
    notify(`Curriculum ${codeUpper} created and is now editable.`);
  };

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubject.code || !newSubject.description) { notify('Subject code and description required.'); return; }
    setCurriculums(prev => prev.map(c => {
      if (c.code !== selectedCode) return c;
      const targetYear = newSubject.yearLevel;
      const targetSem = newSubject.semester;
      let semesters = [...c.semesters];
      let semIdx = semesters.findIndex(s => s.yearLevel === targetYear && s.semester === targetSem);
      if (semIdx === -1) {
        semesters.push({ yearLevel: targetYear, semester: targetSem, subjects: [] });
        semIdx = semesters.length - 1;
      }
      const updatedSubjects = [...semesters[semIdx].subjects, {
        code: newSubject.code.trim(),
        term: newSubject.term,
        description: newSubject.description.trim(),
        lec: Number(newSubject.lec),
        lab: Number(newSubject.lab),
        totalUnits: Number(newSubject.totalUnits),
        prerequisite: newSubject.prerequisite || 'None',
      }];
      semesters[semIdx] = { ...semesters[semIdx], subjects: updatedSubjects };
      return { ...c, semesters };
    }));
    setShowAddSubject(false);
    setNewSubject({ code: '', description: '', lec: 3, lab: 0, totalUnits: 3, prerequisite: 'None', term: '1st', yearLevel: 'First Year', semester: 'First Semester' });
    notify(`Subject ${newSubject.code} added to ${selectedCode} · ${newSubject.yearLevel} · ${newSubject.semester}`);
  };

  if (!prog) return <div className="rounded-xl border border-border bg-background p-6 text-sm text-muted-foreground">No curriculums found. Create one below.</div>;

  return (
    <div className="curriculum-print space-y-4 print:space-y-3">
      {/* Minimalist portrait print header � logo + program title as file heading */}
      <div className="hidden print:block text-center border-b border-slate-300 pb-3 mb-2">
        <div className="flex flex-col items-center">
          <Image src="/images/cdl-logo.jpg" alt="Colegio De Loreto seal" width={48} height={48} className="h-12 w-auto object-contain mb-2" />
          <p className="text-[8pt] uppercase tracking-[0.18em] text-slate-500">Colegio De Loreto � Loreto, Agusan del Sur � Office of the Registrar</p>
          <h1 className="font-serif text-[14pt] font-bold uppercase tracking-wide text-black mt-1">{prog.title}</h1>
          <p className="text-[7.5pt] text-slate-600 mt-1">{prog.code} � {prog.cmo} � AY {prog.schoolYear} � {prog.totalUnits} Units</p>
        </div>
      </div>
      {/* Screen minimalist header � program is the heading, no redundant 'Curriculum' label */}
      <div className="print:hidden flex flex-col gap-4 rounded-xl border border-border bg-background p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-dark">{prog.code} � Admin</p>
          <h1 className="font-serif text-2xl font-bold uppercase tracking-wide text-navy mt-1">{prog.title}</h1>
          <p className="mt-1 text-xs text-muted-foreground">{prog.cmo} � AY {prog.schoolYear} � {prog.totalUnits} Units � {curriculums.length} programs</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedCode}
            onChange={e => setSelectedCode(e.target.value)}
            className="h-9 rounded-lg border border-border bg-background px-3 text-sm font-bold text-navy outline-none focus:ring-2 focus:ring-gold"
          >
            {curriculums.map(c => (
              <option key={c.code} value={c.code}>{c.code} � {c.title}</option>
            ))}
          </select>

          <Button onClick={handleSimulateUpload} className="h-8 gap-2 bg-navy px-3 text-xs font-bold text-primary-foreground hover:bg-navy-light">
            <Upload className="h-3.5 w-3.5" /> Upload PDF
          </Button>



          <Button variant="outline" onClick={handleDownload} className="h-8 gap-2 border-navy text-navy text-xs">
            <Download className="h-3.5 w-3.5" /> Download
          </Button>

          <Button onClick={() => window.print()} variant="outline" className="h-8 gap-2 border-navy text-navy text-xs">
            <Printer className="h-3.5 w-3.5" /> Print
          </Button>
        </div>
      </div>

      {/* Admin input controls */}
      <div className="flex flex-wrap gap-2 print:hidden">
        <Button onClick={() => setShowAddProgram(v => !v)} variant={showAddProgram ? 'secondary' : 'outline'} className="gap-2 border-navy text-navy">{showAddProgram ? <X className="h-4 w-4" /> : <FileText className="h-4 w-4" />} {showAddProgram ? 'Cancel' : 'Add new curriculum'}</Button>
        <Button onClick={() => setShowAddSubject(v => !v)} variant={showAddSubject ? 'secondary' : 'outline'} className="gap-2 border-navy text-navy">{showAddSubject ? <X className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />} {showAddSubject ? 'Cancel' : 'Add subject to current'}</Button>
      </div>

      {showAddProgram && (
        <form onSubmit={handleAddProgram} className="rounded-xl border border-gold/50 bg-accent/40 p-5 print:hidden">
          <h3 className="font-serif text-lg font-bold text-navy">Create new program curriculum</h3>
          <p className="mt-1 text-xs text-muted-foreground">Admin-only: input full program details. New curriculum will be visible to faculty (view-all) and to students enrolled in that program.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs font-bold text-navy">Program code*<input value={newProgram.code} onChange={e => setNewProgram({ ...newProgram, code: e.target.value })} placeholder="e.g. BSIT" className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none focus:ring-2 focus:ring-gold" required /></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy">School year<input value={newProgram.schoolYear} onChange={e => setNewProgram({ ...newProgram, schoolYear: e.target.value })} className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none focus:ring-2 focus:ring-gold" /></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy sm:col-span-2">Program title*<input value={newProgram.title} onChange={e => setNewProgram({ ...newProgram, title: e.target.value })} placeholder="e.g. BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY" className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none focus:ring-2 focus:ring-gold" required /></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy sm:col-span-2">CMO / Description<input value={newProgram.cmo} onChange={e => setNewProgram({ ...newProgram, cmo: e.target.value })} placeholder="e.g. CMO No. 25, Series of 2015" className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none focus:ring-2 focus:ring-gold" /></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy">Total units<input type="number" value={newProgram.totalUnits} onChange={e => setNewProgram({ ...newProgram, totalUnits: Number(e.target.value) })} className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none focus:ring-2 focus:ring-gold" /></label>
          </div>
          <div className="mt-4 flex justify-end gap-2"><Button type="button" variant="outline" onClick={() => setShowAddProgram(false)} className="border-border">Cancel</Button><Button type="submit" className="bg-navy text-primary-foreground hover:bg-navy-light">Create curriculum</Button></div>
        </form>
      )}

      {showAddSubject && (
        <form onSubmit={handleAddSubject} className="rounded-xl border border-navy/20 bg-background p-5 shadow-sm print:hidden">
          <h3 className="font-serif text-lg font-bold text-navy">Add subject to {prog.code}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className="flex flex-col gap-1 text-xs font-bold text-navy">Year level<select value={newSubject.yearLevel} onChange={e => setNewSubject({ ...newSubject, yearLevel: e.target.value })} className="h-10 rounded-lg border border-border bg-background px-3 text-sm">{['First Year','Second Year','Third Year','Fourth Year'].map(y => <option key={y}>{y}</option>)}</select></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy">Semester<select value={newSubject.semester} onChange={e => setNewSubject({ ...newSubject, semester: e.target.value })} className="h-10 rounded-lg border border-border bg-background px-3 text-sm"><option>First Semester</option><option>Second Semester</option></select></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy">Term<select value={newSubject.term} onChange={e => setNewSubject({ ...newSubject, term: e.target.value })} className="h-10 rounded-lg border border-border bg-background px-3 text-sm"><option>1st</option><option>2nd</option><option>Sem</option></select></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy">Subject code*<input value={newSubject.code} onChange={e => setNewSubject({ ...newSubject, code: e.target.value })} placeholder="e.g. IT 101" className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none focus:ring-2 focus:ring-gold" required /></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy sm:col-span-2">Description*<input value={newSubject.description} onChange={e => setNewSubject({ ...newSubject, description: e.target.value })} placeholder="e.g. Introduction to Computing" className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none focus:ring-2 focus:ring-gold" required /></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy">Lec<input type="number" value={newSubject.lec} onChange={e => setNewSubject({ ...newSubject, lec: Number(e.target.value) })} className="h-10 rounded-lg border border-border bg-background px-3 text-sm" /></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy">Lab<input type="number" value={newSubject.lab} onChange={e => setNewSubject({ ...newSubject, lab: Number(e.target.value) })} className="h-10 rounded-lg border border-border bg-background px-3 text-sm" /></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy">Total units<input type="number" value={newSubject.totalUnits} onChange={e => setNewSubject({ ...newSubject, totalUnits: Number(e.target.value) })} className="h-10 rounded-lg border border-border bg-background px-3 text-sm" /></label>
            <label className="flex flex-col gap-1 text-xs font-bold text-navy lg:col-span-3">Prerequisite<input value={newSubject.prerequisite} onChange={e => setNewSubject({ ...newSubject, prerequisite: e.target.value })} placeholder="e.g. None or IT 101" className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none focus:ring-2 focus:ring-gold" /></label>
          </div>
          <div className="mt-4 flex justify-end gap-2"><Button type="button" variant="outline" onClick={() => setShowAddSubject(false)} className="border-border">Cancel</Button><Button type="submit" className="bg-gold text-navy-dark hover:bg-gold-dark">Add subject</Button></div>
        </form>
      )}

      {uploadNotice && (
        <div className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-50 p-4 text-sm font-bold text-emerald-800">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-emerald-600" />
            <span>{uploadNotice}</span>
          </div>
          <span className="text-xs font-semibold uppercase text-emerald-700 bg-emerald-200/60 px-2 py-1 rounded">Live to Portal</span>
        </div>
      )}

      {/* Filters bar — hidden in print, minimal portrait keeps only tables */}
      <div className="print:hidden flex flex-col gap-3 rounded-xl border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Year Filter:</span>
          {['All', 'First', 'Second', 'Third', 'Fourth'].map(yr => (
            <button
              key={yr}
              onClick={() => setYearFilter(yr)}
              className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${yearFilter === yr ? 'bg-gold text-navy-dark shadow-sm' : 'bg-muted/40 text-muted-foreground hover:text-foreground'}`}
            >
              {yr === 'All' ? 'All Years' : `${yr} Year`}
            </button>
          ))}
        </div>

        <div className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search subjects or codes..."
            className="h-9 w-60 rounded-md border border-border bg-background pl-9 pr-3 text-xs outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
      </div>

      {/* Curriculum Breakdown Tables — portrait minimalist */}
      <div className="space-y-5 print:space-y-3">
        {filteredSemesters.map((sem, sIdx) => sem && (
          <div key={sIdx} className="overflow-hidden rounded-xl border border-border bg-background shadow-sm print:rounded-none print:shadow-none print:break-inside-avoid print:border-slate-300">
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3.5 print:bg-slate-100 print:py-2">
              <h3 className="font-serif text-base font-bold text-navy print:text-black print:text-[9pt]">{sem.yearLevel} · {sem.semester}</h3>
              <span className="text-xs font-semibold text-muted-foreground print:text-[7.5pt]">{sem.subjects.length} subjects</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/20 text-muted-foreground uppercase tracking-wider font-bold">
                  <tr>
                    <th className="px-5 py-3">Code</th>
                    <th className="px-5 py-3">Term</th>
                    <th className="px-5 py-3">Course Description</th>
                    <th className="px-3 py-3 text-center">Lec</th>
                    <th className="px-3 py-3 text-center">Lab</th>
                    <th className="px-3 py-3 text-center">Total</th>
                    <th className="px-5 py-3">Pre-Requisite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sem.subjects.map((sub, idx) => (
                    <tr key={idx} className="hover:bg-accent/30 transition-colors">
                      <td className="px-5 py-3 font-bold text-navy">{sub.code}</td>
                      <td className="px-5 py-3 font-semibold text-gold-dark">{sub.term || '—'}</td>
                      <td className="px-5 py-3 font-medium text-foreground">{sub.description}</td>
                      <td className="px-3 py-3 text-center text-muted-foreground">{sub.lec}</td>
                      <td className="px-3 py-3 text-center text-muted-foreground">{sub.lab}</td>
                      <td className="px-3 py-3 text-center font-bold text-navy">{sub.totalUnits}</td>
                      <td className="px-5 py-3 text-muted-foreground">{sub.prerequisite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Table({title,headers,rows}:{title:string;headers:string[];rows:string[][]}) { return <section className="overflow-hidden rounded-xl border border-border bg-background shadow-sm"><div className="border-b border-border px-5 py-4"><h3 className="font-serif text-lg font-bold text-navy">{title}</h3><p className="mt-1 text-xs text-muted-foreground">{rows.length} records shown · Demo data</p></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground"><tr>{headers.map(h=><th key={h} className="px-5 py-3 font-bold">{h}</th>)}</tr></thead><tbody className="divide-y divide-border">{rows.map((row,i)=><tr key={i} className="hover:bg-accent/30">{row.map((cell,j)=><td key={j} className={`px-5 py-4 ${j===0?'font-bold text-navy':'text-muted-foreground'}`}>{cell}</td>)}</tr>)}</tbody></table></div></section> }