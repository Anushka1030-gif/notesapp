function getgrade(score){
    if(score>=90 && score<=100) {
        return "A+";
    }
    else if(score>=80 && score<=89){
        return "A";
    } 
    else if (score>=70 && score<=79){
        return "B";
    }
    else if(score>=60 && score<=69){
        return "C";

    }
    else if(score>=33 && score<=59){
        return "D";
    }
    else if(score >=0 &&score<=32){
        return "Fail";
    }
    else return "Invalid marks";
}
grade=getgrade(76);
console.log(grade);