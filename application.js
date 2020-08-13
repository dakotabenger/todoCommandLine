const fs = require('fs');

class State {
  // Called from program.js to create an instance
  // of the application state.
  constructor(filePath) {
    this.categories = [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
    ];
    this.filePath = filePath;
    this.tasks = [];

    // TODO: Any other initialization that you need. DONE
  }
  // getCategoryByIndex [add-item-screen]
  getCategoryByIndex(index) {
    return this.categories[index];
  }
  
  // getCategoryByCount method [add-item-screen]
  getCategoryByCount() {
    return this.categories.length;
  }

  // addNote method [add-item-screen]
  addNote(text){
    this.tasks.push(new Note(text));
  }

 //addTask method [add-item-screen]
  addTask(title, description, categoryIndex){
    this.tasks.push(new Task(title, description, categoryIndex));
  }

//setCategory method (changes category to different name)[edit category screem]

setCategory(index, value){
  this.categories[index] = value;
}

//getItemByIndex [item-detail-screen] (returns the element at the index)
getItemByIndex(index){
  return this.tasks[index]
}

getIncompleteItem(index) {
  return !this.tasks[index].completed
}

getItemCount() {
  return this.tasks.length
}
getShortDesc(index) {
  return this.tasks[index].shortDescription();
}

searchByTerm(string) {
  let result = [];
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].matches(string)) {
      result.push(i);
    }
  }
  return result;
}

  // Called from program.js if there is JSON saved
  // in the file pointed to by the value in
  // this.filePath.
  loadFromJson(json) {

    const {
      categories,
      tasks,
     } = JSON.parse(json);

      for (let i = 0; i < categories.length; i +=1) {
        this.categories[i] = categories[i];
      }

      for (let i = 0; i < tasks.length; i+=1){
        const taskThing = tasks[i];
        let task = null;
         if (taskThing.type === 'Note') {
           task = new Note(taskThing.text, taskThing.completed);
          } else if(taskThing.type === 'Task') {
             const {
               title, description, categoryId, completed,
             } = taskThing;
             task = new Task (title, description, categoryId, completed);
           }
           this.tasks.push(task);
         }
      }
    


    // TODO: Load this object from the data
    // pull categories and tasks seperately from the json 
    // data by deconstructing
    // iterate through those arrays and set them to new Note or 
    // Task objects and push them to the tasks array
  // save method
  // save both tasks and catergories into object
  //write it to json file, using the filePath, and stringfy
  
  save(){
    const data = {
      tasks : this.tasks, 
      categories : this.categories,
    };
    fs.writeFile(this.filePath, JSON.stringify(data), err => {});
  }

  // TODO: Your code, here, to manage the state
}
class Note {
  constructor(text, completed){
  this.type = 'Note'
  this.text = text;
  this.completed = completed;
}

complete() {
  this.completed = true;
}

//shortNote 
shortDescription() {
  return this.text.substring(0, 50);
}

matches(string) {
  return this.text.indexOf(string) > -1;
}

}
// TODO: All of your other classes, here.
// Note Class Include Text, Type and Completed Status
// complete method,



// Task Class include description, type, completed status, category index 
// complete method, 

class Task {
  constructor(title, description, categoryIndex, completed){
    this.type = 'Task'
    this.title = title;
    this.description = description;
    this.categoryIndex = categoryIndex;
    this.completed = completed;
  }
  complete() {
    this.completed = true;
  }

  //shortDescription method (100 chars) 
  shortDescription() {
    return this.title.substring(0, 70);
  }

  matches(string) {
    return this.title.indexOf(string) > -1 || this.description.indexOf(string) > -1;
  }

 
}
module.exports = {
  State,
  Note,
  Task
};
