var $CYK_cartContainer = $('<div class="mzContainer">\
                            <div class= "check-container" >\
                                <div class="shop-cart-nav">\
                                    <table>\
                                        <tr>\
                                            <td class="check-area">\
                                                <a href="javascript:;" class="check-label check-all">\
                                                    <i class="checkbox">\
                                                        <span class="check-mark"></span>\
                                                    </i>\
                                                    <em class="check-name">全选</em>\
                                                </a>\
                                            </td>\
                                            <td class="singal-price">\
                                                单价(元)\
                                            </td>\
                                            <td class="volumes">\
                                                数量\
                                            </td>\
                                            <td class="small-total">\
                                                小计(元)\
                                            </td>\
                                            <td class="edit-area">\
                                                <span class="edit">编辑</span>\
                                            </td>\
                                        </tr>\
                                    </table>\
                                </div>\
                                <ul class="goods-ul">\
                                </ul>\
                            </div >\
                            <div class="shop-cart-footer">\
                                <div class="cart-foot clearfix">\
                                    <div class="cart-foot-left">\
                                        <a href="javascript:;" class="check-label check-all">\
                                            <i class="checkbox">\
                                                <span class="check-mark"></span>\
                                            </i>\
                                            <em class="check-name">全选</em>\
                                        </a>\
                                        <em class="goods-delete">删除选中的商品</em>\
                                        <em class="goods-num">\
                                            共<span class="sum"></span>件商品，\
                                            已选择&nbsp;<span class="sum-selected"></span>&nbsp;件\
                                        </em>\
                                    </div>\
                                    <div class="cart-foot-right">\
                                        <em class="total-bill">\
                                            合计(不含运费)：\
                                        <span class="bill-price"></span>\
                                        </em>\
                                        <a href="orderDetail.html" class="order-btn ban-order">去结算</a>\
                                    </div>\
                                </div>\
                            </div>\
                        </div >');

$(".header").after($CYK_cartContainer);

var CYK_datas = {

    '酒庄系列': [
        {
            'name': '玫瑰山庄园红酒',
            "img": 'image/a2.jpg',
            'goodTip': '预约 十单元 8699起',
            'singalPrice': '￥200.00'
        }
    ],

    '优选系列': [
        {
            'name': '泸州老窖',
            "img": 'image/h1.jpg',
            'goodTip': '中国名酒 驰名商标',
            'singalPrice': '￥1499.00'
        },
        {
            'name': '阿玛罗尼',
            "img": 'image/k2.jpg',
            'goodTip': '2009年雷诺帝酒庄阿玛罗尼经典红葡萄酒',
            'singalPrice': '￥2699.00'
        },
        {
            'name': '人头马XO',
            "img": 'image/h3.jpg',
            'goodTip': '人头马XO 干邑白兰地  700ml',
            'singalPrice': '￥2999.00'
        },
        {
            'name': '雷司令1+伊诺奥塔维',
            "img": 'image/i2.jpg',
            'goodTip': '【名庄口感】雷司令1+伊诺奥塔维',
            'singalPrice': '￥2499.00'
        }

    ]

};
$.each(CYK_datas, function (i, e) {
    var CYK_newTr = '';
    var $CYK_newLi = $('<li class="goods-list">\
                        <table class= "goods-header" >\
                            <tr>\
                                <td colspan="5">\
                                    <a href="javascript:;" class="check-label check-local-part">\
                                        <i class="checkbox">\
                                            <span class="check-mark"></span>\
                                        </i>\
                                        <em class="check-name">' + i + '</em>\
                                    </a>\
                                </td>\
                            </tr>\
                        </table >\
                        <table class="goods-body">\
                        </table>\
                    </li>');

    $(e).each(function (i, e) {
        CYK_newTr += '<tr>\
                        <td class="goods-col-select">\
                            <a href="javascript:;" class="check-label check-product">\
                                <i class="checkbox">\
                                    <span class="check-mark"></span>\
                                </i>\
                            </a>\
                            <a href="javascript:;" class="goods-img">\
                                <img src="'+ e.img + '"\
                                    alt="">\
                            </a>\
                            <a href="javascript:;" class="goods-info">\
                                <h4 class="goods-info-title">'+ e.name + '</h4>\
                                <p class="goods-info-tips">'+ e.goodTip + '</p>\
                            </a>\
                        </td>\
                        <td class="goods-col-price">\
                            <span>'+ e.singalPrice + '</span>\
                        </td>\
                        <td class="goods-col-volumes">\
                            <div class="num-ctrl-area clearfix">\
                                <button class="minus">-</button>\
                                <input type="text" value="1" class="input">\
                                <button class="plus">+</button>\
                                <em class="hint">限购10件</em>\
                            </div>\
                        </td>\
                        <td class="goods-col-total">\
                            <span></span>\
                        </td>\
                        <td class="goods-col-ctrl">\
                            <span>- -</span>\
                            <i class="del-product">\
                                <span class="line-left"></span>\
                                <span class="line-right"></span>\
                            </i>\
                        </td>\
                    </tr>';
    });

    $CYK_newLi.children("table.goods-body").append(CYK_newTr);
    $CYK_newLi.appendTo($("ul.goods-ul"));

});


