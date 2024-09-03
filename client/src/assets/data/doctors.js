import doctorImg01 from '../images/doctor-img01.png'
import doctorImg02 from '../images/doctor-img02.png'
import doctorImg03 from '../images/doctor-img03.png'

export const doctors = [
  {
    id: '01',
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    avgRating: 4.9,
    totalRating: 320,
    photo: doctorImg01,
    totalPatients: 1800,
    hospital: 'Cleveland Clinic, Ohio, USA',
  },
  {
    id: '02',
    name: 'Dr. Michael Roberts',
    specialization: 'Pediatrician',
    avgRating: 4.7,
    totalRating: 295,
    photo: doctorImg02,
    totalPatients: 2100,
    hospital: "Children's Hospital of Philadelphia, USA",
  },
  {
    id: '03',
    name: 'Dr. Carter',
    specialization: 'Orthopedic Surgeon',
    avgRating: 4.8,
    totalRating: 310,
    photo: doctorImg03,
    totalPatients: 1750,
    hospital: 'Mayo Clinic, Rochester, USA',
  },
]
