hexo.extend.helper.register('footerItems', function(array, siteRoot) {
    let result = new Array();

    for(let i = 0; i < array.length; i++) {
        for(let [key, value] of Object.entries(array[i])) {
            let url = siteRoot + value;
            result.push(`<li><a href="${url}">${key}</a></li>`);
        }
    }

    return result.join("\n");
});