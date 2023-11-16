
export interface NoteSubject {
    value: number;
    percentage: number;
}
  
export interface NotePerSubject {
    notes: NoteSubject[];
    subjectId: string;
    subjectName: string;
}

export const gradesExample: NotePerSubject[] = [
  {
    notes: [
      {
        value: 5,
        percentage: 15,
      },
      {
        value: 5,
        percentage: 35,
      },
    ],
    subjectId: "123",
    subjectName: "Spanish",
  },
  {
    notes: [
      {
        value: 3.5,
        percentage: 15,
      },
      {
        value: 5,
        percentage: 35,
      },
    ],
    subjectId: "124",
    subjectName: "Math",
  },  
];

export const getFinalGrade = (notes: NoteSubject[] ) => {
  return notes.reduce((sum,note)=>{
    const {value, percentage} = note;
    
    return sum + (value * percentage );
  },0) / 100;
};