(function (win, undefined) {
    var CYK_ShopCart = function () {
        this.judge = '';
        this.curUnitBtn = null;
        this.fixedObj();
        this.dynamic1Obj();
        this.calcInfo();
        this.singalDel();
        this.globalDel();
        
        this.orderBtnCss();
        this.twoBtn();
        this.floatDelBtn();
        this.checkBox();
        this.inputChange();
        this.fixed();
        this.init();
    };
    CYK_ShopCart.prototype = {
        constructor: CYK_ShopCart,
        //初始化事件
        init: function () {
            var CYK_shopCart = this;

            this.input.each(function (i, e) {
                var $thisButton = $(e).parent().find(CYK_shopCart.button);
                CYK_shopCart.buttonCss($thisButton, $(e).val());
            });

            /*编辑按钮*/
            this.editBtn.parent().on("click", function () {

                CYK_shopCart.editBtn.toggleClass(CYK_shopCart.edit);
                if (CYK_shopCart.editBtn.hasClass(CYK_shopCart.edit)) {
                    CYK_shopCart.editBtn.text("编辑");
                    CYK_shopCart.delCtrl.show().siblings().fadeOut(100);
                } else {
                    CYK_shopCart.editBtn.text("完成");
                    CYK_shopCart.delCtrl.hide().siblings().fadeIn(100);
                };
            });
            /*弹出框取消按钮*/
            this.cancelBtn.on("click", function () {
                CYK_shopCart.floatBox.fadeOut(200);
            });
            /*弹出框关闭按钮*/
            this.closeBtn.on("click", function () {
                CYK_shopCart.floatBox.fadeOut(200);
            });

            $(window).on("resize scroll", function () {
                CYK_shopCart.fixed();
            });
        },

        //获取固定的元素
        fixedObj: function () {
            this.mzContainer = $(".mzContainer");
            this.cartFoot = this.mzContainer.find("div.shop-cart-footer");
            this.checkAll = this.mzContainer.find("a.check-all");//全选按钮
            this.sum = this.mzContainer.find("span.sum");//总件数
            this.sumed = this.mzContainer.find("span.sum-selected");//已选总件数
            this.billPrice = this.mzContainer.find("span.bill-price");//合计价格
            this.orderBtn = this.mzContainer.find("a.order-btn");//结算按钮
            this.editBtn = this.mzContainer.find("td.edit-area>span.edit");//编辑按钮
            this.delSelected = this.mzContainer.find("em.goods-delete");//删除选中商品按钮
            //悬浮提示框区域
            this.floatBox = $(".float-box");
            this.delBtn = this.floatBox.find("a.delete");
            this.cancelBtn = this.floatBox.find("a.cancel");
            this.closeBtn = this.floatBox.find("i.close-btn");
            this.confirmTitle = this.floatBox.find("h4.confirm-title>span");
            this.confirmCon = this.floatBox.find("div.confirm-content");
            //class样式
            this.checked = 'checked';
            this.forbid = 'forbid';
            this.fixSite = 'fixed';
            this.banOrder = 'banOrder';
            this.edit = 'edit';
        },
        //获取当存在删除添加商品时的变动元素
        dynamic1Obj: function () {
            this.checkLabelAll = $("a.check-label");
            this.checkContainer = $(".check-container");
            this.cartNav = this.checkContainer.children(".shop-cart-nav");
            this.goodsList = this.checkContainer.find("li.goods-list");
            this.goodsHeader = this.goodsList.children("table.goods-header");
            this.goodsBody = this.goodsList.children("table.goods-body");
            this.checkLocalPart = this.goodsHeader.find("a.check-local-part");//某个品类的头部按钮
            this.goodsTr = this.goodsBody.find("tr");//商品卡片
            this.checkProduct = this.goodsBody.find("a.check-product");//单个商品勾选按钮
            this.button = this.goodsBody.find("button");
            this.plus = this.goodsBody.find(".plus");//加号按钮
            this.minus = this.goodsBody.find(".minus");//减号按钮
            this.input = this.goodsBody.find(".input");//输入框
            this.singalPrice = this.goodsBody.find("td.goods-col-price>span");//单价
            this.smallTotal = this.goodsBody.find("td.goods-col-total>span");//小计
            this.delCtrl = this.goodsBody.find("td.goods-col-ctrl>span");//小计后面的编辑区
            this.delProduct = this.goodsBody.find("i.del-product");
        },

        //获取选中与未选中变化时的元素
        dynamic2Obj: function () {
            this.checkLocalPartEd = $("a.check-local-part.checked");//某个品类中已经选中的全选按钮
            this.checkProductEd = $("a.check-product.checked");//单个商品中已经选中的勾选按钮
        },
        //总计、总件数、已选件数、小计计算
        calcInfo: function () {
            var CYK_shopCart = this;
            this.dynamic2Obj();
            var sum = 0,
                sumed = 0,
                total = 0;
            this.goodsTr.each(function (i, e) {
                var $e = $(e),
                    numVal = parseInt($e.find(CYK_shopCart.input).val()),//输入框值
                    unitPrice = parseInt($e.find(CYK_shopCart.singalPrice).text().slice(1)),//单价
                    $smalltotalTxt = $e.find(CYK_shopCart.smallTotal);//小计
                sum += numVal;//计算总件数
                $smalltotalTxt.text("￥" + (numVal * unitPrice).toFixed(2));//计算小计价格
            });
            this.checkProductEd.closest(CYK_shopCart.goodsTr).each(function (i, e) {
                var $e = $(e),
                    numVal = parseInt($e.find(CYK_shopCart.input).val()),
                    unitPrice = parseInt($e.find(CYK_shopCart.singalPrice).text().slice(1));//单价
                sumed += numVal;//已选总件数
                total += unitPrice * numVal;//计算总价价格
            });
            this.sum.text(sum);
            this.sumed.text(sumed);
            this.billPrice.text('￥' + total.toFixed(2));
        },
        //当输入框的值<=1或者>=10时，旁边的button变成禁止样式
        buttonCss: function (button, value) {
            var CYK_shopCart = this;
            button.each(function () {
                $(this).removeClass(CYK_shopCart.forbid);
            });
            if (value == 1) {
                button.eq(0).addClass(CYK_shopCart.forbid);
            };
            if (value == 10) {
                button.eq(1).addClass(CYK_shopCart.forbid);
            };
        },
        //button按钮的点击事件
        twoBtn: function () {
            var CYK_shopCart = this;
            CYK_shopCart.plus.on("click", function () {
                var $this = $(this);
                var value = parseInt($this.prev().val());
                value++;
                if (value > 10) {
                    return;
                };
                CYK_shopCart.buttonCss($this.parent().find(CYK_shopCart.button), value);
                $this.prev().val(value);
                CYK_shopCart.calcInfo();
            });

            /*减号按钮*/
            CYK_shopCart.minus.on("click", function () {
                var $this = $(this);
                var value = parseInt($this.next().val());
                value--;
                if (value < 1) {
                    return;
                };
                CYK_shopCart.buttonCss($this.parent().find(CYK_shopCart.button), value);
                $this.next().val(value);
                CYK_shopCart.calcInfo();
            });
        },
        //输入框改变事件
        inputChange: function () {
            var CYK_shopCart = this;
            this.input.on("change", function () {
                var $this = $(this),
                    $thisVal = parseInt($this.val());
                if ($thisVal > 10) {
                    $this.val(10);
                } else if ($thisVal < 1 || isNaN($thisVal)) {
                    $this.val(1);
                } else {
                    $this.val($thisVal);
                };
                CYK_shopCart.calcInfo();
                console.log($this.parent().find(CYK_shopCart.button))
                CYK_shopCart.buttonCss($this.parent().find(CYK_shopCart.button), parseInt($this.val()));
            });
        },
        //结算按钮样式变化
        orderBtnCss: function () {
            if (parseInt(this.sumed.text()) != 0) {
                this.orderBtn.removeClass(this.banOrder);
            } else {
                this.orderBtn.addClass(this.banOrder);
            };
        },
        //删除选中商品的点击事件
        globalDel: function () {
            var CYK_shopCart = this;
            this.delSelected.on("click", function () {
                CYK_shopCart.judge = "global";
                CYK_shopCart.floatBox.fadeIn(200);
                if (CYK_shopCart.checkProductEd.length != 0) {
                    CYK_shopCart.confirmTitle.text("删除");
                    CYK_shopCart.confirmCon.text("您确定要删除选中商品吗？");
                    CYK_shopCart.delBtn.show();
                    CYK_shopCart.cancelBtn.text("取消");
                } else {
                    CYK_shopCart.confirmTitle.text("提示");
                    CYK_shopCart.confirmCon.text("请选择您要删除的商品");
                    CYK_shopCart.delBtn.hide();
                    CYK_shopCart.cancelBtn.text("确定");
                };
            });
        },
        //删除单个商品的点击事件
        singalDel: function () {
            var CYK_shopCart = this;
            this.delProduct.on("click", function () {
                CYK_shopCart.judge = "singal";
                CYK_shopCart.curUnitBtn = $(this);
                CYK_shopCart.floatBox.fadeIn(200);
                CYK_shopCart.confirmTitle.text("删除");
                CYK_shopCart.confirmCon.text("您确定要删除该商品吗？");
                CYK_shopCart.delBtn.show();
                CYK_shopCart.cancelBtn.text("取消");
            });
        },
        //悬浮提示框中的确定删除点击事件
        floatDelBtn: function () {
            var CYK_shopCart = this;
            CYK_shopCart.delBtn.on("click", function () {
                CYK_shopCart.floatBox.fadeOut(200);
                if (CYK_shopCart.judge == "global") {
                    CYK_shopCart.checkProductEd.closest(CYK_shopCart.goodsTr).remove();
                    if (CYK_shopCart.checkLocalPart.hasClass(CYK_shopCart.checked)) {
                        CYK_shopCart.checkLocalPartEd.closest(CYK_shopCart.goodsList).remove();
                        if (CYK_shopCart.checkAll.hasClass(CYK_shopCart.checked)) {
                            CYK_shopCart.mzContainer.html("").css("height", '25rem');
                        };
                    };
                } else if (CYK_shopCart.judge == "singal") {
                    var curLiIndex = CYK_shopCart.curUnitBtn.closest(CYK_shopCart.goodsList).index();
                    CYK_shopCart.curUnitBtn.closest(CYK_shopCart.goodsTr).remove();

                    if (CYK_shopCart.goodsList.eq(curLiIndex).find(CYK_shopCart.goodsTr).length == 0) {
                        console.log(1)
                        CYK_shopCart.goodsList.eq(curLiIndex).remove();
                    };
                };
                CYK_shopCart.dynamic1Obj();
                CYK_shopCart.dynamic2Obj();
                CYK_shopCart.calcInfo();
                CYK_shopCart.orderBtnCss();
                CYK_shopCart.fixed();
                if (CYK_shopCart.goodsTr.length == 0) {
                    CYK_shopCart.mzContainer.html("").css("height", '25rem');
                };
            });
        },
        //checkbox勾选框点击事件
        checkBox: function () {
            var CYK_shopCart = this;
            /*全选按钮*/
            CYK_shopCart.checkAll.on("click", function () {
                var $this = $(this);
                $this.toggleClass(CYK_shopCart.checked);
                CYK_shopCart.dynamic2Obj();
                if ($this.hasClass(CYK_shopCart.checked)) {
                    CYK_shopCart.checkLabelAll.addClass(CYK_shopCart.checked);
                } else {
                    CYK_shopCart.checkLabelAll.removeClass(CYK_shopCart.checked);
                };
                CYK_shopCart.calcInfo();
                CYK_shopCart.orderBtnCss();
            });

            /*分类勾选按钮*/
            CYK_shopCart.checkLocalPart.on("click", function () {
                var $this = $(this);
                $this.toggleClass(CYK_shopCart.checked);
                CYK_shopCart.dynamic2Obj();
                var $thisChildCheck = $this.closest(CYK_shopCart.goodsList).find(CYK_shopCart.checkProduct);//某一品类的单个商品勾选按钮
                if ($this.hasClass(CYK_shopCart.checked)) {
                    $thisChildCheck.addClass(CYK_shopCart.checked);
                } else {
                    $thisChildCheck.removeClass(CYK_shopCart.checked);
                };
                if (CYK_shopCart.checkLocalPartEd.length == CYK_shopCart.checkLocalPart.length) {
                    CYK_shopCart.checkAll.addClass(CYK_shopCart.checked);
                } else {
                    CYK_shopCart.checkAll.removeClass(CYK_shopCart.checked);
                }
                CYK_shopCart.calcInfo();
                CYK_shopCart.orderBtnCss();
            });
            /*具体商品勾选按钮*/
            CYK_shopCart.checkProduct.on("click", function () {
                var $this = $(this);
                $this.toggleClass(CYK_shopCart.checked);
                CYK_shopCart.dynamic2Obj();
                var $siblings = $this.closest(CYK_shopCart.goodsBody).find(CYK_shopCart.checkProduct),
                    $siblingsEd = $this.closest(CYK_shopCart.goodsBody).find(CYK_shopCart.checkProductEd),
                    $thisPart = $this.closest(CYK_shopCart.goodsList).find(CYK_shopCart.checkLocalPart);
                if ($siblings.length == $siblingsEd.length) {
                    $thisPart.addClass(CYK_shopCart.checked);
                } else {
                    $thisPart.removeClass(CYK_shopCart.checked);
                };
                if (CYK_shopCart.checkProduct.length == CYK_shopCart.checkProductEd.length) {
                    CYK_shopCart.checkAll.addClass(CYK_shopCart.checked);
                } else {
                    CYK_shopCart.checkAll.removeClass(CYK_shopCart.checked);
                };
                CYK_shopCart.calcInfo();
                CYK_shopCart.orderBtnCss();
            });
        },
        //foot结算区域位置变化
        fixed: function () {
            var offsetHeight = this.checkContainer.offset().top + this.checkContainer.outerHeight() + this.cartFoot.outerHeight() - $(window).height();
            if (offsetHeight >= $(document).scrollTop()) {
                this.cartFoot.addClass(this.fixSite);
            } else {
                this.cartFoot.removeClass(this.fixSite);
            };
        }
    }
    window.CYK_ShopCart = CYK_ShopCart;
}(window));
var CYK_shopCart = new CYK_ShopCart();

