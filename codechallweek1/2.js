function checkSpeed(speed){
const  speedlimit =70;
    const demeritpointhold = 12
    if (speed<speedlimit)
        {return'ok';
        }else{
            let Demeritpoint =((speed-speedlimit)/5);
            
            {return(`points${Demeritpoint}`);
        }if(Demeritpoint>demeritpointhold)
            {return 'license suspended'}
        }
}
const speed = 100;
const point = checkSpeed(speed);
console.log(`results is ${speed} is : ${point}`);
