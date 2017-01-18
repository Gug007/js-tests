/**
 @tags [es5, es6, typescript, ect.]
 */

const list = [{
  tags: ['es5'],
  title: 'What value is returned from the following statement?',
  code: `
    function f() { return this }
    f.bind(6).bind(9)()
  `,
  answers: [
    {answer: '6', isTrue: true},
    {answer: '9'},
    {answer: '15'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    (function() {
      var a = b = 3;
    })();

    console.log(typeof a, typeof b);
  `,
  answers: [
    {answer: 'undefined\nnumber', isTrue: true},
    {answer: 'number\nnumber'},
    {answer: 'number\nundefined'},
    {answer: 'undefined\nundefined'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    var myObject = {
      foo: 'bar',
      func: function() {
        var self = this;
        (function() {
          console.log(this.foo, self.foo);
        }());
      }
    };

    myObject.func();
  `,
  answers: [
    {answer: 'undefined\nbar', isTrue: true},
    {answer: 'bar\nbar'},
    {answer: 'bar\nundefined'},
    {answer: 'undefined\nundefined'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    function foo1() {
      return {
        bar: 'hello'
      };
    }

    function foo2() {
      return
      {
        bar: 'hello'
      };
    }
    
    console.log(foo1(), foo2());
  `,
  answers: [
    {answer: 'Object {bar: "hello"}\nundefined', isTrue: true},
    {answer: 'Object {bar: "hello"}\nObject {bar: "hello"}'},
    {answer: 'undefined\nObject {bar: "hello"}'},
    {answer: 'undefined\nundefined'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    console.log(typeof NaN === 'number');
    console.log(NaN === NaN);
    console.log('abc' / 3);
    console.log('A' - 'B' + '2');
  `,
  answers: [
    {answer: 'true\nfalse\nNaN\n"NaN2"', isTrue: true},
    {answer: 'false\ntrue\nNaN\nNaN'},
    {answer: 'true\ntrue\n1\nNaN'},
    {answer: 'false\nfalse\nNaN\n"NaN2"'}
  ]
}, {
  tags: ['es5'],
  title: 'In what order will the numbers 1-4 be logged to the console when the code below is executed?',
  code: `
    (function() {
      console.log(1);
      setTimeout(function() {console.log(2)}, 1000);
      setTimeout(function() {console.log(3)}, 0);
      console.log(4);
    }());
  `,
  answers: [
    {answer: '1\n4\n3\n2', isTrue: true},
    {answer: '1\n2\n3\n4'},
    {answer: '1\n3\n4\n2'},
    {answer: '1\n4\n2\n3'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    var arr1 = 'john'.split('');
    var arr2 = arr1.reverse();
    var arr3 = 'jones'.split('');
    arr2.push(arr3);

    console.log(arr1.slice(-1), arr2.slice(-1));
  `,
  answers: [
    {answer: '[["j","o","n","e","s"]]\n[["j","o","n","e","s"]]', isTrue: true},
    {answer: '["s"]\n["s"]'},
    {answer: '["j"]\n[["j","o","n","e","s"]]'},
    {answer: '["j"]\n["s"]'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    console.log(1 + '2' + '2');
    console.log(1 + +'2' + '2');
    console.log(1 + -'1' + '2');
    console.log(+'1' + '1' + '2');
  `,
  answers: [
    {answer: '"122"\n"32"\n"02"\n"112"', isTrue: true},
    {answer: '5\n32\n2\n4'},
    {answer: '"122"\n"122"\n"112"\n"112"'},
    {answer: '"32"\n"32"\n"02"\n"112"'}
  ]
}, {
  tags: ['es5'],
  title: 'What will be the output of the following code?',
  code: `
    for(var i = 0; i < 5; i++) {
      setTimeout(function() { console.log(i); }, i * 1000);
    }
  `,
  answers: [
    {answer: '5\n5\n5\n5\n5', isTrue: true},
    {answer: '0\n1\n2\n3\n4'},
    {answer: '0\n5\n5\n5\n5'},
    {answer: '4\n3\n2\n1\n0'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var spy = {
      _name: 'James Bond',
      getSecretName: function() {
        return this._name;
      }
    };
    var stoleSecretName = spy.getSecretName;
    console.log(stoleSecretName(), spy.getSecretName());
  `,
  answers: [
    {answer: 'undefined\n"James Bond"', isTrue: true},
    {answer: '"James Bond"\n"James Bond"'},
    {answer: 'undefined\nundefined'},
    {answer: '"James Bond"\nundefined'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var a = {},
        b = {key: 'b'},
        c = {key: 'c'};

    a[b] = 7;
    a[c] = 13;

    console.log(a[b]);
  `,
  answers: [
    {answer: 13, isTrue: true},
    {answer: undefined},
    {answer: 7},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What would the following lines of code output to the console?',
  code: `
    console.log(0 || 1);
    console.log(1 || 2);
    console.log(0 && 1);
    console.log(1 && 2);
  `,
  answers: [
    {answer: '1\n1\n0\n2', isTrue: true},
    {answer: '0\n2\n1\n1'},
    {answer: '1\n1\n0\ntrue'},
    {answer: '1\n2\ntrue\n1'}
  ]
}];

module.exports = list;