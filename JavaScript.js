let temp = [];
console.log(temp);
//At the beginning//
document.querySelector('.col-monitor').innerHTML = 0;

//Numbers//
document.querySelector('.col-7').addEventListener('click', function() {
    temp += '7';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-8').addEventListener('click', function() {
    temp += '8';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-9').addEventListener('click', function() {
    temp += '9';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-4').addEventListener('click', function() {
    temp += '4';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-5').addEventListener('click', function() {
    temp += '5';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-6').addEventListener('click', function() {
    temp += '6';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-1').addEventListener('click', function() {
    temp += '1';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-2').addEventListener('click', function() {
    temp += '2';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-3').addEventListener('click', function() {
    temp += '3';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-dot').addEventListener('click', function() {
    temp += '.';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-0').addEventListener('click', function() {
    temp += '0';
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});
document.querySelector('.col-delete').addEventListener('click', function() {
    temp = temp.slice(0, -1);
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});

temp = Number(temp);

document.querySelector('.col-plus').addEventListener('click', function() {
    temp = temp + secondTemp;
    document.querySelector('.col-monitor').innerHTML = temp;
    return temp;
});


console.log(temp);