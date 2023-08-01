export interface Wizard {
    name1: string;
    level: number;
    school: string;
    alignment: Alignment;
  }

export  enum Alignment {
    GOOD = "Good",
    EVIL = "Evil"
  }