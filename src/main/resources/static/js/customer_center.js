
$(".sub-nav").click(function (event){
    //侧栏样式
    var element = event.target;
    $(".cc-change").each(function (){
        this.className = "cc-change";
    })
    element.className = "cc-change ck";
    var eId = element.id;
    console.log(eId);
    //内容切换
    $(".information").each(function (){
        this.className = "information hide";
    });
    if (eId === "exchange-info1" || eId === "exchange1"){
        $("#info1").attr("class","information");
    }else if (eId === "exchange-info2"){
        $("#info2").attr("class","information");
    }else if (eId === "exchange-info3"){
        $("#info3").attr("class","information");
    }else if (eId === "exchange-info4" || eId === "exchange2"){
        $("#info4").attr("class","information");
    }else if (eId === "exchange-info5"){
        $("#info5").attr("class","information");
    }
});
//点击个人中心-用户信息中的修改跳到修改信息
$(".update-info").click(function(){
    //侧栏样式
    $(".cc-change").each(function (){
        this.className = "cc-change";
    })
    $("#exchange-info3").attr("class","cc-change ck");
    //内容切换
    $(".information").each(function (){
        this.className = "information hide";
    });
    $("#info3").attr("class","information");
    console.log("4111")
});



$(".order_exchange").click(function (){
    console.log("1a");
    $(".information").each(function (){
        this.className = "information hide";
    });
    $("#info6").attr("class","information");
});


//获取修改个人信息的值
$("#Submit").click(function(){
    var username = $(".username").val();
    console.log(username);

    var usertel = $(".usertel").val();
    console.log(usertel);

    var useremail = $(".useremail").val();
    console.log(useremail);

    var useridcardIpt = $(".useridcardIpt").val();
    console.log(useridcardIpt);

    var gender = $(".gerderBtn:checked").val();//单选按钮 radio
    console.log(gender);

    var userdate = $(".userdate").val();
    console.log(userdate);


});



//切换订单界面
$(function () {
    $('#myTab a:last').tab('show');
})
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
})

//显示当前用户信息
showUser();
function showUser(){
    var url = "/usercenter/user";
    $.get(url,function (user){
        var user = user.data;
        console.log(user);
        userId = user.userId;
        userTel = user.userTel;
        userPsd = user.userPsd;
        userGender = user.userGender;
        if (userGender === "0"){
            userGender = '男';
        }else{
            userGender = '女';
        }
        userIdcard = user.userIdcard;
        userName = user.userName;
        userEmail = user.userEmail;
        userBir = user.userBir;
        userPetname = user.userPetname;
        var userEle = "<h2>用户信息</h2>\n" +
            "                <div class=\"mod information-index\">\n" +
            "                    <div class=\"ui-bfc information-index-panel\">\n" +
            "                        <!--头像暂定-->\n" +
            "                        <div class=\"ui-bfc-hd hd\">\n" +
            "                            <img src=\"../images/customer_photo.png\" width=\"99\" height=\"99\">\n" +
            "                        </div>\n" +
            "                        <!-- 个人信息-->\n" +
            "                        <div class=\"ui-bfc-bd bd\">\n" +
            "                            <table width=\"100%\">\n" +
            "                                <tbody>\n" +
            "                                <tr>\n" +
            "                                    <td class=\"cell-title\">用户名：</td>\n" +
            "                                    <td>\n" +
            "                                        <p>"+userPetname+"</p>\n" +
            "                                    </td>\n" +
            "                                </tr>\n" +
            "                                    <tr>\n" +
            "                                        <td class=\"cell-title\">电子邮箱：</td>\n" +
            "                                        <td>\n" +
            "                                            <p>"+userEmail+"</p>\n" +
            "                                            <span class=\"gray\">(未验证)</span>\n" +
            "                                            <a class=\"update-info\">修改</a>\n" +
            "                                        </td>\n" +
            "\n" +
            "                                    </tr>\n" +
            "                                    <tr>\n" +
            "                                        <td class=\"cell-title\">手机号码：</td>\n" +
            "                                        <td>\n" +
            "                                            <p>"+userTel+"</p>\n" +
            "                                            <span class=\"gray\">(未验证)</span>\n" +
            "                                            <a class=\"update-info\">修改</a>\n" +
            "                                        </td>\n" +
            "                                    </tr>\n" +
            "                                <tr>\n" +
            "                                    <td class=\"cell-title\">身份证：</td>\n" +
            "                                    <td>\n" +
            "                                        <p>"+userIdcard+"</p>\n" +
            "                                        <span class=\"gray\">(未验证)</span>\n" +
            "                                        <a class=\"update-info\">立即认证</a>\n" +
            "                                    </td>\n" +
            "                                </tr>\n" +
            "                                <tr>\n" +
            "                                    <td class=\"cell-title\">真实姓名：</td>\n" +
            "                                    <td>\n" +
            "                                        <p>"+userName+"</p>\n" +
            "                                    </td>\n" +
            "                                </tr>\n" +
            "                                <tr>\n" +
            "                                    <td class=\"cell-title\">生日：</td>\n" +
            "                                    <td>\n" +
            "                                        <p>"+userBir+" </p>\n" +
            "                                    </td>\n" +
            "                                </tr>\n" +
            "                                <tr>\n" +
            "                                    <td class=\"cell-title\">性别：</td>\n" +
            "                                    <td>\n" +
            "                                        <p>"+userGender+" </p>\n" +
            "                                    </td>\n" +
            "                                </tr>\n" +
            "                                </tbody>\n" +
            "                            </table>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"operate-panel\">\n" +
            "                        <a class=\"ui-btn ui-btn-white-l update-info\">修改信息</a>\n" +
            "                    </div>\n" +
            "                </div>";
        $("#info1").append(userEle);

        $(".userId").val(userId);
        $("#userTel").val(userTel) ;
        $("#userPsd").val(userPsd) ;
        $("#userGender").val(userGender) ;
        $("#userIdcard").val(userIdcard) ;
        $("#userName").val(userName) ;
        $("#userEmail").val(userEmail) ;
        $("#userBir").val(userBir) ;
        $("#userPetname").val(userPetname) ;
    })
}
//修改
function updateUser(){
    var userDate = $("#myinfo").serialize();
    console.log(userDate)
    var url = "/usercenter/user/update";
    var gender = $(".gerderBtn:checked").val();
    $.ajax({
        type:"post",
        url:url,
        data:{
            userTel:$("#userTel").val(),
            userPsd:$("#ConfirmPassword").val(),
            userGender:gender,
            userIdcard:$("#userIdcard").val(),
            userName:$("#userName").val(),
            userEmail:$("#userEmail").val(),
            userBir:$("#userBir").val(),
            userPetname:$("#userPetname").val()
        },
        success:function (result){
            console.log("result"+result);
            //window.location.href = "/customer/customer_center.html";
            console.log("122345")
        }
    })
}
//修改个人中心
$("#Submit").click(function (){
    console.log(1);
    updateUser();
});

