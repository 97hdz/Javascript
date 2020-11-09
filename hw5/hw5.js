
const Value1 = 20
const Label1 = "hours"
const Value2 = 4
const Label2 = "hours"
const OnlyLabel = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"]



function TimeAdder(val1,lab1,val2,lab2)
{

  console.log(" The initial input is " +val1,lab1,val2,lab2);

  switch (lab1)
  {
    case "seconds" || "second" :
          console.log(val2 + " Value 1 - seconds ");
    break;

    case "minutes" || "minute" :
           val1 = (val1*60)
           console.log(val1 + " Value 1 - seconds ");
    break;

    case "hours" || "hour" :
           val1 = val1*60*60
           console.log(val1 + " Value 1 - seconds ");
    break;

    case "days" || "day" :
           val1 = ((val1*60)*60)*24
           console.log(val1 + " Value 1 - seconds ");
    break;

    default:
          console.log("Error value on Label1")
    break;
  }

  switch (lab2)
  {
    case "seconds" || "second" :
          console.log(val2 + " Value 2 - seconds ");
    break;

    case "minutes" || "minute" :
           val2 = (val2*60)
           console.log(val2 + " Value 2 - seconds ");
    break;

    case "hours" || "hour" :
           val2 = val2*60*60
           console.log(val2 + " Value 2 - seconds ");
    break;

    case "days" || "day" :
           val2 = ((val2*60)*60)*24
           console.log(val2 + " Value 2 - seconds ");
    break;

    default:
          console.log("Error value on Label2")
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
        lab3 = " day "
        
      }
    }
  }

let Array = [val3,lab3]
console.log(Array)

}

TimeAdder(Value1,Label1,Value2,Label2)
