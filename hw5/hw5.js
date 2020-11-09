
const Value1 = 22
const Label1 = "hours"
const Value2 = 39
const Label2 = "hours"
const SingleLabel = ["day","minute","hour","second"]
const OnlyLabel = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"]



function TimeAdder(val1,lab1,val2,lab2)
{

console.log(" The initial input is " +val1,lab1,val2,lab2);

//To see if there's an error at the lab1 or lab2
if (val1>1 && SingleLabel.includes(lab1)) {
  console.log("Error, is not "+lab1+" is "+lab1+"s")
  return false
}

if (val2>1 && SingleLabel.includes(lab2)) {
  console.log("Error, is not "+lab2+" is "+lab2+"s")
  return false;
}

  switch (lab1)
  {
    case "seconds" || "second" :
    break;

    case "minutes" || "minute" :
           val1 = (val1*60)
    break;

    case "hours" || "hour" :
           val1 = val1*60*60
    break;

    case "days" || "day" :
           val1 = ((val1*60)*60)*24
    break;

    default:
          console.log("Error value on Label1")
          return false;
    break;
  }

  switch (lab2)
  {
    case "seconds" || "second" :
    break;

    case "minutes" || "minute" :
           val2 = (val2*60)
    break;

    case "hours" || "hour" :
           val2 = val2*60*60
    break;

    case "days" || "day" :
           val2 = ((val2*60)*60)*24
    break;

    default:
          console.log("Error value on Label2")
          return false;
    break;
  }

  let val3 = val1+val2;

  if (val3>59)
  {
    val3 = val3 / 60
    var lab3 = " minutes "

    if (val3>59)
    {
      val3 = val3 / 60
      lab3 = " hours "

      if (val3>23.99)
      {
        val3 = val3 / 24
        lab3 = " days "

      }
    }
  }

let Array = [val3,lab3]
console.log(Array)

}

TimeAdder(Value1,Label1,Value2,Label2)