//验证用户名
if ($(".userPetname").val() != null){
    $(".userPetname").focus(checkUsername);
}

function checkUsername(){
    var userPetname = $(".userPetname").val();
    //console.log(username);
    if(!/^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(userPetname)){
        $(".userPetnameTip").text("用户名只能有中文、英文、数字但不包括下划线等符号");
        return false;
    }else{
        $(".userPetnameTip").text("");
        return true;
    }
}

//验证手机号

if ($(".usertel").val() != null){
    $(".usertel").focus(checkUsertel);
}
function checkUsertel(){
    var usertel = $(".usertel").val();
    if(!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(usertel)){
        $(".useretelTip").text("手机号格式不对");
        return false;
    }else{
        $(".useretelTip").text("");
        return true;
    }
}

//验证邮箱
if ($(".useremail").val() != null){
    $(".useremail").focus(checkUseremail);
}

function checkUseremail(){
    var useremail = $(".useremail").val();
    if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(useremail)){
        $(".useremailTip").text("邮箱格式不对");
        return false;
    }else{
        $(".useremailTip").text("");
        return true;
    }
}
//验证身份证
if($(".useridcardIpt").val() != null){
    $(".useridcardIpt").focus(checkUserIdCard);
}
function checkUserIdCard(){
    var useridcardIpt = $(".useridcardIpt").val();
    if(!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(useridcardIpt)){
        $(".userIdcardTip").text("身份证格式不对");
        return false;
    }else{
        $(".userIdcardTip").text("");
        return true;
    }
}






//修改密码
$("#btnSubmit").click(function (){
    console.log(2);
    console.log(checkUserNewpassword());
    console.log(checkUserpassword());
    if(checkUserNewpassword() && checkUserpassword()){
        updateUser();
    }
});
//验证新密码
$("#NewPassword").blur(checkUserpassword);
function checkUserpassword(){
    var NewPassword =  $("#NewPassword").val();
    var Password = $("#userPsd").val();
    if(NewPassword===""||NewPassword==null){
        $(".NewPasswordwordTip").text("密码不能为空");
        return false;
    }else if(!/^[a-zA-Z]\w{5,17}$/.test(NewPassword)){
        $(".NewPasswordwordTip").text("密码只能是字母、数字、下划线组成，长度为6-18个字符");
        return false;
    }else if(Password === NewPassword) {
        $(".NewPasswordwordTip").text("密码与原密码一致");
        return false;
    }else{
        $(".NewPasswordwordTip").text("");
        return true;
    }
}
//验证新密码
$("#ConfirmPassword").blur(checkUserNewpassword);
function checkUserNewpassword(){
    var ConfirmPassword =  $("#ConfirmPassword").val();
    var NewPassword =  $("#NewPassword").val();
    if(ConfirmPassword===""||ConfirmPassword==null){
        $(".ConfirmPasswordwordTip").text("密码不能为空");
        return false;
    }else if(!/^[a-zA-Z]\w{5,17}$/.test(ConfirmPassword)){
        $(".ConfirmPasswordwordTip").text("密码只能是字母、数字、下划线组成，长度为6-18个字符");
        return false;
    }else if(ConfirmPassword !== NewPassword) {
        $(".ConfirmPasswordwordTip").text("密码与上一个不一致");
        return false;
    }else{
        $(".ConfirmPasswordwordTip").text("");
        return true;
    }
}
