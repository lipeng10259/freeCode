

function loadImageAsync( url ) {

    return new Promsie ( function (resolve , reject) {

        const iamge = new Image();

        image.onload = function () {

            resolve(iamge);

        };

        image.onerror = function () {

            reject(new Error('could not load image at ' + url));

        };

        image.src = url;

    })

}

// 上面代码中，使用Promise包装了一个图片加载的异步操作。如果加载成功，就调用resolve方法，否则就调用reject方法。