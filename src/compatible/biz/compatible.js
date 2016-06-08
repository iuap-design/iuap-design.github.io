// 兼容旧版本，jquery必须存在
$.DataTable = u.DataTable;

$.Row = u.Row;

$.createApp = u.createApp;

$.NumberFormater = u.NumberFormater;

$.isDate = u.isDate;


ServerEvent.fn.processXHRError = function (self, rsl, state, xhr) {
    if (typeof rsl === 'string')
        rsl = JSON.parse(rsl)
    if (xhr.getResponseHeader && xhr.getResponseHeader("X-Error")) {
        u.showMessageDialog({type: "info", title: "提示", msg: rsl["message"], backdrop: true});
        if (rsl["operate"]) {
            eval(rsl["operate"]);
        }
        return false;
    }
    return true;
};