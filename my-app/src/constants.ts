import { Label } from "./types";

export const dummyNotesList = [
   {
       favorite: false,
       id: 1,
       title: "test note 1 title",
       content: "test note 1 content",
       label: Label.other,
   },
   {    
       favorite: false,
       id: 2,
       title: "test note 2 title",
       content: "test note 2 content",
       label: Label.personal,
   },
   {
       favorite: false,
       id: 3,
       title: "test note 3 title",
       content: "test note 3 content",
       label: Label.work,
   },
   {
       favorite: false,
       id: 4,
       title: "test note 4 title",
       content: "test note 4 content",
       label: Label.study,
   },
   {
       favorite: false,
       id: 5,
       title: "test note 5 title",
       content: "test note 5 content",
       label: Label.study,
   },
   {
       favorite: false,
       id: 6,
       title: "test note 6 title",
       content: "test note 6 content",
       label: Label.personal,
   },
]

export const dummyGroceryList = [
    { name: "Apples", isPurchased: false },
    { name: "Bananas", isPurchased: false },
 ]

 export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
    McD: {
      foreground: '#FF0000',
      background: '#FFFF00',
    },
  }

