# __Strings__

## CHARAT()
The charAt() method return the character at the specified index in a sting. The index of the first character is 0, the second character is 1, and so on.
```javaScript
var str = "HELLO WORLD";
var res = str.charAt(0);

console.log(res);
// output H
```


## CHARCODEAT()
The charCodeAt() method return the Unicode of the character at the specified index in a string.
```javaScript
var str = "HELLO WORLD";
var res = str.charCodeAt(0);

console.log(res);
// output 72
```


## CONCAT()
The concat() method is used to join two or more string. This method does not change the existing strings, but return a new string containing the text of the joined strings.
```javaScript
var str = "HELLO";
var str2 = "WORLD";
var res = str.concat(str2);

console.log(res);
// output HELLO WORLD
```


## ENDSWITH()
The endsWith() method determines whether a string ends with the character of a specificed string. The method returns true if the strings ends with the characters, and false if not.
```javaScript
var str = "HELLO WORLD";
var res = str.endsWith("WORLD");

console.log(res);
// output true
```


## FROMCHARCODE()
The fromCharCode() method converts Unicode values into characters. This is a static method of the String object, and the syntax is always String.fromCharCode();
```javaScript
var res = String.fromCharCode(68);

console.log(res);
// output D
```


## INCLUDES()
The includes() method determines whether a string specificed string.
```javaScript
var str = "HELLO WORLD";
var res = str.includes("WORLD");

console.log(res);
// output true
```


## INDEXOF()
The indexOf() method returns the position of the first occurrence of a specified value in a string. This 
```javaScript
var str = "HELLO WORLD";
var res = str.indexOf("WORLD");     // 6

console.log(res);
// output 6
```


## LASTINDEXOF()
The lastIndexOf() method returns the position of the
last occurrence of a specified value in a string. The
 string is searched from the end to the beginning,
but returns the index starting at the beginning, at
position 0.

```javaScript
var str - "Hello planet earth, you are a great
planet.":
 var res - str. LastIndex0f("planet"):
console.log(res)
// output 36
```


## LOCALECOMPARE()
The localeCompare() method compares two strings in the current locale. The locale is based on the language settings of the browser.

Returns-1 if strl is sorted before str2

Returns 0 if the two strings are equal

Returns 1 if strl is sorted after str2


```javaScript
var str1 - "ab";
var str2 - "cd";
var res - str1.localeCompare(str2);

console.log(res);
// output -1
```


## MATCH()
The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
```javaScript
var str - "The rain in SPAIN stays mainly in the plain";
var res - str.match(/ain/g);

console.log(res);
// output ["ain", "ain", "ain"]
```


## REPEAT()
The repeat() method returns a new string with a new string with a specified number of copies of the string it was called on.
```javaScript
var str - "Hello World";
str.repeat(2);

console.log(str);
// output ["ain", "ain", "ain"]
```

