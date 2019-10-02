import * as moment from 'moment'
import * as _ from 'lodash'

let txtFirstName: string = "Brints"
let txtLastName: string = "Ryan"

const fullName = txtFirstName.concat(txtLastName)
//You can refer the configurations https://basarat.gitbooks.io/typescript/content/docs/quick/browser.html
class Address {
    private street: string;
    private building: string;
    private nearbylocation: string;
    private pincode: number;

    constructor(strt: string, bldng: string, nearby: string, pin: number) {
        this.street = strt;
        this.building = bldng;
        this.nearbylocation = nearby;
        this.pincode = pin;
    }
}

class Person {
    private firstName: string;
    private middleName: string;
    private birthDate: Date;
    private age: number;
    private maritalStatus: boolean;
    private address: Address;

    constructor(fName: string, mName: string) {
        this.firstName = fName;
        this.middleName = mName;
    }

    setOtherDetails(bDate:Date, isMarried:boolean,addr:Address) {
        this.birthDate = bDate;
        this.age = moment(new Date).diff(moment(bDate),'days');
        this.maritalStatus = isMarried;
        this.address = addr;
    }

    getName(): string {
        return this.firstName.concat(this.middleName);
    }

    whatIsmyAge(): number{
        return _.round(this.age/365);
    }
}


startMonthlyCall();

function startMonthlyCall(): void {

    let btn = document.getElementById("btnSave");
    btn.addEventListener("click", (e: Event) => saveInfo());

    console.log(fullName);

    let p = new Person("Hello", " World");
    p.setOtherDetails(new Date(1983, 8, 20), true, new Address("Mocina", "23--34/45", "GovindaStatue", 509434));

    document.getElementById('root').innerHTML = `Monthly team talk was started for the name <b>${p.getName()}</b> and his age is <b>${p.whatIsmyAge()}</b>`;
}


const form = document.querySelector('form')!;

function saveInfo(): boolean {
    alert('');
    let retVal: boolean = false;
    let strBuff: string = "";
    const data = new FormData(form);
    
    for (const pair of data.entries()) {
        strBuff = strBuff + pair[0] + '-' + pair[1];
    }
    document.getElementById('root').innerHTML = strBuff;

    let person = new Person("one","two");
    return retVal;
}