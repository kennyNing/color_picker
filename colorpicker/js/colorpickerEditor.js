$.extend($.fn.datagrid.defaults.editors, {
    colorpicker: {//colorpicker就是你要自定义editor的名称
        init: function (container, options) {
            // var input = $('<input class="easyuidatetimebox">').appendTo(container);
            var input = $('<input>').appendTo(container);

            input.ColorPicker({
                color: '#0000ff',
                onShow: function (colpkr) {
                    $(colpkr).fadeIn(500);
                    return false;
                },
                onHide: function (colpkr) {
                    $(colpkr).fadeOut(500);
                    return false;
                },
                onChange: function (hsb, hex, rgb) {        
                    input.css('backgroundColor', '#' + hex);
                    input.val('0x' + hex);
                }
            });
            return input;
        },
        getValue: function (target) {
            return $(target).val();
        },
        setValue: function (target, value) {
            // 特殊处理, 因为在flash里使用的是0x16进制格式
            value = value.replace(/0x/, "#")
            $(target).val(value);
            $(target).css('backgroundColor', value);
            $(target).ColorPickerSetColor(value);
        },
        resize: function (target, width) {
            var input = $(target);
            if ($.boxModel == true) {
                input.width(width - (input.outerWidth() - input.width()));
            } else {
                input.width(width);
            }
        }
    }
});


