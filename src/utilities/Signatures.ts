import { SchedulePerDay } from "./Schedule";

export interface SignatureToSuscribe{
  name: string,
  availableSchedules: SchedulePerDay[][];
}

export interface ClasifiedSignatures {
  [key: string]: SignatureToSuscribe[];
}

export const getSortedSignatures = (signatures: SignatureToSuscribe[]) => {
  const clasifiedSignatures: ClasifiedSignatures = {};
  signatures.forEach(signature => {
    const firstLetter = signature.name[0].toUpperCase();
    if(!clasifiedSignatures[firstLetter]){
      clasifiedSignatures[firstLetter] = [];
    }
    
    clasifiedSignatures[firstLetter].push(signature);
  });
  
  const sortedSignatures: ClasifiedSignatures = {};
  Object.keys(clasifiedSignatures).sort().forEach(key => {
    sortedSignatures[key] = clasifiedSignatures[key];
  });

  return sortedSignatures;
};

export const signaturesToSuscribeExample: SignatureToSuscribe[] = [
  {
    name: "Spanish",
    availableSchedules: [
      [
        {
          day: 1,
          from: "08:00",
          to: "10:00",
          groupId: "15"
        },
        {
          day: 3,
          from: "08:00",
          to: "10:00",
          groupId: "15"
        },
      ],
      [
        {
          day: 4,
          from: "15:00",
          to: "17:00",
          groupId: "17"
        },
      ]
    ],
  },
  {
    name: "Math",
    availableSchedules: [
      [
        {
          day: 2,
          from: "10:00",
          to: "12:00",
          groupId: "15"
        },
        {
          day: 3,
          from: "08:00",
          to: "10:00",
          groupId: "15"
        },
      ],
      [
        {
          day: 5,
          from: "15:00",
          to: "17:00",
          groupId: "17"
        },
      ]
    ],
  },
  {
    name: "Programming",
    availableSchedules: [
      [
        {
          day: 1,
          from: "16:00",
          to: "18:00",
          groupId: "15"
        },
        {
          day: 3,
          from: "16:00",
          to: "18:00",
          groupId: "15"
        },
      ],
    ],
  },
];