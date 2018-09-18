
var hourArr12=['01 :','02 :','03 :','04 :','05 :','06 :','07 :','08 :','09 :','10 :','11 :','12 :'];
var minArr = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29',
              '30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
var numArr=['1','2','3','4','5'];
var amPmArr=['AM','PM'];

var dateArr = GetDateArr(getYesterdaysDate(),getNextDate())
var printableDateArr = GetDateArrToPrint(getYesterdaysDate(),getNextDate())
 
function wth(){MS}

var MS = new MobileSelect({
    trigger: '#edit',
    title: date_select_title,
    wheels: [
                {data: printableDateArr },
                {data: hourArr12},
                {data: minArr},
                {data: amPmArr}
            ],
    position:[1, 2, 3],
    transitionEnd:function(indexArr, data)
    { 
        //console.log(data); 
    },
    callback:function(indexArr, data)
    {/*
        var dateWheel = indexArr + ''.split(',');
        printableDateArr = dateArr[dateWheel[0]]
        console.log(data);
        console.log('valid date: ' + printableDateArr);
        data[0] = printableDateArr;*/
    }
});

function getYesterdaysDate() {
    var date = new Date();
    date.setDate(date.getDate()-10);
    return  (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
}
function getNextDate() {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    return  (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
}

function GetDateArr(start, end) 
{
    var oneDay = 24*3600*1000;
    d1 = new Date(start);
    d2 = new Date(end); 

    for (var d=[],ms=d1*1,last=d2*1;ms<last;ms+=oneDay)
    {
        dateCount = new Date(ms) 

        d.push( (dateCount.getMonth()+1) + '/' + dateCount.getDate() + '/' + dateCount.getFullYear() );  
    }
    return d;
}

function GetDateArrToPrint(start, end) 
{
    var oneDay = 24*3600*1000;
    d1 = new Date(start);
    d2 = new Date(end);
    dES = [];

    for (var d=[],ms=d1*1,last=d2*1;ms<last;ms+=oneDay)
    {
        fecha = new Date(ms); 
        dES.push(getDayOfWeek(fecha.getDay()) + ' ' + fecha.getDate());
    }
    console.log(dES);
    return dES;
}
 
