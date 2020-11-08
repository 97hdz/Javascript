/*
The difference between var, const and let:

- var : An empty container that allows you to store any value, any type of value it could be String, boolean, int.
        It's appropriate to use almost always, i mean it's the more used of the three, the other two exist to add 'something more' in the special cases

- let  : Has the same main function of 'var' but it is exclusive to the block of code that we're using in that moment ( it could be a function ).
        It's appropriate to use when you'll only use a value inside a block and you don't want to use it outside of it

- const : It's very similar to 'let'. both share the function of exclusivity to the respective block of code, but const have something more
          you cannot reassigned the value of the const, so you always have to give it a value from the start.
          It's appropriate to use when you'll use it just in one block and maybe you're working with other devs and you use 'const' to not let them use
         outside of it or mistakenly reassigning the value of the 'const'

- Hoisting : It's a JavaScript mechanism that it checks for the value of the container ( 'var', 'const' or 'let' ) first and then run the code,
            os if you declare your var after it should give you an hoisting error
 */

var num =3;

{
    //i use const because PI will always be PI (in Math) and it doesn't make sense to modify it
    const pi = 3.14;

    {
        let num = 5;
        console.log(num*pi);
    }

    //here i'm using the number three instead of the number 5 of the 'let'
    console.log(num*pi);

}
