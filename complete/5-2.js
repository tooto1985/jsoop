function base() {
    console.log(this, arguments);
}
base.call({name:"John"}, 2, 3); //第一個參數修改this,之後的參數為function參數
base.apply({name:"Mark"}, [2, 3]); //第一個參數修改this,第二個參數必須是陣列為function參數
base.bind({name:"Jack"})(2, 3); //第一個參數修改this,回傳一個新的function