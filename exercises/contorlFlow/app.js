    var letterGrade;
    var testScore;

if(testScore>= 90){
    letterGrade = "A"
}else if(testScore >= 80){
    letterGrade = "B"
}else if(testScore >= "70"){
    letterGrade = "C"
}else if(testScore >= "55"){
    letterGrade = "D"
}else if (testScore < 55){
    letterGrade = "F"
}

console.log("Your letter grade is:" + letterGrade);



    let number ;
    if (number == 0){
        console.log("zero")
    }else if (number >0){
        if (number > 100){
            console.log("positive and greater than 100 ")
        }else if(number < 100){
            console.log("positive and smaller than 100")
        } else {
            console.log("positive number")
        }     
    } else if (number < 0){
        console.log("negative number");
    }else {
        console.log("please put in a number")
    }
