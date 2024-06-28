export class Inprogress {
    id: number;
    issueDate:Date;
    transportDate:Date;
    transportNo:string;
    unitName:string;
    totNoOfCasesRequested:number
    totNoOfBottlesRequested:number
    transportPassStatus: boolean;
   }
 
  export class Completed {
    id: number;
    issueDate:Date;
    transportDate:Date;
    transportNo:string;
    unitName:string;
    totNoOfCasesRequested:number
    totNoOfBottlesRequested:number
    transportPassStatus: boolean;
  }
 
  export class Canceled {
    id: number;
    issueDate:Date;
    transportDate:Date;
    transportNo:string;
    unitName:string;
    totNoOfCasesRequested:number
    totNoOfBottlesRequested:number
    transportPassStatus: boolean;
 }
