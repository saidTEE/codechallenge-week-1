function calculate(grade)
{

 if(grade <=100 && grade >=80)
    {return 'A'}

else if(grade <=79 && grade >=60)
    {return 'B'}
else if(grade<=59 && grade >=50)
    {return 'C'}  
else if (grade<=49 && grade >=40)
    {return 'D'}
else if (grade<40 && grade >=0)
    {return 'E'}}
const grade = 80;
const result = calculate(grade);
console.log(`Grade is ${grade} equals : ${result}`)

