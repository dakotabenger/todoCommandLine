// IMPORTANT! IMPORTANT!
// ---------------------------------------------------------------------
// ALL SCREEN CLASSES HAVE A this.state INSTANCE VARIABLE THAT HOLDS THE
// APPLICATION STATE CREATED IN THE program.js. WHENEVER YOUR CODE NEEDS
// TO INTERACT WITH THE STATE IN ONE OF THE FOLLOWING CLASSES, DO IT
// THROUGH THE this.state INSTANCE VARIABLE.
class ManageTasksScreen {
  constructor(rl, state, lastIndex = 0) {
    this.rl = rl;
    this.state = state;
    this.lastIndex = lastIndex;
  }

  printUi() {
    console.clear();
    console.log("********************************************");
    console.log("* TO-DO ITEMS                   (c) 1987   *");
    console.log("********************************************");
    console.log();

    // TODO: Print the incomplete to-do items in the format as
    //       shown in the requirements, 1-based list.

    let numRows = 10;
    for (
      let i = this.lastIndex;
      i < this.state.getItemCount() && numRows > 0;
      i++
    ) {
      numRows--;
      this.lastIndex = i;
      if (this.state.getIncompleteItem(i)) {
        // console.log(i);
        // console.log(this.lastIndex + 1);
        console.log(`${i + 1}.   ${this.state.getShortDesc(i)}`);
        // console.log(i);
        // console.log(this.state.getItemCount());
      }
      // console.log(numRows, "num");
    }
    console.log();
    console.log("A. Add a new item");
    console.log("X. Return to main menu");
    console.log("C. Continue");
    console.log();
    console.log(this.lastIndex);
    console.log(this.lastIndex + 1 >= this.state.getItemCount());
  }
  resetIndexOrUseCurrentIndex() {
    if (this.lastIndex + 1 >= this.state.getItemCount()) {
      this.lastIndex = 0;
      console.log(this.lastIndex, "2");
    } else {
      this.lastIndex = this.lastIndex;
    }
  }
  show(answer) {
    this.printUi();
    this.rl.question("> ", (answer) => {
      const index = Number.parseInt(answer) - 1;
      let screen = this;
      if (answer === "A") {
        console.clear();
        screen = new AddItemScreen(this.rl, this.state);
      } else if (answer === "X") {
        console.clear();
        screen = new MainScreen(this.rl, this.state);
      } else if (answer === "C") {
        // this.resetIndexOrUseCurrentIndex();
        this.resetIndexOrUseCurrentIndex();
        console.log(this.lastIndex);
        screen.show();
      } else if (!isNaN(index)) {
        console.clear();
        screen = new ItemDetailScreen(this.rl, this.state, index);
      } else {
        screen.show();
      }
    });
  }
}

exports.ManageTasksScreen = ManageTasksScreen;

// Requires at bottom to prevent circular dependencies problems in node
const { AddItemScreen } = require("./add-item-screen");
const { MainScreen } = require("./main-screen");
const { ItemDetailScreen } = require("./item-detail-screen");
const { Task } = require("./application");
