function Student(n, a, m) {
    var name = n;
    var age = a;
    var marks = m;
    
    var averageMarks = function() {
      var sum = 0;
      marks.forEach(function(m){
        sum += m;
      });
      return sum/marks.length;    
    }
    this.printDetails = function() {
      console.log('Name: ' + name + ' Age: ' + age + ' Average Marks: ' + averageMarks());
    }
  }
  
  var student1 = new Student('Rohith', 20, [70, 92, 84]);
  student1.printDetails();