

import { atom } from 'jotai';


export const responseAtom = atom({
});

export const scenarioAtom = atom({
});

export const dashboardDataAtom = atom([
    {
      title: "CSPM Executive Dashboard",
      cards: [
        {
          id: 1,
          title: "Cloud Accounts",
          items: "hello wegit 1"
        },
        {
          id: 2,
          title: "Cloud Account Risk Assessment",
          items: "hello wegit 2"
        }
      ]
    },
    {
      title: "Another Dashboard",
      cards: [
        {
          id: 3,
          title: "Resource Management",
          items: "hello wegit 3"
        },
        {
          id: 4,
          title: "Security Overview",
          items: "hello wegit 4"
        }
      ]
    }
  ]);