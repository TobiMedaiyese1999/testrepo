
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
    
xhr.addEventListener("readystatechange", function() {
if(this.readyState === 4) {
    console.log(this.responseText);
    }
});
    
xhr.open("GET", "https://zylalabs.com/api/226/cities+cost+of+living+and+average+prices+api/655/cost+of+living+by+city?country=united-states&city=austin-tx");
xhr.setRequestHeader("Authorization", "Bearer 2641|hIQmJZPqhmrdFZ8ubj6xDSxhV8gnFhpOAZUAkrXl");
