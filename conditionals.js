if(2+2 === 6){
    console.log("Math works!");
  } else {
    console.log("Math is broken.")
  }
  
  // Expected output: "Math works!"

  myName = "Rhiannon";

  if( myName === "Jacob") {
      console.log("Hi Two Stackzzz");

  } else if (myName === "Walker"){
      console.log("Hi Walker The Great");
  } else if (myName === "Kim"){
      console.log("Your coffee is on the way");
  }else {
      console.log ("Hi person with no face");
  }

  likesToTravel = true;

  if(likesToTravel === true){
      console.log("Bon voyage!");      
  }
  if (likesToTravel === false){
  console.log ("Enjoy your couch!");
  }

  age = 12
  if(age < 12){
      console.log("Buy your own e-cig juice");
  }

  var name = "Jordan";
  if(name!== "Dwayne"){
      console.log("Too bad for you!");
  }

  var fullMoon = true;
var isWolf = false;
if(fullMoon && isWolf){
    console.log("AWOOOOOOOOOOO");
  }
  if(fullMoon || isWolf){
    console.log("AWOOOOOOOOOOO");
  }

  var favoriteFood = "mac & cheese";
  if(favoriteFood === "fried pickles" || favoriteFood === "pepperoni rolls"){
      console.log("Congratulations! You have excellent taste!");
    } else {
        console.log("Clearly you have not tried fried pickles or pepperoni rolls.");
    }

    var likesDogs = "yes" 
    if(likesDogs === "yes"){
    console.log("You're a dog person!");
    }
    if(likesDogs === "no"){
        console.log("You're a cat person!");
    }

    var birthYear = "2000"
    if(birthYear = 2000){
        console.log("You are Generation Z")
    }

    if(1+1 > 5){
        Console.log("True fact!");
    } else {
        console.log("LIES!");
    }

    if(4*5 <= 20){
        console.log("True fact!");
    } else {
        console.log("LIES!");
    }

    if(6-2 >= 0){
        console.log("True fact!");
    } else {
        console.log("LIES!");
    }
    
    userData = {
        firstName: "Rhiannon",
        lastName: "Brafford",
        language: "English"
    }

    if (userData.language === "English"){
        console.log(`Hello, ${userData.firstName} ${userData.lastName}`)
    } else if (userData.language === "Spanish"){
        console.log(`Hola, ${userData.firstName} ${userData.lastName}`)
    } else {
        console.log(`Bonjour, ${userData.firstName} ${userData.lastName}`)
    }