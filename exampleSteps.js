const steps = {
    start: {
      message: "Are you ready for an adventure? (yes/no)",
      yes: "firstStep",
      no: () => {
        console.log("Bye then!");
      },
    },
    end: {
      message: "Do you want to play again? (yes/no)",
      yes: "start",
      no: () => {
        console.log("Bye then!");
      },
    },
    firstStep: {
      message: "Do you love me? yes/no",
      yes: "lovely",
      no: () => {
        console.log("Bye then!");
  
      },
    },
    lovely: {
      message: "Great, how much? 1-10",
      no: () => {
        console.log("Bye then!");

      },
    },

}