var oMonth = null;
var oDay = null;
var currentDate = null;
function init() {
    oMonth = document.getElementById("month");
    oDay = document.getElementById("day");
    currentDate = new Date();
    //设置Change事件
    oMonth.onchange=Day_Bind;

    var objDate = new Date('2018','0' ,'0');
    var totalMonthInYear = objDate.getMonth()+1;
    oMonth.options.add(new Option('请选择','请选择'));
    for(var i = 1; i <= totalMonthInYear; i++ ){
        oMonth.options.add(new Option(i,i));
    }
    oMonth.options[6].selected=true;

    var objDate = new Date('2018','6','0');
    var totalDaysInMonth = objDate.getDate();
    //绑定下拉
    oDay.options.add(new Option('请选择','请选择'));
    for(var i = 1; i <= totalDaysInMonth; i++){
        oDay.options.add(new Option(i,i));
    }
    oDay.options[14].selected=true;
}

function Day_Bind(){
    //取得当前月的总天数
    var objDate = new Date('2018',oMonth.value,'0');
    var totalDaysInMonth = objDate.getDate();
    //绑定下拉
    $('#day').empty();
    // oDay.options.length = 0;
    oDay.options.add(new Option('请选择','请选择'));
    for(var i = 1; i <= totalDaysInMonth; i++){
        oDay.options.add(new Option(i,i));
    }
}
init();
