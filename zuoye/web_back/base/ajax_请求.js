var ask = {};
    ask.dengLu = function (opt) {// 登陆请求接口
        $.ajax({
            type: opt.type,
            url: DENGLU,
            data: opt.data,
            success: opt.fun
        })
    }
    ask.tuiChu = function (opt) {// 退出登陆接口
        $.ajax({
            type: opt.type,
            url: TUICHU_DL,
            data: opt.data,
            success: opt.fun
        })
    }
    ask.huoQuUser = function (opt) {  // 获取用户信息(两条数据)
        $.ajax({
            type: opt.type,
            url: HUOQU,
            data: opt.data,
            success: opt.fun
        })
    }
    ask.huoquuser = function (opt) {  //获取用户信息(五条数据)
        $.ajax({
            type: opt.type,
            url: HUOQUUSER,
            data: opt.data,
            success: opt.fun
        })
    }
    ask.xiugai = function (opt) { //编辑用户信息
        $.ajax({
            type: opt.type,
            url: XIUGAIUSER,
            data: opt.data,
            contentType: false,
            processData: false,
            success: opt.fun
        })
    }


    ask.class_gain = function (opt) { //获取文章类别
        $.ajax({
            type: 'get',
            url: CLASS_GAIN,
            data: opt.data,
            success: opt.fun
        })
    }
    ask.class_add = function (opt) { //新增文章类别
        $.ajax({
            type: 'post',
            url: CLASS_ADD,
            data: opt.data,
            success: opt.fun
        })
    }
    ask.class_edit = function (opt) { //编辑文章类别
        $.ajax({
            type: 'post',
            url: CLASS_EDIT,
            data: opt.data,
            success: opt.fun
        })
    }
    ask.class_delete = function (opt) { //删除文章类别
        $.ajax({
            type: 'post',
            url: CLASS_DELETE,
            data: opt.data,
            success: opt.fun
        })
    }



    ask.essay_search = function (opt) { //文章搜索、筛选
        $.ajax({
            type: 'get',
            url: ESSAY_SEARCH,
            data: opt.data,
            success: opt.fun
        })
    }




















