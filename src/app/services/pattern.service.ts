import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class PatternService {
    public codePattern = '^[a-zA-Z0-9]*$'; // ^[a-zA-Z0-9]+$ // 
    public shortNamePattern = '^[a-zA-Z]+$';
    public emailPattern = /[a-zA-Z0-9.-]{1,20}@[a-zA-Z.-]{2,10}[.]{1}[a-zA-Z]{2,3}/;
    public namePattern = /^[a-zA-Z][a-zA-Z.\s]*$/;
    public alphaNumericNamePattern = /^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$/;
    public numberWithDecimal = /[0-9]+(\.[0-9][0-9]?)?/;
    public descriptionPattern = /^[a-zA-z][a-zA-Z0-9 ]*$/;
    public numberPattern = /(1|2|3|4|5|6|7|8|9)[0-9]/;
    public numberWithHyphenPattern = /^(\d|-)+$/;
    public datePattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    public mobilePattern = /(6|7|8|9)\d{9}$/;
    public mobileWithoutLengthPattern = /^[6-9]/;
    public moblPattern = /^[0-9-]*$/;
    public agePattern = /^(?:1[0-4][0-9]|[1-9]|150|[1-9][0-9])$/;
    public agePatternWithZero = /^(?:1[0-4][0-9]|[0-9]|150|[1-9][0-9])$/;
    public stringPattern = /^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./0-9]*$/;
    public alphaNumericPattern = /^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./]*$/;
    public pinpattern = /^[1-9][0-9]{5}$/;
    public decimal = (/^[0-9]*\.?[0-9]*$/);
    public dateString = 'YYYY-MM-DD';
    public viewDateString = 'DD-MM-YYYY';
    public dateStringWithMonthName = 'YYYY-MMM-DD';
    public viewDateStringWithMonthName = 'DD-MMM-YYYY';
    public timeString = 'hh:mm:ss';
    public time24HrsString = 'HH:mm:ss';
    public timeWithMeridian = 'hh:mm:ss a';
    public dateTime = 'YYYY-MM-DD hh:mm:ss';
    public dateTime24Hrs = 'YYYY-MM-DD HH:mm:ss';
    public viewDateTime = 'DD-MM-YYYY hh:mm:ss';
    public viewDateTime24Hrs = 'DD-MM-YYYY HH:mm:ss';
    public dateTimeWithMonthName = 'YYYY-MMM-DD hh:mm:ss';
    public dateTime24HrsWithMonthName = 'YYYY-MMM-DD HH:mm:ss';
    public viewDateTimeWithMonthName = 'DD-MMM-YYYY hh:mm:ss a';
    public viewDateTime24HrsWithMonthName = 'DD-MMM-YYYY HH:mm';
    public agePatternWithZeroString = '(?:1[0-4][0-9]|[0-9]|150|[1-9][0-9])';
    public special = '/^[A-z\d_@.#$=!%^)(\]:\*;\?\/\,}{\'\|<>\[&\+-]*$/';
    public onlyNumbers = '^[0-9]*$';
    public percentage = '\b(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%';
    public withSpace = '[a-zA-Z0-9][a-zA-Z0-9 ]+';
}
