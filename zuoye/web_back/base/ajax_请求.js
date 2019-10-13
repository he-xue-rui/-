var qingQiu = {};
    qingQiu.dengLu = function (opt) {// 登陆请求接口
        $.ajax({
            type: opt.type,
            url: DENGLU,
            data: opt.data,
            success: opt.fun
        })
    }
    qingQiu.tuiChu = function (opt) {// 退出登陆接口
        $.ajax({
            type: opt.type,
            url: TUICHU_DL,
            data: opt.data,
            success: opt.fun
        })
    }
    qingQiu.huoQuUser = function (opt) {// 获取用户信息(首页)
        $.ajax({
            type: opt.type,
            url: HUOQU,
            data: opt.data,
            success: opt.fun
        })
    }
    qingQiu.huoquuser = function (opt) {
        $.ajax({
            type: opt.type,
            url: HUOQUUSER,
            data: opt.data,
            success: opt.fun
        })
    }
    qingQiu.xiugai = function (opt) {
        $.ajax({
            type: opt.type,
            url: XIUGAIUSER,
            data: opt.data,
            contentType: false,
            processData: false,
            success: opt.fun
        })
    }



// $.ajax({
//     type: 'post',
//     url: DENGLU,
//     data: {
//         user_name: txt,
//         password: pas
//     },
//     success: function (res) {
//         // console.log(8)
//         console.log(res)
//         if (res.code === 200) {
//             location.href = './index.html';
//         } else {
//             $('.modal').modal('show').find('.modal-body p').text('用户名或密码错误，请重新输入')
//             // alert('用户名或密码错误，请重新输入');
//             // txt = '';
//             pas = '';
//         }
//     }
// })