var hello_world = function() {
    var name = "roofimon";

    var reverse_name = function() {
        var e = name;
        console.log("hello " + e + "!");
        var name = "juacompe";
    };

    reverse_name();
};
// ได้ hello undefined เพราะว่า เวลา javascript อ่าน มันกลายเป็นแบบนี้
/*
var hello_world = function() {
	var name, reverse_name;
    name = "roofimon";

    reverse_name = function() {
    	var e, name;
        e = name;
        console.log("hello " + e + "!");
        name = "juacompe";
    };

    reverse_name();
};
// ได้ hello undefinded
*/
// คือ มันจะประกาศตัวแปรทั้งหมดใน scope ก่อน 

/*
var hello_world = function() {
	var name, reverse_name;
    name = "roofimon";

    reverse_name = function() {
  		// ไม่ได้ประกาศ e ไว้ก่อน มันจะคิดว่าเป็น "global"
        e = name;
        console.log("hello " + e + "!");
        name = "juacompe";
    };

    reverse_name();
};
// ได้ผลลัพธ์เป็น hello roofimon
*/
