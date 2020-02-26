// IMPORTANT! IMPORTANT!
// ---------------------------------------------------------------------
// ALL SCREEN CLASSES HAVE A this.state INSTANCE VARIABLE THAT HOLDS THE
// APPLICATION STATE CREATED IN THE program.js. WHENEVER YOUR CODE NEEDS
// TO INTERACT WITH THE STATE IN ONE OF THE FOLLOWING CLASSES, DO IT
// THROUGH THE this.state INSTANCE VARIABLE.

class AddItemScreen {
  constructor(rl, state) {
    this.rl = rl;
    this.state = state;
  }

  printChoiceUi() {
    console.clear();
    console.log("********************************************");
    console.log("* CREATE AN ITEM                (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("What kind of to-do item do you want to");
    console.log("create?");
    console.log();
    console.log("1. Note");
    console.log("2. Task");
    console.log();
    console.log("Type the number and hit \"Enter\".");
    console.log();
  }

  printNoteUi() {
    console.clear();
    console.log("********************************************");
    console.log("* CREATE A NOTE                 (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("(Type your text and hit \"Enter\" to return to");
    console.log("the to-do list screen, 300 characters max.)");
    console.log();
    console.log("What is the note?");
    console.log();
  }

  printTaskUi1() {
    console.clear();
    console.log("********************************************");
    console.log("* CREATE A TASK                 (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("What is the title?");
    console.log();
  }

  printTaskUi2(title) {
    console.clear();
    console.log("********************************************");
    console.log("* CREATE A TASK                 (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log(`TITLE: ${title}`);
    console.log();
    console.log("What is the category?");
    console.log();

    // TODO: Print all five category names with a one-based index
    //       like in the screen mockup in the project description.

    console.log();
  }

  printTaskUi3(title, categoryName) {
    console.clear();
    console.log("********************************************");
    console.log("* CREATE A TASK                 (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log(`TITLE: ${title}`);
    console.log(`CATEGORY: ${categoryName}`);
    console.log();
    console.log("(Type your text and hit \"Enter\" to return to");
    console.log("the to-do list screen, 300 characters max.)");
    console.log();
    console.log("What is the description?");
    console.log();
  }

  show() {
    this.printChoiceUi();
    this.rl.question("> ", answer => {
      if (answer === "1") {
        this.printNoteUi();
        this.rl.question("> ", note => {
          // TODO: Add a note to-do item to your state
          //       using the variable note
          // TODO: Save the state

          const screen = new ManageTasksScreen(this.rl, this.state);
          screen.show();
        });
      } else if (answer === "2") {
        this.printTaskUi1();
        this.rl.question("> ", title => {
          this.printTaskUi2(title);
          this.rl.question("> ", categoryIndex => {
            categoryIndex = Number.parseInt(categoryIndex) - 1;
            // TODO: Use the value categoryIndex to get the
            //       name of the category and set the following
            //       value to the category name
            const categoryName = "";

            this.printTaskUi3(title, categoryName);
            this.rl.question("> ", description => {
              // TODO: Add a task to-do item to your state
              //       using the variables title, categoryIndex,
              //       and description
              // TODO: Save the state

              const screen = new ManageTasksScreen(this.rl, this.state);
              screen.show();
            });
          });
        })
      } else {
        this.show();
      }
    })
  }
}

class EditCategoryScreen {
  constructor(rl, state, categoryIndex) {
    this.rl = rl;
    this.state = state;
    this.categoryIndex = categoryIndex;
  }

  printUi(categoryName) {
    console.clear();
    console.log("********************************************");
    console.log("* EDIT CATEGORY                 (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log(`You are editing \"${categoryName}\".`);
    console.log();
    console.log("What would you like to rename it? Hit");
    console.log("\"Enter\" when you are done.");
    console.log();
  }

  show() {
    // TODO: Use the value this.categoryIndex to get the
    //       name of the category and set the following
    //       value to the category name
    const categoryName = "";

    this.printUi(categoryName);
    this.rl.question("> ", newCategoryName => {
      // TODO: Update the category with the index stored
      //       in the variable this.categoryIndex with the
      //       value in the newCategoryName variable.
      // TODO: Save the state

      new ManageCategoriesScreen(this.rl, this.state).show();
    });
  }
}

class MainScreen {
  constructor(rl, state) {
    this.rl = rl;
    this.state = state;
  }

  printUi() {
    console.clear();
    console.log("********************************************");
    console.log("* TO-DO FOR YOU!!!!!            (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("Please choose one of the following options:");
    console.log("1. Review my to-do items");
    console.log("2. Search for a to-do item");
    console.log("3. Manage categories");
    console.log();
    console.log("X. Exit");
    console.log();
    console.log("Type a number to go to another screen. Type");
    console.log("an X to return to the main menu.");
  }

  show() {
    this.printUi();
    this.rl.question("> ", answer => {
      let screen = this;
      if (answer === "1") {
        screen = new ManageTasksScreen(this.rl, this.state);
      } else if (answer === "2") {
        screen = new SearchScreen(this.rl, this.state);
      } else if (answer === "3") {
        screen = new ManageCategoriesScreen(this.rl, this.state);
      } else if (answer === "X") {
        console.clear();
        this.rl.close();
        return;
      }
      screen.show();
    });
  }
}

class ManageCategoriesScreen {
  constructor(rl, state) {
    this.rl = rl;
    this.state = state;
  }

  printUi() {
    console.clear();
    console.log("********************************************");
    console.log("* CATEGORIES                    (c) 1987   *");
    console.log("********************************************");
    console.log();

    // TODO: Print all five category names with a one-based index
    //       like in the screen mockup in the project description.

    console.log();
    console.log("X. Go to main screen");
    console.log();
    console.log("Type a number to edit a category. Type an X");
    console.log("to return to the main menu.");
  }

  show() {
    this.printUi();
    this.rl.question("> ", answer => {
      if (["1", "2", "3", "4", "5"].includes(answer)) {
        const index = Number.parseInt(answer) - 1;
        new EditCategoryScreen(this.rl, this.state, index).show();
      } else {
        new MainScreen(this.rl, this.state).show();
      }
    });
  }
}

class ManageTasksScreen {
  constructor(rl, state) {
    this.rl = rl;
    this.state = state;
  }

  printUi() {
    console.clear();
    console.log("********************************************");
    console.log("* TO-DO ITEMS                   (c) 1987   *");
    console.log("********************************************");
    console.log();

    // TODO: Print the incomplete to-do items in the format as
    //       shown in the requirements, 1-based list.

    console.log();
    console.log("A. Add a new item");
    console.log("X. Return to main menu");
    console.log();
  }

  show() {
    this.printUi();
    this.rl.question("> ", answer => {
      const index = Number.parseInt(answer) - 1;
      let screen = this;
      if (answer === "A") {
        screen = new AddItemScreen(this.rl, this.state);
      } else if (answer === "X") {
        screen = new MainScreen(this.rl, this.state);
      } else if (!isNaN(index)) {
        screen = new ItemDetailScreen(this.rl, this.state, index);
      }
      screen.show();
    });
  }
}

class ItemDetailScreen {
  constructor(rl, state, index) {
    this.rl = rl;
    this.state = state;
    this.index = index;
  }

  printNoteUi(text) {
    console.clear();
    console.log("********************************************");
    console.log("* TO-DO ITEM (NOTE)             (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log(text);
    console.log();
  }

  printTaskUi(title, description, categoryName) {
    console.clear();
    console.log("********************************************");
    console.log("* TO-DO ITEM (TASK)             (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log(`TITLE: ${title}`);
    console.log(`CATEGORY: ${categoryName}`);
    console.log("DESCRIPTION");
    console.log(description);
    console.log();
  }

  show() {
    // TODO: Determine what kind of item is in the state and
    //       referenced by the value in this.index.
    // TODO: If there is not item referenced by this.index,
    //       then do whatever kind of error handling you'd
    //       like, just don't let the program crash.
    // TODO: If it is a Note, then get the text from the note
    //       and call the this.printNoteUi(text) method.
    // TODO: If it is a Task, then get the title, description,
    //       and category index, translate the category index
    //       into a category name from the note and call the
    //       this.printTaskUi(title, description, categoryName)
    //       method.

    console.log("Type \"C\" and hit \"Enter\" to complete this");
    console.log("task and return to the list screen. Just");
    console.log("hit \"Enter\" to return to the list screen.");
    this.rl.question("> ", answer => {
      if (answer === "C") {
        // TODO: Mark the item as complete
        // TODO: Save the application state

      }
      const screen = new ManageTasksScreen(this.rl, this.state);
      screen.show();
    });
  }
}

class SearchScreen {
  constructor(rl, state) {
    this.rl = rl;
    this.state = state;
  }

  printUi() {
    console.clear();
    console.log("********************************************");
    console.log("* SEARCH ITEMS                  (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("Please type your search term and hit Enter.");
    console.log();
  }

  printResultsUi(term) {
    console.clear();
    console.log("********************************************");
    console.log("* SEARCH RESULTS                (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("Your search matches");
    console.log();

    // TODO: Search the items as described in the requirements with
    //       the value stored in term. Print all of the matching
    //       items, complete and incomplete alike.

    console.log();
  }

  show() {
    this.printUi();
    this.rl.question("> ", term => {
      this.printResultsUi(term);
      this.rl.question("Enter to return to the main screen. ", () => {
        const screen = new MainScreen(this.rl, this.state);
        screen.show();
      });
    });
  }
}

module.exports = {
  MainScreen,
};
