function show() {
    console.log(this);
}
show(); //this==window
new show(); //新new出來的object