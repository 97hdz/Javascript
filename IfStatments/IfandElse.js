
const Socrates = "Socrates"
const Animals = ["Lion","Dog","Cat","Monkey"] //const created just to include other items inside of Mortals
const Men = [Socrates]
const Mortals = [Men, Animals]
const MenImmortal = false


if (!MenImmortal){
    console.log("All men are mortals")
    if (Men.includes(Socrates)){
        console.log(Socrates+" is a man.")
        if (Mortals.includes(Men)){
            console.log("Therefore, "+Socrates+" is a mortal.")
        }
    }
}

else {
    console.log("Men are not mortal")
}